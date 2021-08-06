/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PoolKeeper, PoolKeeperInterface } from "../PoolKeeper";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_factory",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "marketCode",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "oracle",
        type: "address",
      },
    ],
    name: "CreateMarket",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "int256",
        name: "oldPrice",
        type: "int256",
      },
      {
        indexed: true,
        internalType: "int256",
        name: "newPrice",
        type: "int256",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "updateInterval",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "string",
        name: "pool",
        type: "string",
      },
    ],
    name: "ExecutePriceChange",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "int256",
        name: "oldPrice",
        type: "int256",
      },
      {
        indexed: true,
        internalType: "int256",
        name: "newPrice",
        type: "int256",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "updateInterval",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "string",
        name: "poolCode",
        type: "string",
      },
    ],
    name: "NewRound",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "poolAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "int256",
        name: "firstPrice",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "poolCode",
        type: "string",
      },
    ],
    name: "PoolAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "string",
        name: "poolCode",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "reason",
        type: "string",
      },
    ],
    name: "PoolUpdateError",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "int256",
        name: "cumulativePrice",
        type: "int256",
      },
      {
        indexed: true,
        internalType: "int256",
        name: "count",
        type: "int256",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "updateInterval",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "string",
        name: "market",
        type: "string",
      },
    ],
    name: "PriceSample",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "ADMIN",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "checkData",
        type: "bytes",
      },
    ],
    name: "checkUpkeep",
    outputs: [
      {
        internalType: "bool",
        name: "upkeepNeeded",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "performData",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "executionPrice",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [
      {
        internalType: "contract PoolFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getRoleMember",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleMemberCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "lastExecutionPrice",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "lastExecutionTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_poolCode",
        type: "string",
      },
      {
        internalType: "address",
        name: "_poolAddress",
        type: "address",
      },
    ],
    name: "newPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "performData",
        type: "bytes",
      },
    ],
    name: "performUpkeep",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "poolRoundStart",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "pools",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b5060405162002d7138038062002d718339818101604052810190620000379190620002c7565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415620000aa576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000a19062000335565b60405180910390fd5b620000dc7fdf8b4c520ffe197c5343c6f5aec59570151ef9a492f2c624fd45ddde6135ec42336200011a60201b60201c565b8073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b8152505050620003b6565b6200012c82826200013060201b60201c565b5050565b6200015e81600080858152602001908152602001600020600001620001d360201b620010cd1790919060201c565b15620001cf57620001746200020b60201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b600062000203836000018373ffffffffffffffffffffffffffffffffffffffff1660001b6200021360201b60201c565b905092915050565b600033905090565b60006200022783836200028d60201b60201c565b6200028257826000018290806001815401808255809150506001900390600052602060002001600090919091909150558260000180549050836001016000848152602001908152602001600020819055506001905062000287565b600090505b92915050565b600080836001016000848152602001908152602001600020541415905092915050565b600081519050620002c1816200039c565b92915050565b600060208284031215620002da57600080fd5b6000620002ea84828501620002b0565b91505092915050565b600062000302601b8362000357565b91507f466163746f72792063616e6e6f742062652030206164647265737300000000006000830152602082019050919050565b600060208201905081810360008301526200035081620002f3565b9050919050565b600082825260208201905092915050565b600062000375826200037c565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b620003a78162000368565b8114620003b357600080fd5b50565b60805160601c612998620003d960003980610c695280610d3c52506129986000f3fe608060405234801561001057600080fd5b50600436106101155760003560e01c80636e04ff0d116100a2578063a217fddf11610071578063a217fddf1461033d578063c45a01551461035b578063ca15c87314610379578063d547741f146103a9578063daee4c78146103c557610115565b80636e04ff0d1461027c5780639010d07c146102ad57806391d14854146102dd5780639d6f17a81461030d57610115565b80632a0acc6a116100e95780632a0acc6a146101da5780632f2ff15d146101f857806336568abe146102145780634585e33b14610230578063670454be1461024c57610115565b80629ac4b81461011a5780631ddf9c251461014a5780631de19e0e1461017a578063248a9ca3146101aa575b600080fd5b610134600480360381019061012f91906121a1565b6103e1565b6040516101419190612595565b60405180910390f35b610164600480360381019061015f91906121a1565b61040f565b60405161017191906124cf565b60405180910390f35b610194600480360381019061018f91906121a1565b61043d565b6040516101a19190612595565b60405180910390f35b6101c460048036038101906101bf9190612092565b61046b565b6040516101d19190612499565b60405180910390f35b6101e261048a565b6040516101ef9190612499565b60405180910390f35b610212600480360381019061020d91906120bb565b6104ae565b005b61022e600480360381019061022991906120bb565b610537565b005b61024a60048036038101906102459190612133565b6105d0565b005b610266600480360381019061026191906121a1565b610b2b565b60405161027391906124cf565b60405180910390f35b61029660048036038101906102919190612133565b610b59565b6040516102a4929190612469565b60405180910390f35b6102c760048036038101906102c291906120f7565b610bb5565b6040516102d49190612433565b60405180910390f35b6102f760048036038101906102f291906120bb565b610be6565b604051610304919061244e565b60405180910390f35b610327600480360381019061032291906121a1565b610c17565b6040516103349190612433565b60405180910390f35b610345610c60565b6040516103529190612499565b60405180910390f35b610363610c67565b60405161037091906124b4565b60405180910390f35b610393600480360381019061038e9190612092565b610c8b565b6040516103a09190612595565b60405180910390f35b6103c360048036038101906103be91906120bb565b610cb1565b005b6103df60048036038101906103da91906121e2565b610d3a565b005b6005818051602081018201805184825260208301602085012081835280955050505050506000915090505481565b6003818051602081018201805184825260208301602085012081835280955050505050506000915090505481565b6002818051602081018201805184825260208301602085012081835280955050505050506000915090505481565b6000806000838152602001908152602001600020600201549050919050565b7fdf8b4c520ffe197c5343c6f5aec59570151ef9a492f2c624fd45ddde6135ec4281565b6104d4600080848152602001908152602001600020600201546104cf6110fd565b610be6565b610529576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f8152602001806128d5602f913960400191505060405180910390fd5b6105338282611105565b5050565b61053f6110fd565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146105c2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180612934602f913960400191505060405180910390fd5b6105cc8282611198565b5050565b6000806105dd848461122b565b9150915081610621576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161061890612535565b60405180910390fd5b60005b8151811015610b23576000600183838151811061063d57fe5b6020026020010151604051610652919061241c565b908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060008173ffffffffffffffffffffffffffffffffffffffff1663b9ed8abf6040518163ffffffff1660e01b815260040160206040518083038186803b1580156106cb57600080fd5b505afa1580156106df573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107039190611fff565b73ffffffffffffffffffffffffffffffffffffffff166398d5fdca6040518163ffffffff1660e01b815260040160206040518083038186803b15801561074857600080fd5b505afa15801561075c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107809190612178565b90508173ffffffffffffffffffffffffffffffffffffffff16637bbf10336040518163ffffffff1660e01b815260040160206040518083038186803b1580156107c857600080fd5b505afa1580156107dc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108009190612069565b15610b1457600384848151811061081357fe5b6020026020010151604051610828919061241c565b908152602001604051809103902054600485858151811061084557fe5b602002602001015160405161085a919061241c565b90815260200160405180910390208190555061089961089461087b83611251565b6f403abc16d674ec80000000000000000060801b6112ff565b611794565b60038585815181106108a757fe5b60200260200101516040516108bc919061241c565b9081526020016040518091039020819055504260028585815181106108dd57fe5b60200260200101516040516108f2919061241c565b9081526020016040518091039020819055508173ffffffffffffffffffffffffffffffffffffffff1663fd2c80ae6040518163ffffffff1660e01b815260040160206040518083038186803b15801561094a57600080fd5b505afa15801561095e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109829190612236565b63ffffffff1681600486868151811061099757fe5b60200260200101516040516109ac919061241c565b9081526020016040518091039020547f8782e8485ffd35eea2850cfd71b2bf39927def6b2ae29f22760db0c376bdb6a88787815181106109e857fe5b60200260200101516040516109fd9190612513565b60405180910390a4610b0a4263ffffffff168373ffffffffffffffffffffffffffffffffffffffff1663fd2c80ae6040518163ffffffff1660e01b815260040160206040518083038186803b158015610a5557600080fd5b505afa158015610a69573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a8d9190612236565b868681518110610a9957fe5b60200260200101516004888881518110610aaf57fe5b6020026020010151604051610ac4919061241c565b9081526020016040518091039020546003898981518110610ae157fe5b6020026020010151604051610af6919061241c565b9081526020016040518091039020546118f4565b5050505050610b27565b50508080600101915050610624565b5050505b5050565b6004818051602081018201805184825260208301602085012081835280955050505050506000915090505481565b600060606000848481818080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505090509050915091509250929050565b6000610bde82600080868152602001908152602001600020600001611ab490919063ffffffff16565b905092915050565b6000610c0f82600080868152602001908152602001600020600001611ace90919063ffffffff16565b905092915050565b6001818051602081018201805184825260208301602085012081835280955050505050506000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000801b81565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000610caa600080848152602001908152602001600020600001611afe565b9050919050565b610cd760008084815260200190815260200160002060020154610cd26110fd565b610be6565b610d2c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260308152602001806129046030913960400191505060405180910390fd5b610d368282611198565b5050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610dc8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dbf90612575565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600183604051610df0919061241c565b908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610e75576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e6c90612555565b60405180910390fd5b60008173ffffffffffffffffffffffffffffffffffffffff1663b9ed8abf6040518163ffffffff1660e01b815260040160206040518083038186803b158015610ebd57600080fd5b505afa158015610ed1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ef59190611fff565b905081600184604051610f08919061241c565b908152602001604051809103902060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060008173ffffffffffffffffffffffffffffffffffffffff166398d5fdca6040518163ffffffff1660e01b815260040160206040518083038186803b158015610f9c57600080fd5b505afa158015610fb0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fd49190612178565b90506000611005611000610fe784611251565b6f403abc16d674ec80000000000000000060801b6112ff565b611794565b9050818473ffffffffffffffffffffffffffffffffffffffff167f36b2621c875dc9ac0ae6a99af9e937724888d3e556f050182d8b00f172a55b568760405161104e9190612513565b60405180910390a34264ffffffffff1660028660405161106e919061241c565b90815260200160405180910390208190555080600386604051611091919061241c565b908152602001604051809103902081905550806004866040516110b4919061241c565b9081526020016040518091039020819055505050505050565b60006110f5836000018373ffffffffffffffffffffffffffffffffffffffff1660001b611b13565b905092915050565b600033905090565b61112c816000808581526020019081526020016000206000016110cd90919063ffffffff16565b15611194576111396110fd565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b6111bf81600080858152602001908152602001600020600001611b8390919063ffffffff16565b15611227576111cc6110fd565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45b5050565b60006060600084848101906112409190612028565b905060018192509250509250929050565b60008082141561126757600060801b90506112fa565b6000808313611279578260000361127b565b825b9050600061128882611bb3565b905060708110156112a1578060700382901b91506112b5565b60708111156112b4576070810382901c91505b5b607081613fff01901b6dffffffffffffffffffffffffffff831617915060008412156112f1576f80000000000000000000000000000000821791505b8160801b925050505b919050565b600080617fff60708560801c6fffffffffffffffffffffffffffffffff16901c166fffffffffffffffffffffffffffffffff1690506000617fff60708560801c6fffffffffffffffffffffffffffffffff16901c166fffffffffffffffffffffffffffffffff169050617fff82141561149657617fff81141561142457836fffffffffffffffffffffffffffffffff1916856fffffffffffffffffffffffffffffffff191614156113cb576f8000000000000000000000000000000060801b841685189250505061178e565b6f8000000000000000000000000000000060801b8486186fffffffffffffffffffffffffffffffff19161415611407578385179250505061178e565b6f7fff800000000000000000000000000060801b9250505061178e565b600060801b6f7fffffffffffffffffffffffffffffff60801b85166fffffffffffffffffffffffffffffffff19161415611475576f7fff800000000000000000000000000060801b9250505061178e565b6f8000000000000000000000000000000060801b841685189250505061178e565b617fff81141561151257600060801b6f7fffffffffffffffffffffffffffffff60801b86166fffffffffffffffffffffffffffffffff191614156114f1576f7fff800000000000000000000000000060801b9250505061178e565b6f8000000000000000000000000000000060801b851684189250505061178e565b60006dffffffffffffffffffffffffffff8660801c166fffffffffffffffffffffffffffffffff169050600083141561154e5760019250611563565b6e010000000000000000000000000000811790505b60006dffffffffffffffffffffffffffff8660801c166fffffffffffffffffffffffffffffffff169050600083141561159f57600192506115b4565b6e010000000000000000000000000000811790505b8082029150600082141561162157600060801b6f8000000000000000000000000000000060801b878918166fffffffffffffffffffffffffffffffff19161161160157600060801b611616565b6f8000000000000000000000000000000060801b5b94505050505061178e565b828401935060007c0200000000000000000000000000000000000000000000000000000000831015611688577c01000000000000000000000000000000000000000000000000000000008310156116805761167b83611bb3565b611683565b60e05b61168b565b60e15b905061407081860110156116a657600094506000925061174e565b6140e081860110156116ea576140708510156116cb57846140700383901c92506116e1565b6140708511156116e057614070850383901b92505b5b6000945061174d565b61c0dd818601111561170457617fff94506000925061174c565b607081111561171b576070810383901c925061172f565b607081101561172e578060700383901b92505b5b6dffffffffffffffffffffffffffff831692506140df8186010394505b5b5b82607086901b6f8000000000000000000000000000000060801b898b181660801c6fffffffffffffffffffffffffffffffff16171760801b955050505050505b92915050565b600080617fff60708460801c6fffffffffffffffffffffffffffffffff16901c166fffffffffffffffffffffffffffffffff1690506140fe8111156117d857600080fd5b613fff8110156117ec5760009150506118ef565b60006e0100000000000000000000000000006dffffffffffffffffffffffffffff8560801c6fffffffffffffffffffffffffffffffff161617905061406f821015611840578161406f0381901c9050611856565b61406f8211156118555761406f820381901b90505b5b6f800000000000000000000000000000008460801c6fffffffffffffffffffffffffffffffff16106118bc577f80000000000000000000000000000000000000000000000000000000000000008111156118af57600080fd5b80600003925050506118ef565b7f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8111156118e957600080fd5b80925050505b919050565b6000821315611aad578460058460405161190e919061241c565b9081526020016040518091039020541015611aac574264ffffffffff1660058460405161193b919061241c565b9081526020016040518091039020819055508363ffffffff1681837f72c7517af7082d19711e2cbfe4b7302013a12a4d3b7cb6c0facc4e63c0c108a6866040516119859190612513565b60405180910390a460018360405161199d919061241c565b908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166366c33dae83836040518363ffffffff1660e01b8152600401611a069291906124ea565b600060405180830381600087803b158015611a2057600080fd5b505af1925050508015611a31575060015b611aaa57611a3d612772565b80611a485750611a9b565b83604051611a56919061241c565b60405180910390207ffe89c7ae4eef450f5d67f124226f4caa51d3c7006110c0468d096d050e1075d082604051611a8d9190612513565b60405180910390a250611aa5565b3d6000803e3d6000fd5b611aab565b5b5b5b5050505050565b6000611ac38360000183611c94565b60001c905092915050565b6000611af6836000018373ffffffffffffffffffffffffffffffffffffffff1660001b611d17565b905092915050565b6000611b0c82600001611d3a565b9050919050565b6000611b1f8383611d17565b611b78578260000182908060018154018082558091505060019003906000526020600020016000909190919091505582600001805490508360010160008481526020019081526020016000208190555060019050611b7d565b600090505b92915050565b6000611bab836000018373ffffffffffffffffffffffffffffffffffffffff1660001b611d4b565b905092915050565b6000808211611bc157600080fd5b60007001000000000000000000000000000000008310611be957608083901c92506080810190505b680100000000000000008310611c0757604083901c92506040810190505b6401000000008310611c2157602083901c92506020810190505b620100008310611c3957601083901c92506010810190505b6101008310611c5057600883901c92506008810190505b60108310611c6657600483901c92506004810190505b60048310611c7c57600283901c92506002810190505b60028310611c8b576001810190505b80915050919050565b600081836000018054905011611cf5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806128b36022913960400191505060405180910390fd5b826000018281548110611d0457fe5b9060005260206000200154905092915050565b600080836001016000848152602001908152602001600020541415905092915050565b600081600001805490509050919050565b60008083600101600084815260200190815260200160002054905060008114611e275760006001820390506000600186600001805490500390506000866000018281548110611d9657fe5b9060005260206000200154905080876000018481548110611db357fe5b9060005260206000200181905550600183018760010160008381526020019081526020016000208190555086600001805480611deb57fe5b60019003818190600052602060002001600090559055866001016000878152602001908152602001600020600090556001945050505050611e2d565b60009150505b92915050565b6000611e46611e41846125e1565b6125b0565b9050808382526020820190508260005b85811015611e865781358501611e6c8882611fab565b845260208401935060208301925050600181019050611e56565b5050509392505050565b6000611ea3611e9e8461260d565b6125b0565b905082815260208101848484011115611ebb57600080fd5b611ec6848285612710565b509392505050565b600081359050611edd81612828565b92915050565b600081519050611ef281612828565b92915050565b600082601f830112611f0957600080fd5b8135611f19848260208601611e33565b91505092915050565b600081519050611f318161283f565b92915050565b600081359050611f4681612856565b92915050565b60008083601f840112611f5e57600080fd5b8235905067ffffffffffffffff811115611f7757600080fd5b602083019150836001820283011115611f8f57600080fd5b9250929050565b600081519050611fa58161286d565b92915050565b600082601f830112611fbc57600080fd5b8135611fcc848260208601611e90565b91505092915050565b600081359050611fe481612884565b92915050565b600081519050611ff98161289b565b92915050565b60006020828403121561201157600080fd5b600061201f84828501611ee3565b91505092915050565b60006020828403121561203a57600080fd5b600082013567ffffffffffffffff81111561205457600080fd5b61206084828501611ef8565b91505092915050565b60006020828403121561207b57600080fd5b600061208984828501611f22565b91505092915050565b6000602082840312156120a457600080fd5b60006120b284828501611f37565b91505092915050565b600080604083850312156120ce57600080fd5b60006120dc85828601611f37565b92505060206120ed85828601611ece565b9150509250929050565b6000806040838503121561210a57600080fd5b600061211885828601611f37565b925050602061212985828601611fd5565b9150509250929050565b6000806020838503121561214657600080fd5b600083013567ffffffffffffffff81111561216057600080fd5b61216c85828601611f4c565b92509250509250929050565b60006020828403121561218a57600080fd5b600061219884828501611f96565b91505092915050565b6000602082840312156121b357600080fd5b600082013567ffffffffffffffff8111156121cd57600080fd5b6121d984828501611fab565b91505092915050565b600080604083850312156121f557600080fd5b600083013567ffffffffffffffff81111561220f57600080fd5b61221b85828601611fab565b925050602061222c85828601611ece565b9150509250929050565b60006020828403121561224857600080fd5b600061225684828501611fea565b91505092915050565b61226881612680565b82525050565b61227781612692565b82525050565b6122868161269e565b82525050565b60006122978261263d565b6122a18185612653565b93506122b181856020860161271f565b6122ba81612754565b840191505092915050565b6122ce816126ec565b82525050565b6122dd816126a8565b82525050565b60006122ee82612648565b6122f88185612664565b935061230881856020860161271f565b61231181612754565b840191505092915050565b600061232782612648565b6123318185612675565b935061234181856020860161271f565b80840191505092915050565b600061235a601583612664565b91507f496e707574206461746120697320696e76616c696400000000000000000000006000830152602082019050919050565b600061239a601683612664565b91507f5072652d6578697374696e6720706f6f6c20636f6465000000000000000000006000830152602082019050919050565b60006123da601283612664565b91507f43616c6c6572206e6f7420666163746f727900000000000000000000000000006000830152602082019050919050565b612416816126d2565b82525050565b6000612428828461231c565b915081905092915050565b6000602082019050612448600083018461225f565b92915050565b6000602082019050612463600083018461226e565b92915050565b600060408201905061247e600083018561226e565b8181036020830152612490818461228c565b90509392505050565b60006020820190506124ae600083018461227d565b92915050565b60006020820190506124c960008301846122c5565b92915050565b60006020820190506124e460008301846122d4565b92915050565b60006040820190506124ff60008301856122d4565b61250c60208301846122d4565b9392505050565b6000602082019050818103600083015261252d81846122e3565b905092915050565b6000602082019050818103600083015261254e8161234d565b9050919050565b6000602082019050818103600083015261256e8161238d565b9050919050565b6000602082019050818103600083015261258e816123cd565b9050919050565b60006020820190506125aa600083018461240d565b92915050565b6000604051905081810181811067ffffffffffffffff821117156125d7576125d6612752565b5b8060405250919050565b600067ffffffffffffffff8211156125fc576125fb612752565b5b602082029050602081019050919050565b600067ffffffffffffffff82111561262857612627612752565b5b601f19601f8301169050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b600061268b826126b2565b9050919050565b60008115159050919050565b6000819050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600063ffffffff82169050919050565b60006126f7826126fe565b9050919050565b6000612709826126b2565b9050919050565b82818337600083830152505050565b60005b8381101561273d578082015181840152602081019050612722565b8381111561274c576000848401525b50505050565bfe5b6000601f19601f8301169050919050565b60008160e01c9050919050565b600060443d101561278257612825565b60046000803e612793600051612765565b6308c379a081146127a45750612825565b60405160043d036004823e80513d602482011167ffffffffffffffff821117156127d057505050612825565b808201805167ffffffffffffffff8111156127ef575050505050612825565b8060208301013d850181111561280a57505050505050612825565b61281382612754565b60208401016040528296505050505050505b90565b61283181612680565b811461283c57600080fd5b50565b61284881612692565b811461285357600080fd5b50565b61285f8161269e565b811461286a57600080fd5b50565b612876816126a8565b811461288157600080fd5b50565b61288d816126d2565b811461289857600080fd5b50565b6128a4816126dc565b81146128af57600080fd5b5056fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e6473416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e2061646d696e20746f206772616e74416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e2061646d696e20746f207265766f6b65416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636520726f6c657320666f722073656c66a264697066735822122085b22f75851d05edc1adfeebaebc950a085a1ddbc5203d1d608f1a5ca9b092e564736f6c63430007060033";

export class PoolKeeper__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _factory: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PoolKeeper> {
    return super.deploy(_factory, overrides || {}) as Promise<PoolKeeper>;
  }
  getDeployTransaction(
    _factory: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_factory, overrides || {});
  }
  attach(address: string): PoolKeeper {
    return super.attach(address) as PoolKeeper;
  }
  connect(signer: Signer): PoolKeeper__factory {
    return super.connect(signer) as PoolKeeper__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PoolKeeperInterface {
    return new utils.Interface(_abi) as PoolKeeperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PoolKeeper {
    return new Contract(address, _abi, signerOrProvider) as PoolKeeper;
  }
}
