import React, { useMemo, useState } from 'react';
import BigNumber from 'bignumber.js';
import Button from '@components/General/Button';
import { Table, TableHeader, TableHeaderCell, TableRow, TableRowCell } from '@components/General/TWTable';
import { toApproxCurrency } from '@libs/utils/converters';
import { FarmTableRowData } from '../state';
import { TWModal } from '@components/General/TWModal';
import Close from '/public/img/general/close.svg';
import { Logo, LogoTicker, tokenSymbolToLogoTicker } from '@components/General/Logo';
import Loading from '@components/General/Loading';
import { BalancerPoolAsset } from '@libs/types/Staking';
import { calcAPY, calcBptTokenPrice } from '@tracer-protocol/pools-js/dist/utils';
import { APYTip } from '@components/Tooltips';

export default (({ rows, onClickStake, onClickUnstake, onClickClaim, fetchingFarms, tcrUSDCPrice }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <Table>
                <TableHeader className="uppercase">
                    <TableHeaderCell>Strategy</TableHeaderCell>
                    <TableHeaderCell>
                        <APYTip>APY</APYTip>/APR
                    </TableHeaderCell>
                    <TableHeaderCell>TVL (USDC)</TableHeaderCell>
                    <TableHeaderCell>My Staked (TOKENS/USDC)</TableHeaderCell>
                    <TableHeaderCell>My Holdings (TOKENS/USDC)</TableHeaderCell>
                    <TableHeaderCell>My Rewards (TCR)</TableHeaderCell>
                    <TableHeaderCell>{/* Empty header for buttons column */}</TableHeaderCell>
                </TableHeader>
                {rows.map((farm, index) => {
                    return (
                        <PoolRow
                            key={`${farm}-${index}`}
                            farm={farm}
                            index={index}
                            tcrUSDCPrice={tcrUSDCPrice}
                            onClickClaim={onClickClaim}
                            onClickStake={onClickStake}
                            onClickUnstake={onClickUnstake}
                        />
                    );
                })}
            </Table>
            {fetchingFarms ? <Loading className="w-10 mx-auto my-8" /> : null}
            <TWModal open={showModal} onClose={() => setShowModal(false)}>
                <div className="flex justify-between">
                    <div className="text-2xl">Rebalance Rate</div>
                    <div className="w-3 h-3 cursor-pointer" onClick={() => setShowModal(false)}>
                        <Close />
                    </div>
                </div>
                <br />
                <div>
                    The <b>Rebalance Rate</b> is function of collateral skew in the pool. It can result in a polarised
                    leverage effect at rebalance. The Rebalance Rate is calculated as (long side collateral/short side
                    collateral) - 1.
                </div>
                <br />
                <div>
                    If the <b>Rebalance Rate = 0</b>, there is an equal amount of collateral held in the long and short
                    side of the pool. At rebalance, the winning side gains are neither amplified or reduced.
                </div>
                <br />
                <div>
                    If the <b>Rebalance Rate {'>'} 0</b>, there is more collateral held in the long side of the pool. At
                    rebalance, the short side&apos;s gains are effectively amplified relative to their losses.
                    Conversely, the long side&apos;s gains are effectively reduced.
                </div>
                <br />
                <div>
                    If the <b>Rebalance Rate {'<'} 0</b>, there is more collateral held in the short side of the pool.
                    At rebalance, the short side&apos;s gains are effectively reduced relative to their losses.
                    Conversely, the long side&apos;s gains are effectively amplified.
                </div>
            </TWModal>
        </>
    );
}) as React.FC<{
    rows: FarmTableRowData[];
    onClickStake: (farmAddress: string) => void;
    onClickUnstake: (farmAddress: string) => void;
    onClickClaim: (farmAddress: string) => void;
    fetchingFarms: boolean;
    tcrUSDCPrice: BigNumber;
}>;

