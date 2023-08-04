const { configEnv } = require('./config');

const { createAlchemyWeb3 } = require("@alch/alchemy-web3");

//should be alchemy url
const web3 = createAlchemyWeb3(configEnv.rpc_url);


const fs = require('fs');

var tokenjson = [{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"address","name":"_weth","type":"address"},{"internalType":"address","name":"_emon","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"userAddress","type":"address"},{"indexed":false,"internalType":"address payable","name":"relayerAddress","type":"address"},{"indexed":false,"internalType":"bytes","name":"functionSignature","type":"bytes"}],"name":"MetaTransactionExecuted","type":"event"},{"inputs":[{"internalType":"address","name":"_newModerator","type":"address"}],"name":"AddModerator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_newOwner","type":"address"}],"name":"ChangeOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"ERC712_VERSION","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Kill","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"STAT_COUNT","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"STAT_MAX","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint64","name":"_tokenId","type":"uint64"}],"name":"burnMonster","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint32","name":"_classId","type":"uint32"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"catchMonsterNFTemon","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint32","name":"_classId","type":"uint32"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"catchMonsterNFTweth","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"dataContract","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"emon","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"emonRatio","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"bytes","name":"functionSignature","type":"bytes"},{"internalType":"bytes32","name":"sigR","type":"bytes32"},{"internalType":"bytes32","name":"sigS","type":"bytes32"},{"internalType":"uint8","name":"sigV","type":"uint8"}],"name":"executeMetaTransaction","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"gapFactor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getChainId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"getDomainSeperator","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint32","name":"_classId","type":"uint32"}],"name":"getMonsterClassBasic","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getNonce","outputs":[{"internalType":"uint256","name":"nonce","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint32","name":"_classId","type":"uint32"}],"name":"getPriceEmon","outputs":[{"internalType":"bool","name":"catchable","type":"bool"},{"internalType":"uint256","name":"price","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint32","name":"_classId","type":"uint32"}],"name":"getPriceWeth","outputs":[{"internalType":"bool","name":"catchable","type":"bool"},{"internalType":"uint256","name":"price","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_player","type":"address"},{"internalType":"uint256","name":"_block","type":"uint256"},{"internalType":"uint256","name":"_seed","type":"uint256"},{"internalType":"uint256","name":"_count","type":"uint256"}],"name":"getRandom","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isMaintaining","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint32","name":"_classId","type":"uint32"},{"internalType":"address","name":"_trainer","type":"address"},{"internalType":"string","name":"_name","type":"string"}],"name":"mintMonster","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"moderators","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"monsterNFT","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"priceIncreasingRatio","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint32","name":"_classId","type":"uint32"},{"internalType":"bool","name":"_status","type":"bool"}],"name":"setClassWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_gapFactor","type":"uint256"},{"internalType":"uint256","name":"_priceIncreasingRatio","type":"uint256"}],"name":"setConfig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_dataContract","type":"address"},{"internalType":"address","name":"_monsterNFT","type":"address"}],"name":"setContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_emonRatio","type":"uint256"}],"name":"setEmonRatio","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalModerators","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"weth","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_sendTo","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdrawEmon","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_sendTo","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdrawEther","outputs":[],"stateMutability":"nonpayable","type":"function"}]



var tokencontract = '0x330674490160ab9ed41001a0b40cacd435bc1be2';



var sleep = require("sleep");

const privateKey=configEnv.private_key;
var i = 1


async function run(class_id, trainer_address, mon_name) {


   

    var tk = new web3.eth.Contract(tokenjson , tokencontract);


    var rand = await tk.methods.getPriceWeth(1010).call({}, function (error, result) { });


    
    console.log(rand);
    
  

      

      

 

      
}

//module.exports = { run };
 run()


  // setInterval(function(){ 
  //   run()},5000);
  

