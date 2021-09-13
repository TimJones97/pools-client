export enum LeverageFilterEnum {
    All = 'All',
    One = '1',
    Three = '3',
}

export enum SideFilterEnum {
    Short = 'Short',
    Long = 'Long',
    All = 'All',
}

export enum SortByEnum {
    Name = 'Token',
    APY = 'APY',
    TotalValueLocked = 'TVL',
    MyStaked = 'My Staked',
    MyRewards = 'My Rewards',
}

export interface FarmTableRowData {
    farm: string;
    tokenSymbol: string;
    leverage: number;
    side: 'long' | 'short';
    apy: number;
    tvl: number;
    myStaked: number;
    myRewards: number;
}

export interface BrowseState {
    search: string;
    leverage: LeverageFilterEnum;
    side: SideFilterEnum;
    sortBy: SortByEnum;
    filterModalOpen: boolean;
}

export type BrowseAction =
    | { type: 'setSearch'; search: string }
    | { type: 'setLeverage'; leverage: LeverageFilterEnum }
    | { type: 'setSide'; side: SideFilterEnum }
    | { type: 'setModalOpen'; open: boolean }
    | { type: 'setSortBy'; sortBy: SortByEnum };

export const browseReducer: (state: BrowseState, action: BrowseAction) => BrowseState = (state, action) => {
    switch (action.type) {
        case 'setLeverage':
            return {
                ...state,
                leverage: action.leverage,
            };
        case 'setSearch':
            return {
                ...state,
                search: action.search,
            };
        case 'setSide':
            return {
                ...state,
                side: action.side,
            };
        case 'setSortBy':
            return {
                ...state,
                sortBy: action.sortBy,
            };
        case 'setModalOpen':
            return {
                ...state,
                filterModalOpen: action.open,
            };
        default:
            throw new Error('Unexpected action');
    }
};
