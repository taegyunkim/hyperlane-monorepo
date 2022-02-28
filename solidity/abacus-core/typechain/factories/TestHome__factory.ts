/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestHome, TestHomeInterface } from "../TestHome";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_localDomain",
        type: "uint32",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "messageHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "leafIndex",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "destinationAndNonce",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "committedRoot",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "Dispatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "oldRoot",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32[2]",
        name: "newRoot",
        type: "bytes32[2]",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "signature2",
        type: "bytes",
      },
    ],
    name: "DoubleUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "oldRoot",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "newRoot",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "ImproperUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "updater",
        type: "address",
      },
    ],
    name: "NewUpdater",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "updaterManager",
        type: "address",
      },
    ],
    name: "NewUpdaterManager",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "homeDomain",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "oldRoot",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newRoot",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "Update",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "updater",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "reporter",
        type: "address",
      },
    ],
    name: "UpdaterSlashed",
    type: "event",
  },
  {
    inputs: [],
    name: "MAX_MESSAGE_BODY_BYTES",
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
    inputs: [],
    name: "VERSION",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "committedRoot",
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
    name: "count",
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
        internalType: "uint32",
        name: "_destination",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "_nonce",
        type: "uint32",
      },
    ],
    name: "destinationAndNonce",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_destinationDomain",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_recipientAddress",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_messageBody",
        type: "bytes",
      },
    ],
    name: "dispatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_oldRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes32[2]",
        name: "_newRoot",
        type: "bytes32[2]",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_signature2",
        type: "bytes",
      },
    ],
    name: "doubleUpdate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "homeDomainHash",
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
        name: "_oldRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_newRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "improperUpdate",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IUpdaterManager",
        name: "_updaterManager",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "localDomain",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
        name: "_item",
        type: "bytes32",
      },
    ],
    name: "queueContains",
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
    inputs: [],
    name: "queueEnd",
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
    name: "queueLength",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "root",
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
    name: "setFailed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_updater",
        type: "address",
      },
    ],
    name: "setUpdater",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_updaterManager",
        type: "address",
      },
    ],
    name: "setUpdaterManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "state",
    outputs: [
      {
        internalType: "enum Common.States",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "suggestUpdate",
    outputs: [
      {
        internalType: "bytes32",
        name: "_committedRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_new",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "tree",
    outputs: [
      {
        internalType: "uint256",
        name: "count",
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
        name: "_committedRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_newRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "update",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "updater",
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
    inputs: [],
    name: "updaterManager",
    outputs: [
      {
        internalType: "contract IUpdaterManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b5060405161303a38038061303a8339818101604052602081101561003357600080fd5b505160e081901b6001600160e01b03191660805263ffffffff16612fc7610073600039806109f75280610b45528061101d52806116715250612fc76000f3fe608060405234801561001057600080fd5b50600436106101c45760003560e01c80639df6c8e1116100f9578063df034cd011610097578063f6d1610211610071578063f6d1610214610662578063fa31de011461066a578063fd54b22814610722578063ffa1ad741461072a576101c4565b8063df034cd01461061f578063ebf0c71714610627578063f2fde38b1461062f576101c4565b8063b95a2001116100d3578063b95a200114610558578063c19d93fb1461057b578063c4d66de8146105a4578063da180e70146105d7576101c4565b80639df6c8e114610496578063ab91c7b01461049e578063b31c01fb146104a6576101c4565b806367a6771d116101665780638da5cb5b116101405780638da5cb5b1461034d5780638e4e30e01461037e5780639776120e146104305780639d54f41914610463576101c4565b806367a6771d1461031c578063715018a6146103245780638d3638f41461032c576101c4565b80632bef2892116101a25780632bef2892146102ba57806336e104de146102eb57806345630b1a1461030c578063522ae00214610314576101c4565b806306661abd146101c9578063146901db146101e357806319d9d21a146101ed575b600080fd5b6101d1610748565b60408051918252519081900360200190f35b6101eb61074e565b005b6101eb600480360360a081101561020357600080fd5b813591602081019181019060808101606082013564010000000081111561022957600080fd5b82018360208201111561023b57600080fd5b8035906020019184600183028401116401000000008311171561025d57600080fd5b91939092909160208101903564010000000081111561027b57600080fd5b82018360208201111561028d57600080fd5b803590602001918460018302840111640100000000831117156102af57600080fd5b509092509050610758565b6102d7600480360360208110156102d057600080fd5b50356109b5565b604080519115158252519081900360200190f35b6102f36109c8565b6040805192835260208301919091528051918290030190f35b6101d16109f0565b6101d1610a20565b6101d1610a26565b6101eb610a2c565b610334610b43565b6040805163ffffffff9092168252519081900360200190f35b610355610b67565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6102d76004803603606081101561039457600080fd5b8135916020810135918101906060810160408201356401000000008111156103bb57600080fd5b8201836020820111156103cd57600080fd5b803590602001918460018302840111640100000000831117156103ef57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610b83945050505050565b6101eb6004803603602081101561044657600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610dd6565b6101eb6004803603602081101561047957600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610e8a565b610355610f1a565b6101d1610f37565b6101eb600480360360608110156104bc57600080fd5b8135916020810135918101906060810160408201356401000000008111156104e357600080fd5b8201836020820111156104f557600080fd5b8035906020019184600183028401116401000000008311171561051757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610f43945050505050565b6103346004803603602081101561056e57600080fd5b503563ffffffff166110e1565b6105836110fa565b6040518082600281111561059357fe5b815260200191505060405180910390f35b6101eb600480360360208110156105ba57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661111b565b610602600480360360408110156105ed57600080fd5b5063ffffffff81358116916020013516611336565b6040805167ffffffffffffffff9092168252519081900360200190f35b610355611342565b6101d161135e565b6101eb6004803603602081101561064557600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661136a565b6101d161150c565b6101eb6004803603606081101561068057600080fd5b63ffffffff823516916020810135918101906060810160408201356401000000008111156106ad57600080fd5b8201836020820111156106bf57600080fd5b803590602001918460018302840111640100000000831117156106e157600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550611518945050505050565b6101d161178e565b610732611794565b6040805160ff9092168252519081900360200190f35b60545490565b610756611799565b565b600260865474010000000000000000000000000000000000000000900460ff16600281111561078357fe5b14156107f057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6661696c65642073746174650000000000000000000000000000000000000000604482015290519081900360640190fd5b604080516020601f860181900481028201810190925284815261083291889188359188908890819084018382808284376000920191909152506117da92505050565b8015610881575061088186866001602002013584848080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506117da92505050565b801561089257508435602086013514155b156109ad5761089f61186c565b7f2c3f60bab4170347826231b75a920b5053941ddebc6eed6fd2c25721648b186f8686868686866040518087815260200186600260200280828437600083820152601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01690910182810360409081018252810186905290506020810160608201878780828437600083820152601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01690910184810383528581526020019050858580828437600083820152604051601f9091017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169092018290039a509098505050505050505050a15b505050505050565b60006109c2600183611948565b92915050565b6000806109d560016119b8565b156109ec5760875491506109e960016119f8565b90505b9091565b6000610a1b7f0000000000000000000000000000000000000000000000000000000000000000611a35565b905090565b61080081565b60875481565b610a34611aaa565b73ffffffffffffffffffffffffffffffffffffffff16610a52610b67565b73ffffffffffffffffffffffffffffffffffffffff1614610ad457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b60e95460405160009173ffffffffffffffffffffffffffffffffffffffff16907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a360e980547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b7f000000000000000000000000000000000000000000000000000000000000000081565b60e95473ffffffffffffffffffffffffffffffffffffffff1690565b6000600260865474010000000000000000000000000000000000000000900460ff166002811115610bb057fe5b1415610c1d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6661696c65642073746174650000000000000000000000000000000000000000604482015290519081900360640190fd5b610c288484846117da565b610c9357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f2175706461746572207369670000000000000000000000000000000000000000604482015290519081900360640190fd5b6087548414610d0357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f6e6f7420612063757272656e7420757064617465000000000000000000000000604482015290519081900360640190fd5b610d0e600184611948565b610dcb57610d1a61186c565b7f6844fd5e21c932b5197b78ac11bf96e2eaa4e882dd0c88087060cf2065c04ab28484846040518084815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610d87578181015183820152602001610d6f565b50505050905090810190601f168015610db45780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a1506001610dcf565b5060005b9392505050565b610dde611aaa565b73ffffffffffffffffffffffffffffffffffffffff16610dfc610b67565b73ffffffffffffffffffffffffffffffffffffffff1614610e7e57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b610e8781611aae565b50565b61011c5473ffffffffffffffffffffffffffffffffffffffff163314610f1157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f21757064617465724d616e616765720000000000000000000000000000000000604482015290519081900360640190fd5b610e8781611b9c565b61011c5473ffffffffffffffffffffffffffffffffffffffff1681565b6000610a1b60016119b8565b600260865474010000000000000000000000000000000000000000900460ff166002811115610f6e57fe5b1415610fdb57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6661696c65642073746174650000000000000000000000000000000000000000604482015290519081900360640190fd5b610fe6838383610b83565b15610ff0576110dc565b6000610ffc6001611c15565b90508281141561100c5750611012565b50610ff0565b8160878190555081837f000000000000000000000000000000000000000000000000000000000000000063ffffffff167f608828ad904a0c9250c09004ba7226efb08f35a5c815bb3f76b5a8a271cd08b2846040518080602001828103825283818151815260200191508051906020019080838360005b838110156110a1578181015183820152602001611089565b50505050905090810190601f1680156110ce5780820380516001836020036101000a031916815260200191505b509250505060405180910390a45b505050565b61011b6020526000908152604090205463ffffffff1681565b60865474010000000000000000000000000000000000000000900460ff1681565b600054610100900460ff16806111345750611134611d4e565b80611142575060005460ff16155b611197576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180612f42602e913960400191505060405180910390fd5b600054610100900460ff161580156111fd57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b611205611d5f565b61120d611e82565b61121682611aae565b61011c54604080517fdf034cd0000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff169163df034cd0916004808301926020929190829003018186803b15801561128257600080fd5b505afa158015611296573d6000803e3d6000fd5b505050506040513d60208110156112ac57600080fd5b505190506112b981611f6e565b6040805173ffffffffffffffffffffffffffffffffffffffff8316815290517f9e5f57e4ee5f9eeac3131028d48f19d80820ce6fa93c4c66cc82a3e2b9837c329181900360200190a150801561133257600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555b5050565b6000610dcf83836120fb565b60865473ffffffffffffffffffffffffffffffffffffffff1681565b6000610a1b6034612115565b611372611aaa565b73ffffffffffffffffffffffffffffffffffffffff16611390610b67565b73ffffffffffffffffffffffffffffffffffffffff161461141257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff811661147e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180612efa6026913960400191505060405180910390fd5b60e95460405173ffffffffffffffffffffffffffffffffffffffff8084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a360e980547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6000610a1b60016119f8565b600260865474010000000000000000000000000000000000000000900460ff16600281111561154357fe5b14156115b057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6661696c65642073746174650000000000000000000000000000000000000000604482015290519081900360640190fd5b6108008151111561162257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6d736720746f6f206c6f6e670000000000000000000000000000000000000000604482015290519081900360640190fd5b63ffffffff808416600090815261011b602052604081208054808416600181019094167fffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000090911617905561169a7f00000000000000000000000000000000000000000000000000000000000000003384888888612128565b805160208201209091506116af6034826121fe565b6116c26116ba61135e565b600190612306565b506116cd86846120fb565b67ffffffffffffffff1660016116e1610748565b03827f9d4c83d2e57d7d381feb264b44a5015e7f9ef26340f4fc46b558a6dc16dd811a608754866040518083815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561174b578181015183820152602001611733565b50505050905090810190601f1680156117785780820380516001836020036101000a031916815260200191505b50935050505060405180910390a4505050505050565b60545481565b600081565b608680547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff1674020000000000000000000000000000000000000000179055565b6000806117e56109f0565b858560405160200180848152602001838152602001828152602001935050505060405160208183030381529060405280519060200120905061182681612373565b60865490915073ffffffffffffffffffffffffffffffffffffffff1661184c82856123c4565b73ffffffffffffffffffffffffffffffffffffffff161495945050505050565b611874611799565b61011c54604080517f5b3c2cbf000000000000000000000000000000000000000000000000000000008152336004820152905173ffffffffffffffffffffffffffffffffffffffff90921691635b3c2cbf9160248082019260009290919082900301818387803b1580156118e757600080fd5b505af11580156118fb573d6000803e3d6000fd5b505060865460405133935073ffffffffffffffffffffffffffffffffffffffff90911691507f98064af315f26d7333ba107ba43a128ec74345f4d4e6f2549840fe092a1c8bce90600090a3565b81546000906fffffffffffffffffffffffffffffffff165b835470010000000000000000000000000000000090046fffffffffffffffffffffffffffffffff168111610dcb5760008181526001850160205260409020548314156119b05760019150506109c2565b600101611960565b80546000906fffffffffffffffffffffffffffffffff7001000000000000000000000000000000008204811691166119f0828261245e565b949350505050565b805470010000000000000000000000000000000090046fffffffffffffffffffffffffffffffff1660009081526001909101602052604090205490565b6040805160e09290921b7fffffffff00000000000000000000000000000000000000000000000000000000166020808401919091527f4f5054494353000000000000000000000000000000000000000000000000000060248401528151808403600a018152602a909301909152815191012090565b3390565b611ab781612478565b611b2257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f21636f6e747261637420757064617465724d616e616765720000000000000000604482015290519081900360640190fd5b61011c805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff0000000000000000000000000000000000000000909116811790915560408051918252517f958d788fb4c373604cd4c73aa8c592de127d0819b49bb4dc02c8ecd666e965bf9181900360200190a150565b6086805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff0000000000000000000000000000000000000000909116811790915560408051918252517f9e5f57e4ee5f9eeac3131028d48f19d80820ce6fa93c4c66cc82a3e2b9837c329181900360200190a150565b80546000906fffffffffffffffffffffffffffffffff700100000000000000000000000000000000820481169116611c4d828261245e565b611cb857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f456d707479000000000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6fffffffffffffffffffffffffffffffff8116600090815260018501602052604090205492508215611d09576fffffffffffffffffffffffffffffffff811660009081526001850160205260408120555b83547fffffffffffffffffffffffffffffffff00000000000000000000000000000000166001919091016fffffffffffffffffffffffffffffffff1617909255919050565b6000611d5930612478565b15905090565b600054610100900460ff1680611d785750611d78611d4e565b80611d86575060005460ff16155b611ddb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180612f42602e913960400191505060405180910390fd5b600054610100900460ff16158015611e4157600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b611e4961247e565b611e51612590565b8015610e8757600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff16905550565b600054610100900460ff1680611e9b5750611e9b611d4e565b80611ea9575060005460ff16155b611efe576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180612f42602e913960400191505060405180910390fd5b600054610100900460ff16158015611f6457600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b611e516001612720565b600054610100900460ff1680611f875750611f87611d4e565b80611f95575060005460ff16155b611fea576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180612f42602e913960400191505060405180910390fd5b600054610100900460ff1615801561205057600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b608680547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8416177fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff1674010000000000000000000000000000000000000000179055801561133257600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555050565b63ffffffff1660209190911b67ffffffff00000000161790565b60006109c282612123612764565b612c25565b6060868686868686604051602001808763ffffffff1660e01b81526004018681526020018563ffffffff1660e01b81526004018463ffffffff1660e01b815260040183815260200182805190602001908083835b602083106121b957805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0909201916020918201910161217c565b6001836020036101000a038019825116818451168082178552505050505050905001965050505050505060405160208183030381529060405290509695505050505050565b602082015463ffffffff1161227457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f6d65726b6c6520747265652066756c6c00000000000000000000000000000000604482015290519081900360640190fd5b6020820180546001019081905560005b60208110156123035781600116600114156122b057828482602081106122a657fe5b0155506113329050565b8381602081106122bc57fe5b0154836040516020018083815260200182815260200192505050604051602081830303815290604052805190602001209250600282816122f857fe5b049150600101612284565b50fe5b81546fffffffffffffffffffffffffffffffff80821670010000000000000000000000000000000092839004821660010191821690920291909117835581156109c2576fffffffffffffffffffffffffffffffff8116600090815260019390930160205260409092205590565b604080517f19457468657265756d205369676e6564204d6573736167653a0a333200000000602080830191909152603c8083019490945282518083039094018452605c909101909152815191012090565b6000815160411461243657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015290519081900360640190fd5b60208201516040830151606084015160001a61245486828585612ce3565b9695505050505050565b60019103016fffffffffffffffffffffffffffffffff1690565b3b151590565b600054610100900460ff16806124975750612497611d4e565b806124a5575060005460ff16155b6124fa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180612f42602e913960400191505060405180910390fd5b600054610100900460ff16158015611e5157600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790558015610e8757600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff16905550565b600054610100900460ff16806125a957506125a9611d4e565b806125b7575060005460ff16155b61260c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180612f42602e913960400191505060405180910390fd5b600054610100900460ff1615801561267257600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b600061267c611aaa565b60e980547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8316908117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3508015610e8757600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff16905550565b80546fffffffffffffffffffffffffffffffff16610e875780547fffffffffffffffffffffffffffffffff0000000000000000000000000000000016600117815550565b61276c612eda565b600081527fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb560208201527fb4c11951957c6f8f642c4af61cd6b24640fec6dc7fc607ee8206a99e92410d3060408201527f21ddb9a356815c3fac1026b6dec5df3124afbadb485c9ba5a3e3398a04b7ba8560608201527fe58769b32a1beaf1ea27375a44095a0d1fb664ce2dd358e7fcbfb78c26a1934460808201527f0eb01ebfc9ed27500cd4dfc979272d1f0913cc9f66540d7e8005811109e1cf2d60a08201527f887c22bd8750d34016ac3c66b5ff102dacdd73f6b014e710b51e8022af9a196860c08201527fffd70157e48063fc33c97a050f7f640233bf646cc98d9524c6b92bcf3ab56f8360e08201527f9867cc5f7f196b93bae1e27e6320742445d290f2263827498b54fec539f756af6101008201527fcefad4e508c098b9a7e1d8feb19955fb02ba9675585078710969d3440f5054e06101208201527ff9dc3e7fe016e050eff260334f18a5d4fe391d82092319f5964f2e2eb7c1c3a56101408201527ff8b13a49e282f609c317a833fb8d976d11517c571d1221a265d25af778ecf8926101608201527f3490c6ceeb450aecdc82e28293031d10c7d73bf85e57bf041a97360aa2c5d99c6101808201527fc1df82d9c4b87413eae2ef048f94b4d3554cea73d92b0f7af96e0271c691e2bb6101a08201527f5c67add7c6caf302256adedf7ab114da0acfe870d449a3a489f781d659e8becc6101c08201527fda7bce9f4e8618b6bd2f4132ce798cdc7a60e7e1460a7299e3c6342a579626d26101e08201527f2733e50f526ec2fa19a22b31e8ed50f23cd1fdf94c9154ed3a7609a2f1ff981f6102008201527fe1d3b5c807b281e4683cc6d6315cf95b9ade8641defcb32372f1c126e398ef7a6102208201527f5a2dce0a8a7f68bb74560f8f71837c2c2ebbcbf7fffb42ae1896f13f7c7479a06102408201527fb46a28b6f55540f89444f63de0378e3d121be09e06cc9ded1c20e65876d36aa06102608201527fc65e9645644786b620e2dd2ad648ddfcbf4a7e5b1a3a4ecfe7f64667a3f0b7e26102808201527ff4418588ed35a2458cffeb39b93d26f18d2ab13bdce6aee58e7b99359ec2dfd96102a08201527f5a9c16dc00d6ef18b7933a6f8dc65ccb55667138776f7dea101070dc8796e3776102c08201527f4df84f40ae0c8229d0d6069e5c8f39a7c299677a09d367fc7b05e3bc380ee6526102e08201527fcdc72595f74c7b1043d0e1ffbab734648c838dfb0527d971b602bc216c9619ef6103008201527f0abf5ac974a1ed57f4050aa510dd9c74f508277b39d7973bb2dfccc5eeb0618d6103208201527fb8cd74046ff337f0a7bf2c8e03e10f642c1886798d71806ab1e888d9e5ee87d06103408201527f838c5655cb21c6cb83313b5a631175dff4963772cce9108188b34ac87c81c41e6103608201527f662ee4dd2dd7b2bc707961b1e646c4047669dcb6584f0d8d770daf5d7e7deb2e6103808201527f388ab20e2573d171a88108e79d820e98f26c0b84aa8b2f4aa4968dbb818ea3226103a08201527f93237c50ba75ee485f4c22adf2f741400bdf8d6a9cc7df7ecae576221665d7356103c08201527f8448818bb4ae4562849e949e17ac16e0be16688e156b5cf15e098c627c0056a96103e082015290565b6020820154600090815b6020811015612cdb57600182821c166000868360208110612c4c57fe5b015490508160011415612c8f5780856040516020018083815260200182815260200192505050604051602081830303815290604052805190602001209450612cd1565b84868460208110612c9c57fe5b602002015160405160200180838152602001828152602001925050506040516020818303038152906040528051906020012094505b5050600101612c2f565b505092915050565b60007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0821115612d5e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180612f206022913960400191505060405180910390fd5b8360ff16601b1480612d7357508360ff16601c145b612dc8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180612f706022913960400191505060405180910390fd5b600060018686868660405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015612e24573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff8116612ed157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015290519081900360640190fd5b95945050505050565b604051806104000160405280602090602082028036833750919291505056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737345434453413a20696e76616c6964207369676e6174757265202773272076616c7565496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a656445434453413a20696e76616c6964207369676e6174757265202776272076616c7565a2646970667358221220bcdf2c20d10075f60c1dc75cd5e9879755df329e90f4f0194867777ddd17df9d64736f6c63430007060033";

export class TestHome__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _localDomain: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestHome> {
    return super.deploy(_localDomain, overrides || {}) as Promise<TestHome>;
  }
  getDeployTransaction(
    _localDomain: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_localDomain, overrides || {});
  }
  attach(address: string): TestHome {
    return super.attach(address) as TestHome;
  }
  connect(signer: Signer): TestHome__factory {
    return super.connect(signer) as TestHome__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestHomeInterface {
    return new utils.Interface(_abi) as TestHomeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestHome {
    return new Contract(address, _abi, signerOrProvider) as TestHome;
  }
}