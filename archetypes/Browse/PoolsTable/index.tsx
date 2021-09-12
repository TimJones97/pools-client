import Button from '@components/General/Button';
import { Table, TableHeader, TableRow } from '@components/General/TWTable';
import { SideEnum } from '@libs/constants';
import { toApproxCurrency } from '@libs/utils/converters';
import React, { useState } from 'react';
import RebalanceRate from '../RebalanceRate';
import { BrowseTableRowData } from '../state';
import Modal from '@components/General/Modal';
import TimeLeft from '@components/TimeLeft';

import QuestionMark from '/public/img/general/question-mark-circle.svg';
import Close from '/public/img/general/close-black.svg';

export default (({ rows, onClickBuy, onClickSell }) => {
    console.debug('Browse table rows', rows);
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <Table>
                <TableHeader>
                    <span>Token</span>
                    <span>Last price (USDC)</span>
                    {/*<span>24H Change</span>*/}
                    <span className="flex">
                        Last rebalance rate&nbsp;
                        <span className="cursor-pointer" onClick={() => setShowModal(true)}>
                            <QuestionMark />
                        </span>
                    </span>
                    <span>Next Rebalance</span>
                    <span>TVL (USDC)</span>
                    <span>My Holdings (TOKENS/USDC)</span>
                    <span>{/* Empty header for buttons column */}</span>
                </TableHeader>
                {rows.map((token, index) => {
                    const hasHoldings = token.myHoldings > 0;
                    return (
                        <TableRow key={token.address} rowNumber={index}>
                            <span>{token.symbol}</span>
                            <span>{toApproxCurrency(token.lastPrice)}</span>
                            {/*<ColoredChangeNumber number={token.change24Hours} />*/}

                            <RebalanceRate rebalanceRate={token.rebalanceRate} />
                            <TimeLeft targetTime={token.nextRebalance} />
                            <span>{toApproxCurrency(token.totalValueLocked)}</span>
                            <span>
                                <div>{`${token.myHoldings}`}</div>
                                <div className="opacity-50">{toApproxCurrency(token.myHoldings * token.lastPrice)}</div>
                            </span>
                            <span>
                                <Button
                                    className="mx-1 w-[70px] rounded-2xl font-bold uppercase "
                                    size="sm"
                                    variant="primary-light"
                                    onClick={() =>
                                        onClickBuy(token.pool, token.side === 'short' ? SideEnum.short : SideEnum.long)
                                    }
                                >
                                    Buy
                                </Button>
                                <Button
                                    className="mx-1 w-[70px] rounded-2xl font-bold uppercase "
                                    size="sm"
                                    variant="primary-light"
                                    disabled={!hasHoldings}
                                    onClick={() =>
                                        onClickSell(token.pool, token.side === 'short' ? SideEnum.short : SideEnum.long)
                                    }
                                >
                                    Sell
                                </Button>
                            </span>
                        </TableRow>
                    );
                })}
            </Table>
            <Modal show={showModal} onClose={() => setShowModal(false)}>
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
            </Modal>
        </>
    );
}) as React.FC<{
    rows: BrowseTableRowData[];
    onClickBuy: (pool: string, side: SideEnum) => void;
    onClickSell: (pool: string, side: SideEnum) => void;
}>;

// const ColoredChangeNumber = (({ number }) => {
//     return (
//         <span className={number >= 0 ? 'text-green-500' : 'text-red-500'}>{`${number >= 0 ? '+' : ''}${number.toFixed(
//             2,
//         )}`}</span>
//     );
// }) as React.FC<{
//     number: number;
// }>;
