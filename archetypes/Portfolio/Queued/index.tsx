import React, { useMemo, useState } from 'react';
import { CommitActionEnum, CommitEnum, CommitsFocusEnum, SideEnum } from '@libs/constants';
import usePendingCommits from '@libs/hooks/useQueuedCommits';
import { useWeb3 } from '@context/Web3Context/Web3Context';
import { Table, TableHeader, TableHeaderCell, TableRow, TableRowCell } from '@components/General/TWTable';
import TWButtonGroup from '@components/General/TWButtonGroup';
import { useRouter } from 'next/router';
import { QueuedCommit } from '@libs/types/General';
import { ethers } from 'ethers';
import { Logo, tokenSymbolToLogoTicker } from '@components/General';
import { toApproxCurrency } from '@libs/utils/converters';
import Actions from '@components/TokenActions';
import { ArbiscanEnum } from '@libs/utils/rpcMethods';
import BigNumber from 'bignumber.js';
import TimeLeft from '@components/TimeLeft';

const queuedOptions = [
    {
        key: CommitsFocusEnum.mints,
        text: 'Queued Mints',
    },
    {
        key: CommitsFocusEnum.burns,
        text: 'Queued Burns',
    },
];

export default (({ focus }) => {
    const router = useRouter();
    const { provider } = useWeb3();

    const commits = usePendingCommits();

    const { mintCommits, burnCommits } = useMemo(
        () => ({
            mintCommits: commits.filter(
                (commit) => commit.type === CommitEnum.long_mint || commit.type === CommitEnum.short_mint,
            ),
            burnCommits: commits.filter(
                (commit) => commit.type === CommitEnum.long_burn || commit.type === CommitEnum.short_burn,
            ),
        }),
        [commits],
    );

    return (
        <div className="bg-theme-background rounded-xl shadow m-4 p-4">
            <div className="my-4">
                <TWButtonGroup
                    value={focus}
                    size="lg"
                    onClick={(option) =>
                        router.push({
                            query: {
                                focus: option === CommitsFocusEnum.mints ? 'mints' : 'burns',
                            },
                        })
                    }
                    color={'tracer'}
                    options={queuedOptions}
                />
            </div>
            <Table>
                {focus === CommitsFocusEnum.mints ? (
                    <>
                        <TableHeader>
                            <TableHeaderCell>Token</TableHeaderCell>
                            <TableHeaderCell>Amount</TableHeaderCell>
                            <TableHeaderCell>Tokens / Price *</TableHeaderCell>
                            <TableHeaderCell>Mint In</TableHeaderCell>
                            <TableHeaderCell>{/* Empty header for buttons column */}</TableHeaderCell>
                        </TableHeader>
                        {mintCommits.map((commit, index) => (
                            <CommitRow
                                key={`pcr-${index}`}
                                index={index}
                                provider={provider ?? null}
                                {...commit}
                                burnRow={false}
                            />
                        ))}
                    </>
                ) : (
                    <>
                        <TableHeader>
                            <TableHeaderCell>Token</TableHeaderCell>
                            <TableHeaderCell>Amount</TableHeaderCell>
                            <TableHeaderCell>Return / Price *</TableHeaderCell>
                            <TableHeaderCell>Burn In</TableHeaderCell>
                            <TableHeaderCell>{/* Empty header for buttons column */}</TableHeaderCell>
                        </TableHeader>
                        {burnCommits.map((commit, index) => (
                            <CommitRow
                                key={`pcr-${index}`}
                                index={index}
                                provider={provider ?? null}
                                {...commit}
                                burnRow={true}
                            />
                        ))}
                    </>
                )}
            </Table>
            <div className="flex">
                <div className="mt-8 max-w-2xl text-sm text-theme-text opacity-80">
                    * <strong>Token Price</strong> and{' '}
                    <strong>{focus === CommitsFocusEnum.mints ? 'Amount' : 'Return'}</strong> values are indicative
                    only, and represent the estimated values for the next rebalance, given the committed mints and burns
                    and change in price of the underlying asset.
                </div>
            </div>
        </div>
    );
}) as React.FC<{
    focus: CommitsFocusEnum;
}>;