const PoolRow: React.FC<{
    farm: FarmTableRowData;
    index: number;
    tcrUSDCPrice: BigNumber;
    onClickStake: (farmAddress: string) => void;
    onClickUnstake: (farmAddress: string) => void;
    onClickClaim: (farmAddress: string) => void;
}> = ({ farm, onClickStake, onClickUnstake, onClickClaim, index, tcrUSDCPrice }) => {
    const tokenPrice = useMemo(
        () =>
            farm?.poolDetails
                ? farm.poolDetails.poolTokenPrice
                : calcBptTokenPrice(farm.stakingTokenSupply, farm?.bptDetails?.tokens),
        [farm],
    );

    const apr = useMemo(() => {
        const aprNumerator = farm.rewardsPerYear.times(tcrUSDCPrice);
        const aprDenominator = tokenPrice.times(farm.totalStaked);
        return aprDenominator.gt(0) ? aprNumerator.div(aprDenominator) : new BigNumber(0);
    }, [tokenPrice, farm.totalStaked, farm.rewardsPerYear, tcrUSDCPrice]);

    const apy = useMemo(() => calcAPY(apr), [apr]);

    const { bptDetails } = farm;

    return (
        <TableRow key={farm.farm} rowNumber={index}>
            <TableRowCell className="flex flex-wrap">
                <div>
                    {farm?.bptDetails ? (
                        <BalancerPoolLogoGroup tokens={bptDetails?.tokens || []} />
                    ) : (
                        <Logo
                            className="inline mr-2"
                            size="md"
                            // since there are no bptDetails, we assume this is a pool token farm
                            ticker={tokenSymbolToLogoTicker(farm.name)}
                        />
                    )}
                </div>
                <div className="flex flex-col justify-center">
                    {farm.link ? (
                        <>
                            <a className="flex" href={farm.link} target="_blank" rel="noopener noreferrer">
                                {farm.name}
                            </a>
                            <a className="flex opacity-50" href={farm.link} target="_blank" rel="noopener noreferrer">
                                {farm.linkText || '(click to view pool)'}
                            </a>
                        </>
                    ) : (
                        <div>{farm.name}</div>
                    )}
                </div>
            </TableRowCell>
            <TableRowCell>{`${apy.times(100).toFixed(2)}% / ${apr.times(100).toFixed(2)}%`}</TableRowCell>
            <TableRowCell>
                <TableRowCell>{toApproxCurrency(tokenPrice.times(farm.totalStaked))}</TableRowCell>
            </TableRowCell>
            <TableRowCell>
                <div>{farm.myStaked.toFixed(2)}</div>
                <div className="opacity-50">{toApproxCurrency(tokenPrice.times(farm.myStaked))}</div>
            </TableRowCell>
            <TableRowCell>
                <div>{farm.stakingTokenBalance.toFixed(2)}</div>
                <div className="opacity-50">{toApproxCurrency(tokenPrice.times(farm.stakingTokenBalance))}</div>
            </TableRowCell>
            <TableRowCell>
                <span>{farm.myRewards.toFixed(6)}</span>
            </TableRowCell>
            <TableRowCell>
                <Button
                    disabled={farm.stakingTokenBalance.eq(0)}
                    className="mx-1 w-[78px] rounded-2xl font-bold uppercase "
                    size="sm"
                    variant="primary-light"
                    onClick={() => onClickStake(farm.farm)}
                >
                    STAKE
                </Button>
                <Button
                    disabled={farm.myStaked.eq(0)}
                    className="mx-1 w-[96px] rounded-2xl font-bold uppercase "
                    size="sm"
                    variant="primary-light"
                    onClick={() => onClickUnstake(farm.farm)}
                >
                    UNSTAKE
                </Button>
                <Button
                    disabled={farm.myRewards.eq(0)}
                    className="mx-1 w-[76px] rounded-2xl font-bold uppercase "
                    size="sm"
                    variant="primary-light"
                    onClick={() => onClickClaim(farm.farm)}
                >
                    CLAIM
                </Button>
            </TableRowCell>
        </TableRow>
    );
};

const BalancerPoolLogoGroup: React.FC<{ tokens: BalancerPoolAsset[] }> = ({ tokens }) => (
    <>
        {tokens.map((token) => (
            <Logo
                key={`balancer-asset-${token.symbol}`}
                size="md"
                className="inline mr-2"
                ticker={token.isPoolToken ? tokenSymbolToLogoTicker(token.symbol) : (token.symbol as LogoTicker)}
            />
        ))}
    </>
);
