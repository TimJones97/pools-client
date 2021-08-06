/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface IPoolKeeperInterface extends ethers.utils.Interface {
  functions: {
    "newPool(string,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "newPool",
    values: [string, string]
  ): string;

  decodeFunctionResult(functionFragment: "newPool", data: BytesLike): Result;

  events: {
    "CreateMarket(string,address)": EventFragment;
    "ExecutePriceChange(int256,int256,uint32,string)": EventFragment;
    "NewRound(int256,int256,uint32,string)": EventFragment;
    "PoolAdded(address,int256,string)": EventFragment;
    "PoolUpdateError(string,string)": EventFragment;
    "PriceSample(int256,int256,uint32,string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CreateMarket"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ExecutePriceChange"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewRound"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PoolAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PoolUpdateError"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PriceSample"): EventFragment;
}

export class IPoolKeeper extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IPoolKeeperInterface;

  functions: {
    newPool(
      _poolCode: string,
      _poolAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  newPool(
    _poolCode: string,
    _poolAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    newPool(
      _poolCode: string,
      _poolAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    CreateMarket(
      marketCode?: null,
      oracle?: null
    ): TypedEventFilter<
      [string, string],
      { marketCode: string; oracle: string }
    >;

    ExecutePriceChange(
      oldPrice?: BigNumberish | null,
      newPrice?: BigNumberish | null,
      updateInterval?: BigNumberish | null,
      pool?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, number, string],
      {
        oldPrice: BigNumber;
        newPrice: BigNumber;
        updateInterval: number;
        pool: string;
      }
    >;

    NewRound(
      oldPrice?: BigNumberish | null,
      newPrice?: BigNumberish | null,
      updateInterval?: BigNumberish | null,
      poolCode?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, number, string],
      {
        oldPrice: BigNumber;
        newPrice: BigNumber;
        updateInterval: number;
        poolCode: string;
      }
    >;

    PoolAdded(
      poolAddress?: string | null,
      firstPrice?: BigNumberish | null,
      poolCode?: null
    ): TypedEventFilter<
      [string, BigNumber, string],
      { poolAddress: string; firstPrice: BigNumber; poolCode: string }
    >;

    PoolUpdateError(
      poolCode?: string | null,
      reason?: null
    ): TypedEventFilter<[string, string], { poolCode: string; reason: string }>;

    PriceSample(
      cumulativePrice?: BigNumberish | null,
      count?: BigNumberish | null,
      updateInterval?: BigNumberish | null,
      market?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, number, string],
      {
        cumulativePrice: BigNumber;
        count: BigNumber;
        updateInterval: number;
        market: string;
      }
    >;
  };

  estimateGas: {
    newPool(
      _poolCode: string,
      _poolAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    newPool(
      _poolCode: string,
      _poolAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
