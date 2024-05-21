const { configEnv } = require('./config');

var Web3 = require('web3');

//var web3 = new Web3("https://staging-v3.skalenodes.com/v1/staging-fast-active-bellatrix");
var web3 = new Web3("https://mainnet.skalenodes.com/v1/green-giddy-denebola");



var skalejson = [
  {
    "inputs": [
      {
        "internalType": "contract CG_SKLAE_CRYS",
        "name": "_crystalContract",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_token",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint8",
        "name": "class_id",
        "type": "uint8"
      }
    ],
    "name": "CrystalMinted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "previousAdminRole",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "newAdminRole",
        "type": "bytes32"
      }
    ],
    "name": "RoleAdminChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "RoleGranted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "RoleRevoked",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "DEFAULT_ADMIN_ROLE",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "commonChance",
    "outputs": [
      {
        "internalType": "uint32",
        "name": "",
        "type": "uint32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "crystalContract",
    "outputs": [
      {
        "internalType": "contract CG_SKLAE_CRYS",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getOwnedNftsRanged",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "tokensIds",
        "type": "uint256[]"
      },
      {
        "internalType": "uint8[]",
        "name": "classIds",
        "type": "uint8[]"
      },
      {
        "internalType": "uint256",
        "name": "itemsCount",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getRandom",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "addr",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      }
    ],
    "name": "getRoleAdmin",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "grantRole",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "hasRole",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "legendaryChance",
    "outputs": [
      {
        "internalType": "uint32",
        "name": "",
        "type": "uint32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "mineCrystalFree",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "mineCrystalPay",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "mintCooldownPeriod",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "mintPrice",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "paidBonusTimes",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "renounceRole",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "revokeRole",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract CG_SKLAE_CRYS",
        "name": "_crystalContract",
        "type": "address"
      }
    ],
    "name": "setConfigCrystalContract",
    "outputs": [
      {
        "internalType": "bool",
        "name": "result",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint32",
        "name": "_commonChance",
        "type": "uint32"
      },
      {
        "internalType": "uint32",
        "name": "_legendaryChance",
        "type": "uint32"
      },
      {
        "internalType": "uint256",
        "name": "_mintPrice",
        "type": "uint256"
      },
      {
        "internalType": "uint8",
        "name": "_paidBonusTimes",
        "type": "uint8"
      },
      {
        "internalType": "uint256",
        "name": "_mintCooldownPeriod",
        "type": "uint256"
      }
    ],
    "name": "setMiscConfig",
    "outputs": [
      {
        "internalType": "bool",
        "name": "result",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes4",
        "name": "interfaceId",
        "type": "bytes4"
      }
    ],
    "name": "supportsInterface",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]


var skalecontract = "0xE9d487B950A5075D8eaB084e2E04971340765b86";



//const privateKey = "b49b3c7fcb628485bc51c4104c4c90b999351f4ab20e1a6c24d90206f1271012";
const privateKey = "266c5c5ab223587f9ef1a4fe3012871c82e82890fdd840"; // 0xCBF61a957E8be3ae729f17fb16e33dBe2A235c0F

async function run(addr,class_id, transform_class) {




  var tsc = new web3.eth.Contract(skalejson, skalecontract);



  var estimatedGas = await web3.eth.estimateGas({
    from : "0xCBF61a957E8be3ae729f17fb16e33dBe2A235c0F",
    to: skalecontract,
    data: tsc.methods.mineCrystalFree().encodeABI()
  })
 
 estimatedGas = Math.round(estimatedGas * 1.1)
 
 var gasprice = await web3.eth.getGasPrice();
 gasprice = Math.round(gasprice * 1.1);





    const tx = {
      to: skalecontract,
      gas: web3.utils.toHex(estimatedGas), 
      gasPrice:  web3.utils.toHex(gasprice) ,
      data: tsc.methods.mineCrystalFree().encodeABI()
    };


    const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);


    const receipt = await web3.eth.sendSignedTransaction(signedTx.raw || signedTx.rawTransaction);




  console.log('confirmt');
  console.log(receipt);
}


const sleep = (milliseconds) => {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
};


async function run2() {
max = 0;
for (var i=1; i<=1004;i++) {

  await run("0xCBF61a957E8be3ae729f17fb16e33dBe2A235c0F", i)
  sleep(2000);
  console.log('------------------');
  console.log(i);

}
}

run2()