const CommitRow: React.FC<
    QueuedCommit & {
        provider: ethers.providers.JsonRpcProvider | null;
        index: number;
        burnRow: boolean; // is burnRow
    }
> = ({
    token,
    txnHash,
    tokenPrice,
    amount,
    nextRebalance,
    provider,
    index,
    frontRunningInterval,
    updateInterval,
    created,
    burnRow,
}) => {
    const [pendingUpkeep, setPendingUpkeep] = useState(false);

    return (
        <TableRow key={txnHash} rowNumber={index}>
            <TableRowCell>
                <div className="flex my-auto">
                    <Logo size="lg" ticker={tokenSymbolToLogoTicker(token.symbol)} className="inline my-auto mr-2" />
                    <div>
                        <div className="flex text-xl">
                            <div>
                                {token.symbol.split('-')[0][0]}-
                                {token.symbol.split('-')[1].split('/')[0] === 'BTC' ? 'Bitcoin' : 'Ethereum'}
                            </div>
                            &nbsp;
                            <div className={`${token.side === SideEnum.long ? 'green' : 'red'}`}>
                                {token.side === SideEnum.long ? 'Long' : 'Short'}
                            </div>
                        </div>
                        <div className="text-cool-gray-500">{token.name} </div>
                    </div>
                </div>
            </TableRowCell>
            {burnRow ? (
                <>
                    <TableRowCell>{amount.toFixed(2)} tokens</TableRowCell>
                    <TableRowCell>
                        <div>{toApproxCurrency(amount.times(tokenPrice))} USDC</div>
                        <div>at {toApproxCurrency(tokenPrice)} USDC/token</div>
                    </TableRowCell>
                </>
            ) : (
                <>
                    <TableRowCell>{toApproxCurrency(amount)}</TableRowCell>
                    <TableRowCell>
                        <div>{amount.div(tokenPrice).toFixed(2)} tokens</div>
                        <div className="text-cool-gray-500">at {toApproxCurrency(tokenPrice)} USDC/token</div>
                    </TableRowCell>
                </>
            )}
            <TableRowCell>
                <ReceiveIn
                    pendingUpkeep={pendingUpkeep}
                    setPendingUpkeep={setPendingUpkeep}
                    actionType={CommitActionEnum.mint}
                    nextRebalance={nextRebalance}
                    created={created}
                    frontRunningInterval={frontRunningInterval}
                    updateInterval={updateInterval}
                />
            </TableRowCell>
            <TableRowCell className="flex text-right">
                <Actions
                    token={token}
                    provider={provider}
                    arbiscanTarget={{
                        type: ArbiscanEnum.txn,
                        target: txnHash,
                    }}
                />
            </TableRowCell>
        </TableRow>
    );
};
interface ReceiveInProps {
    pendingUpkeep: boolean;
    setPendingUpkeep: React.Dispatch<React.SetStateAction<boolean>>;
    actionType: CommitActionEnum;
    nextRebalance: BigNumber;
    created: number;
    frontRunningInterval: BigNumber;
    updateInterval: BigNumber;
}
const ReceiveIn: React.FC<ReceiveInProps> = ({
    pendingUpkeep,
    setPendingUpkeep,
    actionType,
    nextRebalance,
    created,
    frontRunningInterval,
    updateInterval,
}: ReceiveInProps) => {
    if (pendingUpkeep) {
        return <>{`${actionType === CommitActionEnum.mint ? 'Mint' : 'Burn'} in progress`}</>;
    } else {
        if (nextRebalance.toNumber() - created < frontRunningInterval.toNumber()) {
            return (
                <TimeLeft
                    targetTime={nextRebalance.toNumber() + updateInterval.toNumber()}
                    countdownEnded={() => {
                        setPendingUpkeep(true);
                    }}
                />
            );
        } else {
            return (
                <TimeLeft
                    targetTime={nextRebalance.toNumber()}
                    countdownEnded={() => {
                        setPendingUpkeep(true);
                    }}
                />
            );
        }
    }
};