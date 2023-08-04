const { config } = require('./config');

var Web3 = require('web3');

var web3 = new Web3(config.rpc_url);

var worldjson = [
  {
    type: "constructor",
    stateMutability: "nonpayable",
    inputs: [
      { type: "string", name: "name", internalType: "string" },
      { type: "address", name: "_weth", internalType: "address" },
      { type: "address", name: "_dataContract", internalType: "address" },
      { type: "address", name: "_ethermonProcessor", internalType: "address" },
    ],
  },
  {
    type: "event",
    name: "EventCashOut",
    inputs: [
      {
        type: "address",
        name: "trainer",
        internalType: "address",
        indexed: true,
      },
      {
        type: "uint8",
        name: "result",
        internalType: "enum EthermonEnum.ResultCode",
        indexed: false,
      },
      {
        type: "uint256",
        name: "amount",
        internalType: "uint256",
        indexed: false,
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "EventCatchMonster",
    inputs: [
      {
        type: "address",
        name: "trainer",
        internalType: "address",
        indexed: true,
      },
      { type: "uint64", name: "objId", internalType: "uint64", indexed: false },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "EventWithdrawEther",
    inputs: [
      {
        type: "address",
        name: "sendTo",
        internalType: "address",
        indexed: true,
      },
      {
        type: "uint8",
        name: "result",
        internalType: "enum EthermonEnum.ResultCode",
        indexed: false,
      },
      {
        type: "uint256",
        name: "amount",
        internalType: "uint256",
        indexed: false,
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "MetaTransactionExecuted",
    inputs: [
      {
        type: "address",
        name: "userAddress",
        internalType: "address",
        indexed: false,
      },
      {
        type: "address",
        name: "relayerAddress",
        internalType: "address payable",
        indexed: false,
      },
      {
        type: "bytes",
        name: "functionSignature",
        internalType: "bytes",
        indexed: false,
      },
    ],
    anonymous: false,
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "AddModerator",
    inputs: [
      { type: "address", name: "_newModerator", internalType: "address" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "ChangeOwner",
    inputs: [
      { type: "address", name: "_newOwner", internalType: "address payable" },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "string", name: "", internalType: "string" }],
    name: "ERC712_VERSION",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint8", name: "", internalType: "uint8" }],
    name: "GEN0_NO",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "Kill",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint8", name: "", internalType: "uint8" }],
    name: "STAT_COUNT",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint8", name: "", internalType: "uint8" }],
    name: "STAT_MAX",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "addClassProperty",
    inputs: [
      { type: "uint32", name: "_classId", internalType: "uint32" },
      {
        type: "uint8",
        name: "_type",
        internalType: "enum EthermonEnum.PropertyType",
      },
      { type: "uint32", name: "value", internalType: "uint32" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "addMonsterClassBasic",
    inputs: [
      { type: "uint32", name: "_classId", internalType: "uint32" },
      { type: "uint8", name: "_type", internalType: "uint8" },
      { type: "uint256", name: "_price", internalType: "uint256" },
      { type: "uint256", name: "_returnPrice", internalType: "uint256" },
      { type: "uint8", name: "_ss1", internalType: "uint8" },
      { type: "uint8", name: "_ss2", internalType: "uint8" },
      { type: "uint8", name: "_ss3", internalType: "uint8" },
      { type: "uint8", name: "_ss4", internalType: "uint8" },
      { type: "uint8", name: "_ss5", internalType: "uint8" },
      { type: "uint8", name: "_ss6", internalType: "uint8" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "addMonsterClassExtend",
    inputs: [
      { type: "uint32", name: "_classId", internalType: "uint32" },
      { type: "uint8", name: "_type2", internalType: "uint8" },
      { type: "uint8", name: "_type3", internalType: "uint8" },
      { type: "uint8", name: "_st1", internalType: "uint8" },
      { type: "uint8", name: "_st2", internalType: "uint8" },
      { type: "uint8", name: "_st3", internalType: "uint8" },
      { type: "uint8", name: "_st4", internalType: "uint8" },
      { type: "uint8", name: "_st5", internalType: "uint8" },
      { type: "uint8", name: "_st6", internalType: "uint8" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [
      { type: "uint8", name: "", internalType: "enum EthermonEnum.ResultCode" },
    ],
    name: "cashOut",
    inputs: [{ type: "uint256", name: "_amount", internalType: "uint256" }],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "catchMonster",
    inputs: [
      { type: "uint32", name: "_classId", internalType: "uint32" },
      { type: "string", name: "_name", internalType: "string" },
      { type: "uint256", name: "amount", internalType: "uint256" },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "address", name: "", internalType: "address" }],
    name: "dataContract",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "decreaseMonsterExp",
    inputs: [
      { type: "uint64", name: "_objId", internalType: "uint64" },
      { type: "uint32", name: "amount", internalType: "uint32" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "depositEth",
    inputs: [{ type: "uint256", name: "amount", internalType: "uint256" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "address", name: "", internalType: "address" }],
    name: "ethermonProcessor",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "payable",
    outputs: [{ type: "bytes", name: "", internalType: "bytes" }],
    name: "executeMetaTransaction",
    inputs: [
      { type: "address", name: "userAddress", internalType: "address" },
      { type: "bytes", name: "functionSignature", internalType: "bytes" },
      { type: "bytes32", name: "sigR", internalType: "bytes32" },
      { type: "bytes32", name: "sigS", internalType: "bytes32" },
      { type: "uint8", name: "sigV", internalType: "uint8" },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      { type: "uint32", name: "classId", internalType: "uint32" },
      { type: "uint256", name: "originalPrice", internalType: "uint256" },
      { type: "uint256", name: "returnPrice", internalType: "uint256" },
      { type: "uint32", name: "total", internalType: "uint32" },
    ],
    name: "gen0Config",
    inputs: [{ type: "uint32", name: "", internalType: "uint32" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      { type: "uint32", name: "classId", internalType: "uint32" },
      { type: "bool", name: "isGason", internalType: "bool" },
    ],
    name: "genxProperty",
    inputs: [{ type: "uint32", name: "", internalType: "uint32" }],
  },
  {
    type: "function",
    stateMutability: "pure",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "getChainId",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "getClassPropertySize",
    inputs: [
      { type: "uint32", name: "_classId", internalType: "uint32" },
      {
        type: "uint8",
        name: "_type",
        internalType: "enum EthermonEnum.PropertyType",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint32", name: "", internalType: "uint32" }],
    name: "getClassPropertyValue",
    inputs: [
      { type: "uint32", name: "_classId", internalType: "uint32" },
      {
        type: "uint8",
        name: "_type",
        internalType: "enum EthermonEnum.PropertyType",
      },
      { type: "uint256", name: "index", internalType: "uint256" },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "bytes32", name: "", internalType: "bytes32" }],
    name: "getDomainSeperator",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "getEarningAmount",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      { type: "uint32", name: "", internalType: "uint32" },
      { type: "uint256", name: "", internalType: "uint256" },
      { type: "uint32", name: "", internalType: "uint32" },
    ],
    name: "getGen0COnfig",
    inputs: [{ type: "uint32", name: "_classId", internalType: "uint32" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      { type: "uint256", name: "", internalType: "uint256" },
      { type: "uint256", name: "", internalType: "uint256" },
      { type: "uint256", name: "", internalType: "uint256" },
      { type: "bool", name: "", internalType: "bool" },
    ],
    name: "getMonsterClassBasic",
    inputs: [{ type: "uint32", name: "_classId", internalType: "uint32" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "nonce", internalType: "uint256" }],
    name: "getNonce",
    inputs: [{ type: "address", name: "user", internalType: "address" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      { type: "uint32", name: "classId", internalType: "uint32" },
      { type: "uint32", name: "exp", internalType: "uint32" },
      { type: "bool", name: "gason", internalType: "bool" },
      { type: "uint256", name: "ancestorLength", internalType: "uint256" },
      { type: "uint256", name: "xfactorsLength", internalType: "uint256" },
    ],
    name: "getObjBattleInfo",
    inputs: [{ type: "uint64", name: "_objId", internalType: "uint64" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      { type: "uint32", name: "classId", internalType: "uint32" },
      { type: "uint32", name: "createIndex", internalType: "uint32" },
      { type: "uint32", name: "lastClaimIndex", internalType: "uint32" },
    ],
    name: "getObjIndex",
    inputs: [{ type: "uint64", name: "_objId", internalType: "uint64" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint8", name: "", internalType: "uint8" }],
    name: "getRandom",
    inputs: [
      { type: "uint8", name: "maxRan", internalType: "uint8" },
      { type: "uint8", name: "index", internalType: "uint8" },
      { type: "address", name: "priAddress", internalType: "address" },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      { type: "uint256", name: "current", internalType: "uint256" },
      { type: "uint256", name: "total", internalType: "uint256" },
    ],
    name: "getReturnFromMonster",
    inputs: [{ type: "uint64", name: "_objId", internalType: "uint64" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "getTrainerBalance",
    inputs: [{ type: "address", name: "_trainer", internalType: "address" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "getTrainerEarn",
    inputs: [{ type: "address", name: "_trainer", internalType: "address" }],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "increaseMonsterExp",
    inputs: [
      { type: "uint64", name: "_objId", internalType: "uint64" },
      { type: "uint32", name: "amount", internalType: "uint32" },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "bool", name: "", internalType: "bool" }],
    name: "isGason",
    inputs: [{ type: "uint64", name: "_objId", internalType: "uint64" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "bool", name: "", internalType: "bool" }],
    name: "isMaintaining",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "maxDexSize",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "bool", name: "", internalType: "bool" }],
    name: "moderators",
    inputs: [{ type: "address", name: "", internalType: "address" }],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "moveDataContractBalanceToWorld",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "address", name: "", internalType: "address payable" }],
    name: "owner",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint16", name: "", internalType: "uint16" }],
    name: "priceIncreasingRatio",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "renameMonster",
    inputs: [
      { type: "uint64", name: "_objId", internalType: "uint64" },
      { type: "string", name: "name", internalType: "string" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "setCatchable",
    inputs: [
      { type: "uint32", name: "_classId", internalType: "uint32" },
      { type: "bool", name: "catchable", internalType: "bool" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "setGason",
    inputs: [
      { type: "uint32", name: "_classId", internalType: "uint32" },
      { type: "bool", name: "_isGason", internalType: "bool" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "setMaxDexSize",
    inputs: [{ type: "uint256", name: "_value", internalType: "uint256" }],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "setOriginalPriceGen0",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "setPriceIncreasingRatio",
    inputs: [{ type: "uint16", name: "_ratio", internalType: "uint16" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "totalCashout",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "totalEarn",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint16", name: "", internalType: "uint16" }],
    name: "totalModerators",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "address", name: "", internalType: "contract IERC20" }],
    name: "weth",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [
      { type: "uint8", name: "", internalType: "enum EthermonEnum.ResultCode" },
    ],
    name: "withdrawEther",
    inputs: [
      { type: "address", name: "_sendTo", internalType: "address" },
      { type: "uint256", name: "_amount", internalType: "uint256" },
    ],
  },
];

var datajson = [
  {
    type: "constructor",
    stateMutability: "nonpayable",
    inputs: [
      { type: "string", name: "name", internalType: "string" },
      { type: "address", name: "_weth", internalType: "address" },
    ],
  },
  {
    type: "event",
    name: "MetaTransactionExecuted",
    inputs: [
      {
        type: "address",
        name: "userAddress",
        internalType: "address",
        indexed: false,
      },
      {
        type: "address",
        name: "relayerAddress",
        internalType: "address payable",
        indexed: false,
      },
      {
        type: "bytes",
        name: "functionSignature",
        internalType: "bytes",
        indexed: false,
      },
    ],
    anonymous: false,
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "AddModerator",
    inputs: [
      { type: "address", name: "_newModerator", internalType: "address" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "ChangeOwner",
    inputs: [
      { type: "address", name: "_newOwner", internalType: "address payable" },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "string", name: "", internalType: "string" }],
    name: "ERC712_VERSION",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "Kill",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "addElementToArrayType",
    inputs: [
      {
        type: "uint8",
        name: "_type",
        internalType: "enum EthermonEnum.ArrayType",
      },
      { type: "uint64", name: "_id", internalType: "uint64" },
      { type: "uint8", name: "_value", internalType: "uint8" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "addExtraBalance",
    inputs: [
      { type: "address", name: "_trainer", internalType: "address" },
      { type: "uint256", name: "_amount", internalType: "uint256" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "addMonsterIdMapping",
    inputs: [
      { type: "address", name: "_trainer", internalType: "address" },
      { type: "uint64", name: "_monsterId", internalType: "uint64" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [{ type: "uint64", name: "", internalType: "uint64" }],
    name: "addMonsterObj",
    inputs: [
      { type: "uint32", name: "_classId", internalType: "uint32" },
      { type: "address", name: "_trainer", internalType: "address" },
      { type: "string", name: "_name", internalType: "string" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "clearMonsterReturnBalance",
    inputs: [{ type: "uint64", name: "_monsterId", internalType: "uint64" }],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [{ type: "uint256", name: "amount", internalType: "uint256" }],
    name: "collectAllReturnBalance",
    inputs: [{ type: "address", name: "_trainer", internalType: "address" }],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "decreaseMonsterExp",
    inputs: [
      { type: "uint64", name: "_objId", internalType: "uint64" },
      { type: "uint32", name: "amount", internalType: "uint32" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "deductExtraBalance",
    inputs: [
      { type: "address", name: "_trainer", internalType: "address" },
      { type: "uint256", name: "_amount", internalType: "uint256" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "depositEth",
    inputs: [{ type: "uint256", name: "amount", internalType: "uint256" }],
  },
  {
    type: "function",
    stateMutability: "payable",
    outputs: [{ type: "bytes", name: "", internalType: "bytes" }],
    name: "executeMetaTransaction",
    inputs: [
      { type: "address", name: "userAddress", internalType: "address" },
      { type: "bytes", name: "functionSignature", internalType: "bytes" },
      { type: "bytes32", name: "sigR", internalType: "bytes32" },
      { type: "bytes32", name: "sigS", internalType: "bytes32" },
      { type: "uint8", name: "sigV", internalType: "uint8" },
    ],
  },
  {
    type: "function",
    stateMutability: "pure",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "getChainId",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "bytes32", name: "", internalType: "bytes32" }],
    name: "getDomainSeperator",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint8", name: "", internalType: "uint8" }],
    name: "getElementInArrayType",
    inputs: [
      {
        type: "uint8",
        name: "_type",
        internalType: "enum EthermonEnum.ArrayType",
      },
      { type: "uint64", name: "_id", internalType: "uint64" },
      { type: "uint256", name: "_index", internalType: "uint256" },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "getExpectedBalance",
    inputs: [{ type: "address", name: "_trainer", internalType: "address" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "getExtraBalance",
    inputs: [{ type: "address", name: "_trainer", internalType: "address" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      { type: "uint32", name: "classId", internalType: "uint32" },
      { type: "uint256", name: "price", internalType: "uint256" },
      { type: "uint256", name: "returnPrice", internalType: "uint256" },
      { type: "uint32", name: "total", internalType: "uint32" },
      { type: "bool", name: "catchable", internalType: "bool" },
    ],
    name: "getMonsterClass",
    inputs: [{ type: "uint32", name: "_classId", internalType: "uint32" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "getMonsterDexSize",
    inputs: [{ type: "address", name: "_trainer", internalType: "address" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "string", name: "name", internalType: "string" }],
    name: "getMonsterName",
    inputs: [{ type: "uint64", name: "_objId", internalType: "uint64" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      { type: "uint64", name: "objId", internalType: "uint64" },
      { type: "uint32", name: "classId", internalType: "uint32" },
      { type: "address", name: "trainer", internalType: "address" },
      { type: "uint32", name: "exp", internalType: "uint32" },
      { type: "uint32", name: "createIndex", internalType: "uint32" },
      { type: "uint32", name: "lastClaimIndex", internalType: "uint32" },
      { type: "uint256", name: "createTime", internalType: "uint256" },
    ],
    name: "getMonsterObj",
    inputs: [{ type: "uint64", name: "_objId", internalType: "uint64" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint64", name: "", internalType: "uint64" }],
    name: "getMonsterObjId",
    inputs: [
      { type: "address", name: "_trainer", internalType: "address" },
      { type: "uint256", name: "index", internalType: "uint256" },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      { type: "uint256", name: "current", internalType: "uint256" },
      { type: "uint256", name: "total", internalType: "uint256" },
    ],
    name: "getMonsterReturn",
    inputs: [{ type: "uint64", name: "_objId", internalType: "uint64" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "nonce", internalType: "uint256" }],
    name: "getNonce",
    inputs: [{ type: "address", name: "user", internalType: "address" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "getSizeArrayType",
    inputs: [
      {
        type: "uint8",
        name: "_type",
        internalType: "enum EthermonEnum.ArrayType",
      },
      { type: "uint64", name: "_id", internalType: "uint64" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "increaseMonsterExp",
    inputs: [
      { type: "uint64", name: "_objId", internalType: "uint64" },
      { type: "uint32", name: "amount", internalType: "uint32" },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "bool", name: "", internalType: "bool" }],
    name: "isMaintaining",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "bool", name: "", internalType: "bool" }],
    name: "moderators",
    inputs: [{ type: "address", name: "", internalType: "address" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      { type: "uint32", name: "classId", internalType: "uint32" },
      { type: "uint256", name: "price", internalType: "uint256" },
      { type: "uint256", name: "returnPrice", internalType: "uint256" },
      { type: "uint32", name: "total", internalType: "uint32" },
      { type: "bool", name: "catchable", internalType: "bool" },
    ],
    name: "monsterClass",
    inputs: [{ type: "uint32", name: "", internalType: "uint32" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      { type: "uint64", name: "monsterId", internalType: "uint64" },
      { type: "uint32", name: "classId", internalType: "uint32" },
      { type: "address", name: "trainer", internalType: "address" },
      { type: "string", name: "name", internalType: "string" },
      { type: "uint32", name: "exp", internalType: "uint32" },
      { type: "uint32", name: "createIndex", internalType: "uint32" },
      { type: "uint32", name: "lastClaimIndex", internalType: "uint32" },
      { type: "uint256", name: "createTime", internalType: "uint256" },
    ],
    name: "monsterWorld",
    inputs: [{ type: "uint64", name: "", internalType: "uint64" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "address", name: "", internalType: "address payable" }],
    name: "owner",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "removeMonsterIdMapping",
    inputs: [
      { type: "address", name: "_trainer", internalType: "address" },
      { type: "uint64", name: "_monsterId", internalType: "uint64" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "setExtraBalance",
    inputs: [
      { type: "address", name: "_trainer", internalType: "address" },
      { type: "uint256", name: "_amount", internalType: "uint256" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [{ type: "uint32", name: "", internalType: "uint32" }],
    name: "setMonsterClass",
    inputs: [
      { type: "uint32", name: "_classId", internalType: "uint32" },
      { type: "uint256", name: "_price", internalType: "uint256" },
      { type: "uint256", name: "_returnPrice", internalType: "uint256" },
      { type: "bool", name: "_catchable", internalType: "bool" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "setMonsterObj",
    inputs: [
      { type: "uint64", name: "_objId", internalType: "uint64" },
      { type: "string", name: "_name", internalType: "string" },
      { type: "uint32", name: "_exp", internalType: "uint32" },
      { type: "uint32", name: "_createIndex", internalType: "uint32" },
      { type: "uint32", name: "_lastClaimIndex", internalType: "uint32" },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint32", name: "", internalType: "uint32" }],
    name: "totalClass",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint16", name: "", internalType: "uint16" }],
    name: "totalModerators",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "totalMonster",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint64", name: "", internalType: "uint64" }],
    name: "trainerDex",
    inputs: [
      { type: "address", name: "", internalType: "address" },
      { type: "uint256", name: "", internalType: "uint256" },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "trainerExtraBalance",
    inputs: [{ type: "address", name: "", internalType: "address" }],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [
      { type: "uint8", name: "", internalType: "enum EthermonEnum.ResultCode" },
    ],
    name: "transferMonster",
    inputs: [
      { type: "address", name: "_from", internalType: "address" },
      { type: "address", name: "_to", internalType: "address" },
      { type: "uint64", name: "_monsterId", internalType: "uint64" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "updateIndexOfArrayType",
    inputs: [
      {
        type: "uint8",
        name: "_type",
        internalType: "enum EthermonEnum.ArrayType",
      },
      { type: "uint64", name: "_id", internalType: "uint64" },
      { type: "uint256", name: "_index", internalType: "uint256" },
      { type: "uint8", name: "_value", internalType: "uint8" },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "address", name: "", internalType: "contract IERC20" }],
    name: "weth",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [
      { type: "uint8", name: "", internalType: "enum EthermonEnum.ResultCode" },
    ],
    name: "withdrawEther",
    inputs: [
      { type: "address", name: "_sendTo", internalType: "address" },
      { type: "uint256", name: "_amount", internalType: "uint256" },
    ],
  },
];

var worldcontract = config.contract.ethermon_world;
var datacontract = config.contract.ethermon_data;

//press contracts
//var worldcontract = '0xddBd79d31e6353D4eDbe62Ed9A550CCfFD35B589'
//var datacontract = '0x99284133aF792BD0Efabf3CC4Bd8622f3Ae21834'

var basics = [
  // [224,false],
  // [222,false],
  // [223,false],
  // [224,false],
  //[235,false],
  [227, false],
  // [1,false],
  // [2,false],
  // [183,false],
  // [186,false],
  // [189,false],
  //[180,false],

  //[1002,true],
  //[1003,true],
  //  [1007,true],
  // [1010,true],
];

var dc = new web3.eth.Contract(datajson, datacontract);
var sleep = require("sleep");

const privateKey = config.private_key;

async function run() {
  var dc = new web3.eth.Contract(datajson, datacontract);

  //
  //
  var class_id = 1153;
  var ret = await dc.methods
    .getMonsterClass(class_id)
    .call({}, function (error, result) { });

  console.log(class_id);
  console.log(new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
  console.log(ret.total);
  if (!ret.catchable) {
    console.log('already false');
    process.exit(1)
  }

  console.log('working');
  if (parseInt(ret.total) >= 10) {
    console.log("stop catchin");



    var wc = new web3.eth.Contract(worldjson, worldcontract);

    const tx = {
      to: worldcontract,
      gas: "386700",
      data: wc.methods.setCatchable(class_id, false).encodeABI(),
    };

    const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);

    const receipt = await web3.eth.sendSignedTransaction(
      signedTx.raw || signedTx.rawTransaction
    );
    console.log("confirmt");
    console.log(receipt);


  }


}
setInterval(function () {
  run()
}, 15000);
