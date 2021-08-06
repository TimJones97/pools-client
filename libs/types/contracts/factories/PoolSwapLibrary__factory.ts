/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  PoolSwapLibrary,
  PoolSwapLibraryInterface,
} from "../PoolSwapLibrary";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes16",
        name: "x",
        type: "bytes16",
      },
      {
        internalType: "bytes16",
        name: "y",
        type: "bytes16",
      },
    ],
    name: "compareDecimals",
    outputs: [
      {
        internalType: "int8",
        name: "",
        type: "int8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes16",
        name: "ratio",
        type: "bytes16",
      },
    ],
    name: "convertDecimalToUInt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint112",
        name: "amount",
        type: "uint112",
      },
    ],
    name: "convertUIntToDecimal",
    outputs: [
      {
        internalType: "bytes16",
        name: "",
        type: "bytes16",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "a",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "b",
        type: "int256",
      },
    ],
    name: "divInt",
    outputs: [
      {
        internalType: "bytes16",
        name: "",
        type: "bytes16",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes16",
        name: "ratio",
        type: "bytes16",
      },
      {
        internalType: "uint112",
        name: "amountIn",
        type: "uint112",
      },
    ],
    name: "getAmountOut",
    outputs: [
      {
        internalType: "uint112",
        name: "",
        type: "uint112",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes16",
        name: "lossMultiplier",
        type: "bytes16",
      },
      {
        internalType: "uint112",
        name: "balance",
        type: "uint112",
      },
    ],
    name: "getLossAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes16",
        name: "ratio",
        type: "bytes16",
      },
      {
        internalType: "int8",
        name: "direction",
        type: "int8",
      },
      {
        internalType: "bytes16",
        name: "leverage",
        type: "bytes16",
      },
    ],
    name: "getLossMultiplier",
    outputs: [
      {
        internalType: "bytes16",
        name: "",
        type: "bytes16",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint112",
        name: "_numerator",
        type: "uint112",
      },
      {
        internalType: "uint112",
        name: "_denominator",
        type: "uint112",
      },
    ],
    name: "getRatio",
    outputs: [
      {
        internalType: "bytes16",
        name: "",
        type: "bytes16",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes16",
        name: "a",
        type: "bytes16",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "multiplyDecimalByUInt",
    outputs: [
      {
        internalType: "bytes16",
        name: "",
        type: "bytes16",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "one",
    outputs: [
      {
        internalType: "bytes16",
        name: "",
        type: "bytes16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "zero",
    outputs: [
      {
        internalType: "bytes16",
        name: "",
        type: "bytes16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x613bca610026600b82828239805160001a60731461001957fe5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100b35760003560e01c8063aeb64d7d1161007b578063aeb64d7d14610196578063af2f0e69146101c6578063bc1b392d146101f6578063c3ff809114610214578063c60838cb14610244578063f07f2ed314610274576100b3565b80631842c9d8146100b8578063202f1257146100e85780632c20a03f14610118578063422051e714610148578063901717d114610178575b600080fd5b6100d260048036038101906100cd91906137fd565b6102a4565b6040516100df9190613a38565b60405180910390f35b61010260048036038101906100fd9190613900565b6102b8565b60405161010f9190613a1d565b60405180910390f35b610132600480360381019061012d9190613965565b6102dc565b60405161013f9190613a1d565b60405180910390f35b610162600480360381019061015d91906138c4565b610345565b60405161016f9190613a1d565b60405180910390f35b610180610361565b60405161018d9190613a1d565b60405180910390f35b6101b060048036038101906101ab91906137d4565b610378565b6040516101bd9190613a8e565b60405180910390f35b6101e060048036038101906101db9190613888565b61038a565b6040516101ed9190613a73565b60405180910390f35b6101fe610469565b60405161020b9190613a1d565b60405180910390f35b61022e60048036038101906102299190613839565b610471565b60405161023b9190613a1d565b60405180910390f35b61025e6004803603810190610259919061393c565b610520565b60405161026b9190613a1d565b60405180910390f35b61028e60048036038101906102899190613888565b610542565b60405161029b9190613a8e565b60405180910390f35b60006102b08383610592565b905092915050565b60006102d46102c684610822565b6102cf84610822565b6108d0565b905092915050565b600080826dffffffffffffffffffffffffffff16141561030257600060801b905061033f565b61033c61031e846dffffffffffffffffffffffffffff16610d8b565b610337846dffffffffffffffffffffffffffff16610d8b565b6108d0565b90505b92915050565b60006103598361035484610d8b565b610e09565b905092915050565b6f3fff000000000000000000000000000060801b81565b60006103838261129e565b9050919050565b600080826dffffffffffffffffffffffffffff16116103de576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103d590613a53565b60405180910390fd5b60006103ee84600060801b610592565b60000b148061042957506000610424847f3078310000000000000000000000000000000000000000000000000000000000610592565b60000b145b1561043657819050610463565b61046061045b84610456856dffffffffffffffffffffffffffff16610d8b565b610e09565b61129e565b90505b92915050565b600060801b81565b60006105176105128361050d6105086104b360008960000b1261049857600060801b6104ad565b6f3fff000000000000000000000000000060801b5b8a610e09565b6105036104fd60008b60000b12156104cf57600060801b6104e4565b6f3fff000000000000000000000000000060801b5b6f3fff000000000000000000000000000060801b610e09565b8b6108d0565b61139c565b611a01565b610e09565b611cb9565b90509392505050565b600061053b826dffffffffffffffffffffffffffff16610d8b565b9050919050565b600061058a6105856105676f3fff000000000000000000000000000060801b86613661565b610580856dffffffffffffffffffffffffffff16610d8b565b610e09565b61129e565b905092915050565b6000806f7fffffffffffffffffffffffffffffff8460801c1690506f7fff0000000000000000000000000000816fffffffffffffffffffffffffffffffff1611156105dc57600080fd5b60006f7fffffffffffffffffffffffffffffff8460801c1690506f7fff0000000000000000000000000000816fffffffffffffffffffffffffffffffff16111561062557600080fd5b836fffffffffffffffffffffffffffffffff1916856fffffffffffffffffffffffffffffffff191614158061067b57506f7fff0000000000000000000000000000826fffffffffffffffffffffffffffffffff16105b61068457600080fd5b836fffffffffffffffffffffffffffffffff1916856fffffffffffffffffffffffffffffffff191614156106bd5760009250505061081c565b60006f800000000000000000000000000000008660801c6fffffffffffffffffffffffffffffffff161015905060006f800000000000000000000000000000008660801c6fffffffffffffffffffffffffffffffff161015905081156107ae57801561078257826fffffffffffffffffffffffffffffffff16846fffffffffffffffffffffffffffffffff1611610755576001610777565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5b94505050505061081c565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff94505050505061081c565b80156107c157600194505050505061081c565b826fffffffffffffffffffffffffffffffff16846fffffffffffffffffffffffffffffffff1611610812577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610815565b60015b9450505050505b92915050565b60008082141561083857600060801b90506108cb565b600080831361084a578260000361084c565b825b905060006108598261368a565b90506070811015610872578060700382901b9150610886565b6070811115610885576070810382901c91505b5b607081613fff01901b6dffffffffffffffffffffffffffff831617915060008412156108c2576f80000000000000000000000000000000821791505b8160801b925050505b919050565b600080617fff60708560801c6fffffffffffffffffffffffffffffffff16901c166fffffffffffffffffffffffffffffffff1690506000617fff60708560801c6fffffffffffffffffffffffffffffffff16901c166fffffffffffffffffffffffffffffffff169050617fff82141561098b57617fff81141561096a576f7fff800000000000000000000000000060801b92505050610d85565b6f8000000000000000000000000000000060801b8416851892505050610d85565b617fff811415610a0a57600060801b6dffffffffffffffffffffffffffff60801b85166fffffffffffffffffffffffffffffffff1916146109e3576f7fff800000000000000000000000000060801b92505050610d85565b6f8000000000000000000000000000000060801b84861816600060801b1792505050610d85565b600060801b6f7fffffffffffffffffffffffffffffff60801b85166fffffffffffffffffffffffffffffffff19161415610ac557600060801b6f7fffffffffffffffffffffffffffffff60801b86166fffffffffffffffffffffffffffffffff19161415610a8f576f7fff800000000000000000000000000060801b92505050610d85565b6f8000000000000000000000000000000060801b848618166f7fff000000000000000000000000000060801b1792505050610d85565b60006dffffffffffffffffffffffffffff8560801c166fffffffffffffffffffffffffffffffff1690506000821415610b015760019150610b16565b6e010000000000000000000000000000811790505b60006dffffffffffffffffffffffffffff8760801c166fffffffffffffffffffffffffffffffff1690506000841415610b7a5760008114610b75576000610b5c8261368a565b60e20390508082901b9150600194506072810384019350505b610b93565b60726e0100000000000000000000000000008217901b90505b818181610b9c57fe5b0490506000811415610c0757600060801b6f8000000000000000000000000000000060801b878918166fffffffffffffffffffffffffffffffff191611610be757600060801b610bfc565b6f8000000000000000000000000000000060801b5b945050505050610d85565b6d1000000000000000000000000000811015610c1f57fe5b60006e080000000000000000000000000000821015610c80576e040000000000000000000000000000821015610c75576e020000000000000000000000000000821015610c6d576070610c70565b60715b610c78565b60725b60ff16610c8a565b610c898261368a565b5b905061407184018186011115610ca857617fff945060009150610d45565b83613ffc828701011015610cc3576000945060009150610d44565b83613f8c828701011015610d115783613ffc86011115610cee5783613ffc86010382901b9150610d08565b83613ffc86011015610d0757613ffc8585030382901c91505b5b60009450610d43565b6070811115610d24576070810382901c91505b6dffffffffffffffffffffffffffff8216915083613f8d828701010394505b5b5b81607086901b6f8000000000000000000000000000000060801b898b181660801c6fffffffffffffffffffffffffffffffff16171760801b955050505050505b92915050565b600080821415610da157600060801b9050610e04565b60008290506000610db18261368a565b90506070811015610dca578060700382901b9150610dde565b6070811115610ddd576070810382901c91505b5b607081613fff01901b6dffffffffffffffffffffffffffff83161791508160801b925050505b919050565b600080617fff60708560801c6fffffffffffffffffffffffffffffffff16901c166fffffffffffffffffffffffffffffffff1690506000617fff60708560801c6fffffffffffffffffffffffffffffffff16901c166fffffffffffffffffffffffffffffffff169050617fff821415610fa057617fff811415610f2e57836fffffffffffffffffffffffffffffffff1916856fffffffffffffffffffffffffffffffff19161415610ed5576f8000000000000000000000000000000060801b8416851892505050611298565b6f8000000000000000000000000000000060801b8486186fffffffffffffffffffffffffffffffff19161415610f115783851792505050611298565b6f7fff800000000000000000000000000060801b92505050611298565b600060801b6f7fffffffffffffffffffffffffffffff60801b85166fffffffffffffffffffffffffffffffff19161415610f7f576f7fff800000000000000000000000000060801b92505050611298565b6f8000000000000000000000000000000060801b8416851892505050611298565b617fff81141561101c57600060801b6f7fffffffffffffffffffffffffffffff60801b86166fffffffffffffffffffffffffffffffff19161415610ffb576f7fff800000000000000000000000000060801b92505050611298565b6f8000000000000000000000000000000060801b8516841892505050611298565b60006dffffffffffffffffffffffffffff8660801c166fffffffffffffffffffffffffffffffff1690506000831415611058576001925061106d565b6e010000000000000000000000000000811790505b60006dffffffffffffffffffffffffffff8660801c166fffffffffffffffffffffffffffffffff16905060008314156110a957600192506110be565b6e010000000000000000000000000000811790505b8082029150600082141561112b57600060801b6f8000000000000000000000000000000060801b878918166fffffffffffffffffffffffffffffffff19161161110b57600060801b611120565b6f8000000000000000000000000000000060801b5b945050505050611298565b828401935060007c0200000000000000000000000000000000000000000000000000000000831015611192577c010000000000000000000000000000000000000000000000000000000083101561118a576111858361368a565b61118d565b60e05b611195565b60e15b905061407081860110156111b0576000945060009250611258565b6140e081860110156111f4576140708510156111d557846140700383901c92506111eb565b6140708511156111ea57614070850383901b92505b5b60009450611257565b61c0dd818601111561120e57617fff945060009250611256565b6070811115611225576070810383901c9250611239565b6070811015611238578060700383901b92505b5b6dffffffffffffffffffffffffffff831692506140df8186010394505b5b5b82607086901b6f8000000000000000000000000000000060801b898b181660801c6fffffffffffffffffffffffffffffffff16171760801b955050505050505b92915050565b600080617fff60708460801c6fffffffffffffffffffffffffffffffff16901c166fffffffffffffffffffffffffffffffff169050613fff8110156112e7576000915050611397565b6f800000000000000000000000000000008360801c6fffffffffffffffffffffffffffffffff161061131857600080fd5b6140fe81111561132757600080fd5b60006e0100000000000000000000000000006dffffffffffffffffffffffffffff8560801c6fffffffffffffffffffffffffffffffff161617905061406f82101561137b578161406f0381901c9050611391565b61406f8211156113905761406f820381901b90505b5b80925050505b919050565b600080617fff60708560801c6fffffffffffffffffffffffffffffffff16901c166fffffffffffffffffffffffffffffffff1690506000617fff60708560801c6fffffffffffffffffffffffffffffffff16901c166fffffffffffffffffffffffffffffffff169050617fff82141561147857617fff81141561146e57836fffffffffffffffffffffffffffffffff1916856fffffffffffffffffffffffffffffffff191614156114515784925050506119fb565b6f7fff800000000000000000000000000060801b925050506119fb565b84925050506119fb565b617fff81141561148c5783925050506119fb565b60006f800000000000000000000000000000008660801c6fffffffffffffffffffffffffffffffff161015905060006dffffffffffffffffffffffffffff8760801c166fffffffffffffffffffffffffffffffff16905060008414156114f5576001935061150a565b6e010000000000000000000000000000811790505b60006f800000000000000000000000000000008760801c6fffffffffffffffffffffffffffffffff161015905060006dffffffffffffffffffffffffffff8860801c166fffffffffffffffffffffffffffffffff16905060008514156115735760019450611588565b6e010000000000000000000000000000811790505b60008314156115ea576f8000000000000000000000000000000060801b6fffffffffffffffffffffffffffffffff1916886fffffffffffffffffffffffffffffffff1916146115d757876115dd565b600060801b5b96505050505050506119fb565b600081141561164c576f8000000000000000000000000000000060801b6fffffffffffffffffffffffffffffffff1916896fffffffffffffffffffffffffffffffff191614611639578861163f565b600060801b5b96505050505050506119fb565b6000858703905082151585151514156117ca57607081131561167757899750505050505050506119fb565b600081131561168b578082901c91506116d9565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff908112156116c257889750505050505050506119fb565b60008112156116d8578060000384901c93508596505b5b81840193506e020000000000000000000000000000841061170257600184901c93506001870196505b617fff87141561174d578461172a576f7fff000000000000000000000000000060801b61173f565b6fffff000000000000000000000000000060801b5b9750505050505050506119fb565b6e01000000000000000000000000000084101561176d5760009650611781565b6dffffffffffffffffffffffffffff841693505b83607088901b866117935760006117a5565b6f800000000000000000000000000000005b6fffffffffffffffffffffffffffffffff16171760801b9750505050505050506119fb565b60008113156117e557600184901b93506001870396506117fd565b60008112156117fc57600182901b91506001860396505b5b607081131561180f5760019150611899565b600181131561182b57600180820360018403901c019150611898565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9081121561185c5760019350611897565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81121561189657600180826000030360018603901c0193505b5b5b5b8184106118aa5781840393506118b3565b83820393508294505b60008414156118cf57600060801b9750505050505050506119fb565b60006118da8561368a565b90506071811415611907576dffffffffffffffffffffffffffff600186901c169450600188019750611969565b607081101561195457600081607003905080891115611940576dffffffffffffffffffffffffffff8187901b169550808903985061194e565b6001890386901b9550600098505b50611968565b6dffffffffffffffffffffffffffff851694505b5b617fff8814156119b55785611991576f7fff000000000000000000000000000060801b6119a6565b6fffff000000000000000000000000000060801b5b985050505050505050506119fb565b84607089901b876119c75760006119d9565b6f800000000000000000000000000000005b6fffffffffffffffffffffffffffffffff16171760801b985050505050505050505b92915050565b60006f800000000000000000000000000000008260801c6fffffffffffffffffffffffffffffffff161115611a4b576f7fff800000000000000000000000000060801b9050611cb4565b6f3fff000000000000000000000000000060801b826fffffffffffffffffffffffffffffffff19161415611a8557600060801b9050611cb4565b6000617fff60708460801c6fffffffffffffffffffffffffffffffff16901c166fffffffffffffffffffffffffffffffff169050617fff811415611acc5782915050611cb4565b60006dffffffffffffffffffffffffffff8460801c166fffffffffffffffffffffffffffffffff1690506000821415611b085760019150611b1d565b6e010000000000000000000000000000811790505b6000811415611b43576fffff000000000000000000000000000060801b92505050611cb4565b60008061406f90506000613fff8510611b6d5760009250613fff85039050600f84901b9350611bba565b600192506e0100000000000000000000000000008410611b9a5784613ffe039050600f84901b9350611bb9565b6000611ba58561368a565b90508061406d03915080607f0385901b9450505b5b6f80000000000000000000000000000000841415611c00578215611bdf576001810190505b6000611bea8261368a565b60700390508082901b9150808303925050611c61565b600083611c0e576000611c11565b60015b60ff1690505b6e010000000000000000000000000000821015611c5f57600182901b91506001830392508485029450600060ff86901c90508181188301925080607f0186901c955050611c17565b505b6dffffffffffffffffffffffffffff8116607083901b84611c83576000611c95565b6f800000000000000000000000000000005b6fffffffffffffffffffffffffffffffff16171760801b955050505050505b919050565b6000806f800000000000000000000000000000008360801c6fffffffffffffffffffffffffffffffff161190506000617fff60708560801c6fffffffffffffffffffffffffffffffff16901c166fffffffffffffffffffffffffffffffff16905060006dffffffffffffffffffffffffffff8560801c166fffffffffffffffffffffffffffffffff169050617fff82148015611d56575060008114155b15611d79576f7fff800000000000000000000000000060801b935050505061365c565b61400d821115611db15782611da1576f7fff000000000000000000000000000060801b611da7565b600060801b5b935050505061365c565b613f7f821015611dd9576f3fff000000000000000000000000000060801b935050505061365c565b6000821415611deb5760019150611e00565b6e010000000000000000000000000000811790505b613fef821115611e1957613fef820381901b9050611e2f565b613fef821015611e2e5781613fef0381901c90505b5b828015611e4d575071406e0000000000000000000000000000000081115b15611e6157600060801b935050505061365c565b82158015611e805750713fffffffffffffffffffffffffffffffffff81115b15611ea3576f7fff000000000000000000000000000060801b935050505061365c565b6000608082901c90506fffffffffffffffffffffffffffffffff82169150838015611ecf575060008214155b15611edf57811991506001810190505b60006f80000000000000000000000000000000905060006f8000000000000000000000000000000084161115611f2a57608070016a09e667f3bcc908b2fb1366ea957d3e8202901c90505b60006f4000000000000000000000000000000084161115611f605760807001306fe0a31b7152de8d5a46305c85edec8202901c90505b60006f2000000000000000000000000000000084161115611f965760807001172b83c7d517adcdf7c8c50eb14a791f8202901c90505b60006f1000000000000000000000000000000084161115611fcc57608070010b5586cf9890f6298b92b71842a983638202901c90505b60006f08000000000000000000000000000000841611156120025760807001059b0d31585743ae7c548eb68ca417fd8202901c90505b60006f0400000000000000000000000000000084161115612038576080700102c9a3e778060ee6f7caca4f7a29bde88202901c90505b60006f020000000000000000000000000000008416111561206e57608070010163da9fb33356d84a66ae336dcdfa3f8202901c90505b60006f01000000000000000000000000000000841611156120a4576080700100b1afa5abcbed6129ab13ec11dc95438202901c90505b60006e800000000000000000000000000000841611156120d957608070010058c86da1c09ea1ff19d294cf2f679b8202901c90505b60006e4000000000000000000000000000008416111561210e5760807001002c605e2e8cec506d21bfc89a23a00f8202901c90505b60006e20000000000000000000000000000084161115612143576080700100162f3904051fa128bca9c55c31e5df8202901c90505b60006e100000000000000000000000000000841611156121785760807001000b175effdc76ba38e31671ca9397258202901c90505b60006e080000000000000000000000000000841611156121ad576080700100058ba01fb9f96d6cacd4b180917c3d8202901c90505b60006e040000000000000000000000000000841611156121e257608070010002c5cc37da9491d0985c348c68e7b38202901c90505b60006e020000000000000000000000000000841611156122175760807001000162e525ee054754457d59952920268202901c90505b60006e0100000000000000000000000000008416111561224c57608070010000b17255775c040618bf4a4ade83fc8202901c90505b60006d8000000000000000000000000000841611156122805760807001000058b91b5bc9ae2eed81e9b7d4cfab8202901c90505b60006d4000000000000000000000000000841611156122b4576080700100002c5c89d5ec6ca4d7c8acc017b7c98202901c90505b60006d2000000000000000000000000000841611156122e857608070010000162e43f4f831060e02d839a9d16d8202901c90505b60006d10000000000000000000000000008416111561231c576080700100000b1721bcfc99d9f890ea069117638202901c90505b60006d08000000000000000000000000008416111561235057608070010000058b90cf1e6d97f9ca14dbcc16288202901c90505b60006d0400000000000000000000000000841611156123845760807001000002c5c863b73f016468f6bac5ca2b8202901c90505b60006d0200000000000000000000000000841611156123b8576080700100000162e430e5a18f6119e3c02282a58202901c90505b60006d0100000000000000000000000000841611156123ec5760807001000000b1721835514b86e6d96efd1bfe8202901c90505b60006c800000000000000000000000008416111561241f576080700100000058b90c0b48c6be5df846c5b2ef8202901c90505b60006c400000000000000000000000008416111561245257608070010000002c5c8601cc6b9e94213c72737a8202901c90505b60006c20000000000000000000000000841611156124855760807001000000162e42fff037df38aa2b219f068202901c90505b60006c10000000000000000000000000841611156124b857608070010000000b17217fba9c739aa5819f44f98202901c90505b60006c08000000000000000000000000841611156124eb5760807001000000058b90bfcdee5acd3c1cedc8238202901c90505b60006c040000000000000000000000008416111561251e576080700100000002c5c85fe31f35a6a30da1be508202901c90505b60006c020000000000000000000000008416111561255157608070010000000162e42ff0999ce3541b9fffcf8202901c90505b60006c0100000000000000000000000084161115612584576080700100000000b17217f80f4ef5aadda455548202901c90505b60006b800000000000000000000000841611156125b657608070010000000058b90bfbf8479bd5a81b51ad8202901c90505b60006b400000000000000000000000841611156125e85760807001000000002c5c85fdf84bd62ae30a74cc8202901c90505b60006b2000000000000000000000008416111561261a576080700100000000162e42fefb2fed257559bdaa8202901c90505b60006b1000000000000000000000008416111561264c5760807001000000000b17217f7d5a7716bba4a9ae8202901c90505b60006b0800000000000000000000008416111561267e576080700100000000058b90bfbe9ddbac5e109cce8202901c90505b60006b040000000000000000000000841611156126b057608070010000000002c5c85fdf4b15de6f17eb0d8202901c90505b60006b020000000000000000000000841611156126e25760807001000000000162e42fefa494f1478fde058202901c90505b60006b0100000000000000000000008416111561271457608070010000000000b17217f7d20cf927c8e94c8202901c90505b60006a8000000000000000000000841611156127455760807001000000000058b90bfbe8f71cb4e4b33d8202901c90505b60006a400000000000000000000084161115612776576080700100000000002c5c85fdf477b662b269458202901c90505b60006a2000000000000000000000841611156127a757608070010000000000162e42fefa3ae53369388c8202901c90505b60006a1000000000000000000000841611156127d8576080700100000000000b17217f7d1d351a389d408202901c90505b60006a08000000000000000000008416111561280957608070010000000000058b90bfbe8e8b2d3d4ede8202901c90505b60006a04000000000000000000008416111561283a5760807001000000000002c5c85fdf4741bea6e77e8202901c90505b60006a02000000000000000000008416111561286b576080700100000000000162e42fefa39fe95583c28202901c90505b60006a01000000000000000000008416111561289c5760807001000000000000b17217f7d1cfb72b45e18202901c90505b60006980000000000000000000841611156128cc576080700100000000000058b90bfbe8e7cc35c3f08202901c90505b60006940000000000000000000841611156128fc57608070010000000000002c5c85fdf473e242ea388202901c90505b600069200000000000000000008416111561292c5760807001000000000000162e42fefa39f02b772c8202901c90505b600069100000000000000000008416111561295c57608070010000000000000b17217f7d1cf7d83c1a8202901c90505b600069080000000000000000008416111561298c5760807001000000000000058b90bfbe8e7bdcbe2e8202901c90505b60006904000000000000000000841611156129bc576080700100000000000002c5c85fdf473dea871f8202901c90505b60006902000000000000000000841611156129ec57608070010000000000000162e42fefa39ef44d918202901c90505b6000690100000000000000000084161115612a1c576080700100000000000000b17217f7d1cf79e9498202901c90505b60006880000000000000000084161115612a4b57608070010000000000000058b90bfbe8e7bce5448202901c90505b60006840000000000000000084161115612a7a5760807001000000000000002c5c85fdf473de6eca8202901c90505b60006820000000000000000084161115612aa9576080700100000000000000162e42fefa39ef366f8202901c90505b60006810000000000000000084161115612ad85760807001000000000000000b17217f7d1cf79afa8202901c90505b60006808000000000000000084161115612b07576080700100000000000000058b90bfbe8e7bcd6d8202901c90505b60006804000000000000000084161115612b3657608070010000000000000002c5c85fdf473de6b28202901c90505b60006802000000000000000084161115612b655760807001000000000000000162e42fefa39ef3588202901c90505b60006801000000000000000084161115612b9457608070010000000000000000b17217f7d1cf79ab8202901c90505b600067800000000000000084161115612bc25760807001000000000000000058b90bfbe8e7bcd58202901c90505b600067400000000000000084161115612bf0576080700100000000000000002c5c85fdf473de6a8202901c90505b600067200000000000000084161115612c1e57608070010000000000000000162e42fefa39ef348202901c90505b600067100000000000000084161115612c4c576080700100000000000000000b17217f7d1cf7998202901c90505b600067080000000000000084161115612c7a57608070010000000000000000058b90bfbe8e7bcc8202901c90505b600067040000000000000084161115612ca85760807001000000000000000002c5c85fdf473de58202901c90505b600067020000000000000084161115612cd6576080700100000000000000000162e42fefa39ef28202901c90505b600067010000000000000084161115612d045760807001000000000000000000b17217f7d1cf788202901c90505b6000668000000000000084161115612d31576080700100000000000000000058b90bfbe8e7bb8202901c90505b6000664000000000000084161115612d5e57608070010000000000000000002c5c85fdf473dd8202901c90505b6000662000000000000084161115612d8b5760807001000000000000000000162e42fefa39ee8202901c90505b6000661000000000000084161115612db857608070010000000000000000000b17217f7d1cf68202901c90505b6000660800000000000084161115612de55760807001000000000000000000058b90bfbe8e7a8202901c90505b6000660400000000000084161115612e12576080700100000000000000000002c5c85fdf473c8202901c90505b6000660200000000000084161115612e3f57608070010000000000000000000162e42fefa39d8202901c90505b6000660100000000000084161115612e6c576080700100000000000000000000b17217f7d1ce8202901c90505b60006580000000000084161115612e9857608070010000000000000000000058b90bfbe8e68202901c90505b60006540000000000084161115612ec45760807001000000000000000000002c5c85fdf4728202901c90505b60006520000000000084161115612ef0576080700100000000000000000000162e42fefa388202901c90505b60006510000000000084161115612f1c5760807001000000000000000000000b17217f7d1b8202901c90505b60006508000000000084161115612f48576080700100000000000000000000058b90bfbe8d8202901c90505b60006504000000000084161115612f7457608070010000000000000000000002c5c85fdf468202901c90505b60006502000000000084161115612fa05760807001000000000000000000000162e42fefa28202901c90505b60006501000000000084161115612fcc57608070010000000000000000000000b17217f7d08202901c90505b600064800000000084161115612ff75760807001000000000000000000000058b90bfbe78202901c90505b600064400000000084161115613022576080700100000000000000000000002c5c85fdf38202901c90505b60006420000000008416111561304d57608070010000000000000000000000162e42fef98202901c90505b600064100000000084161115613078576080700100000000000000000000000b17217f7c8202901c90505b6000640800000000841611156130a357608070010000000000000000000000058b90bfbd8202901c90505b6000640400000000841611156130ce5760807001000000000000000000000002c5c85fde8202901c90505b6000640200000000841611156130f9576080700100000000000000000000000162e42fee8202901c90505b6000640100000000841611156131245760807001000000000000000000000000b17217f68202901c90505b600063800000008416111561314e576080700100000000000000000000000058b90bfa8202901c90505b600063400000008416111561317857608070010000000000000000000000002c5c85fc8202901c90505b60006320000000841611156131a25760807001000000000000000000000000162e42fd8202901c90505b60006310000000841611156131cc57608070010000000000000000000000000b17217e8202901c90505b60006308000000841611156131f65760807001000000000000000000000000058b90be8202901c90505b6000630400000084161115613220576080700100000000000000000000000002c5c85e8202901c90505b600063020000008416111561324a57608070010000000000000000000000000162e42e8202901c90505b6000630100000084161115613274576080700100000000000000000000000000b172168202901c90505b6000628000008416111561329d57608070010000000000000000000000000058b90a8202901c90505b600062400000841611156132c65760807001000000000000000000000000002c5c848202901c90505b600062200000841611156132ef576080700100000000000000000000000000162e418202901c90505b600062100000841611156133185760807001000000000000000000000000000b17208202901c90505b60006208000084161115613341576080700100000000000000000000000000058b8f8202901c90505b6000620400008416111561336a57608070010000000000000000000000000002c5c78202901c90505b600062020000841611156133935760807001000000000000000000000000000162e38202901c90505b600062010000841611156133bc57608070010000000000000000000000000000b1718202901c90505b6000618000841611156133e45760807001000000000000000000000000000058b88202901c90505b60006140008416111561340c576080700100000000000000000000000000002c5b8202901c90505b60006120008416111561343457608070010000000000000000000000000000162d8202901c90505b60006110008416111561345c576080700100000000000000000000000000000b168202901c90505b60006108008416111561348457608070010000000000000000000000000000058a8202901c90505b6000610400841611156134ac5760807001000000000000000000000000000002c48202901c90505b6000610200841611156134d45760807001000000000000000000000000000001618202901c90505b6000610100841611156134fc5760807001000000000000000000000000000000b08202901c90505b60006080841611156135235760807001000000000000000000000000000000578202901c90505b600060408416111561354a57608070010000000000000000000000000000002b8202901c90505b60006020841611156135715760807001000000000000000000000000000000158202901c90505b600060108416111561359857608070010000000000000000000000000000000a8202901c90505b60006008841611156135bf5760807001000000000000000000000000000000048202901c90505b60006004841611156135e65760807001000000000000000000000000000000018202901c90505b8461360e576dffffffffffffffffffffffffffff600f82901c169050613fff8201915061364a565b613ffe821161363a576dffffffffffffffffffffffffffff600f82901c16905081613fff039150613649565b613fef820381901c9050600091505b5b80607083901b1760801b955050505050505b919050565b6000613682836f8000000000000000000000000000000060801b841861139c565b905092915050565b600080821161369857600080fd5b600070010000000000000000000000000000000083106136c057608083901c92506080810190505b6801000000000000000083106136de57604083901c92506040810190505b64010000000083106136f857602083901c92506020810190505b62010000831061371057601083901c92506010810190505b610100831061372757600883901c92506008810190505b6010831061373d57600483901c92506004810190505b6004831061375357600283901c92506002810190505b60028310613762576001810190505b80915050919050565b60008135905061377a81613b21565b92915050565b60008135905061378f81613b38565b92915050565b6000813590506137a481613b4f565b92915050565b6000813590506137b981613b66565b92915050565b6000813590506137ce81613b7d565b92915050565b6000602082840312156137e657600080fd5b60006137f48482850161376b565b91505092915050565b6000806040838503121561381057600080fd5b600061381e8582860161376b565b925050602061382f8582860161376b565b9150509250929050565b60008060006060848603121561384e57600080fd5b600061385c8682870161376b565b935050602061386d86828701613795565b925050604061387e8682870161376b565b9150509250925092565b6000806040838503121561389b57600080fd5b60006138a98582860161376b565b92505060206138ba858286016137aa565b9150509250929050565b600080604083850312156138d757600080fd5b60006138e58582860161376b565b92505060206138f6858286016137bf565b9150509250929050565b6000806040838503121561391357600080fd5b600061392185828601613780565b925050602061393285828601613780565b9150509250929050565b60006020828403121561394e57600080fd5b600061395c848285016137aa565b91505092915050565b6000806040838503121561397857600080fd5b6000613986858286016137aa565b9250506020613997858286016137aa565b9150509250929050565b6139aa81613aba565b82525050565b6139b981613af0565b82525050565b60006139cc600e83613aa9565b91507f496e76616c696420616d6f756e740000000000000000000000000000000000006000830152602082019050919050565b613a0881613afd565b82525050565b613a1781613b17565b82525050565b6000602082019050613a3260008301846139a1565b92915050565b6000602082019050613a4d60008301846139b0565b92915050565b60006020820190508181036000830152613a6c816139bf565b9050919050565b6000602082019050613a8860008301846139ff565b92915050565b6000602082019050613aa36000830184613a0e565b92915050565b600082825260208201905092915050565b60007fffffffffffffffffffffffffffffffff0000000000000000000000000000000082169050919050565b6000819050919050565b60008160000b9050919050565b60006dffffffffffffffffffffffffffff82169050919050565b6000819050919050565b613b2a81613aba565b8114613b3557600080fd5b50565b613b4181613ae6565b8114613b4c57600080fd5b50565b613b5881613af0565b8114613b6357600080fd5b50565b613b6f81613afd565b8114613b7a57600080fd5b50565b613b8681613b17565b8114613b9157600080fd5b5056fea2646970667358221220f464d38034ae12834e7ad192a0a19ac305a2ffd812bd3ba4a154f9bf3dd5387b64736f6c63430007060033";

export class PoolSwapLibrary__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PoolSwapLibrary> {
    return super.deploy(overrides || {}) as Promise<PoolSwapLibrary>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): PoolSwapLibrary {
    return super.attach(address) as PoolSwapLibrary;
  }
  connect(signer: Signer): PoolSwapLibrary__factory {
    return super.connect(signer) as PoolSwapLibrary__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PoolSwapLibraryInterface {
    return new utils.Interface(_abi) as PoolSwapLibraryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PoolSwapLibrary {
    return new Contract(address, _abi, signerOrProvider) as PoolSwapLibrary;
  }
}
