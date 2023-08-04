const { configEnv } = require('./config');

var Web3 = require('web3');

var web3 = new Web3(configEnv.rpc_url);


var worldjson = [{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"address","name":"_weth","type":"address"},{"internalType":"address","name":"_dataContract","type":"address"},{"internalType":"address","name":"_ethermonProcessor","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"trainer","type":"address"},{"indexed":false,"internalType":"enum EthermonEnum.ResultCode","name":"result","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EventCashOut","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"trainer","type":"address"},{"indexed":false,"internalType":"uint64","name":"objId","type":"uint64"}],"name":"EventCatchMonster","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"trainer","type":"address"},{"indexed":false,"internalType":"uint64","name":"objId","type":"uint64"}],"name":"EventRenameMonster","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sendTo","type":"address"},{"indexed":false,"internalType":"enum EthermonEnum.ResultCode","name":"result","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EventWithdrawEther","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"userAddress","type":"address"},{"indexed":false,"internalType":"address payable","name":"relayerAddress","type":"address"},{"indexed":false,"internalType":"bytes","name":"functionSignature","type":"bytes"}],"name":"MetaTransactionExecuted","type":"event"},{"inputs":[{"internalType":"address","name":"_newModerator","type":"address"}],"name":"AddModerator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_newOwner","type":"address"}],"name":"ChangeOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"ERC712_VERSION","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"GEN0_NO","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Kill","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"STAT_COUNT","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"STAT_MAX","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint32","name":"_classId","type":"uint32"},{"internalType":"uint32","name":"value1","type":"uint32"},{"internalType":"uint32","name":"value2","type":"uint32"},{"internalType":"uint32","name":"value3","type":"uint32"}],"name":"addAncestors","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint32","name":"_classId","type":"uint32"},{"internalType":"enum EthermonEnum.PropertyType","name":"_type","type":"uint8"},{"internalType":"uint32","name":"value","type":"uint32"}],"name":"addClassProperty","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint32","name":"_classId","type":"uint32"},{"internalType":"uint8","name":"_type","type":"uint8"},{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"uint256","name":"_returnPrice","type":"uint256"},{"internalType":"uint8","name":"_ss1","type":"uint8"},{"internalType":"uint8","name":"_ss2","type":"uint8"},{"internalType":"uint8","name":"_ss3","type":"uint8"},{"internalType":"uint8","name":"_ss4","type":"uint8"},{"internalType":"uint8","name":"_ss5","type":"uint8"},{"internalType":"uint8","name":"_ss6","type":"uint8"}],"name":"addMonsterClassBasic","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint32","name":"_classId","type":"uint32"},{"internalType":"uint8","name":"_type2","type":"uint8"},{"internalType":"uint8","name":"_type3","type":"uint8"},{"internalType":"uint8","name":"_st1","type":"uint8"},{"internalType":"uint8","name":"_st2","type":"uint8"},{"internalType":"uint8","name":"_st3","type":"uint8"},{"internalType":"uint8","name":"_st4","type":"uint8"},{"internalType":"uint8","name":"_st5","type":"uint8"},{"internalType":"uint8","name":"_st6","type":"uint8"}],"name":"addMonsterClassExtend","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"cashOut","outputs":[{"internalType":"enum EthermonEnum.ResultCode","name":"","type":"uint8"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint32","name":"_classId","type":"uint32"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"catchMonster","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"dataContract","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint64","name":"_objId","type":"uint64"},{"internalType":"uint32","name":"amount","type":"uint32"}],"name":"decreaseMonsterExp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"depositEth","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint32","name":"_classId","type":"uint32"},{"internalType":"enum EthermonEnum.PropertyType","name":"_type","type":"uint8"}],"name":"emptyClassProperty","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"ethermonProcessor","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"bytes","name":"functionSignature","type":"bytes"},{"internalType":"bytes32","name":"sigR","type":"bytes32"},{"internalType":"bytes32","name":"sigS","type":"bytes32"},{"internalType":"uint8","name":"sigV","type":"uint8"}],"name":"executeMetaTransaction","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint32","name":"","type":"uint32"}],"name":"gen0Config","outputs":[{"internalType":"uint32","name":"classId","type":"uint32"},{"internalType":"uint256","name":"originalPrice","type":"uint256"},{"internalType":"uint256","name":"returnPrice","type":"uint256"},{"internalType":"uint32","name":"total","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint32","name":"","type":"uint32"}],"name":"genxProperty","outputs":[{"internalType":"uint32","name":"classId","type":"uint32"},{"internalType":"bool","name":"isGason","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getChainId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint32","name":"_classId","type":"uint32"},{"internalType":"enum EthermonEnum.PropertyType","name":"_type","type":"uint8"}],"name":"getClassPropertySize","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint32","name":"_classId","type":"uint32"},{"internalType":"enum EthermonEnum.PropertyType","name":"_type","type":"uint8"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getClassPropertyValue","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDomainSeperator","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getEarningAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint32","name":"_classId","type":"uint32"}],"name":"getGen0COnfig","outputs":[{"internalType":"uint32","name":"","type":"uint32"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getNonce","outputs":[{"internalType":"uint256","name":"nonce","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint64","name":"_objId","type":"uint64"}],"name":"getObjIndex","outputs":[{"internalType":"uint32","name":"classId","type":"uint32"},{"internalType":"uint32","name":"createIndex","type":"uint32"},{"internalType":"uint32","name":"lastClaimIndex","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"maxRan","type":"uint8"},{"internalType":"uint8","name":"index","type":"uint8"},{"internalType":"address","name":"priAddress","type":"address"}],"name":"getRandom","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint64","name":"_objId","type":"uint64"}],"name":"getReturnFromMonster","outputs":[{"internalType":"uint256","name":"current","type":"uint256"},{"internalType":"uint256","name":"total","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_trainer","type":"address"}],"name":"getTrainerBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_trainer","type":"address"}],"name":"getTrainerEarn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint64","name":"_objId","type":"uint64"},{"internalType":"uint32","name":"amount","type":"uint32"}],"name":"increaseMonsterExp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint64","name":"_objId","type":"uint64"}],"name":"isGason","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isMaintaining","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxDexSize","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"moderators","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"moveDataContractBalanceToWorld","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"priceIncreasingRatio","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint64","name":"_objId","type":"uint64"},{"internalType":"string","name":"name","type":"string"}],"name":"renameMonster","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint32","name":"_classId","type":"uint32"},{"internalType":"bool","name":"catchable","type":"bool"}],"name":"setCatchable","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint32","name":"_classId","type":"uint32"},{"internalType":"bool","name":"_isGason","type":"bool"}],"name":"setGason","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setMaxDexSize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setOriginalPriceGen0","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"_ratio","type":"uint16"}],"name":"setPriceIncreasingRatio","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalCashout","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalEarn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalModerators","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"weth","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_sendTo","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdrawEther","outputs":[{"internalType":"enum EthermonEnum.ResultCode","name":"","type":"uint8"}],"stateMutability":"nonpayable","type":"function"}]




// var worldcontract = '0x79f454801932c02730f6732fc4e101ae2eae268b'
// var datacontract = '0x0f05607e51d5224300520a710898A8467d8d1117'

var worldcontract = configEnv.contract.ethermon_world;

//press contracts
//var worldcontract = '0xddBd79d31e6353D4eDbe62Ed9A550CCfFD35B589'
//var datacontract = '0x99284133aF792BD0Efabf3CC4Bd8622f3Ae21834'
var sleep = require('sleep');





const privateKey = configEnv.private_key;



// unknow is generation of mons
async function run(class_id, value1, value2, value3) {

  var wc = new web3.eth.Contract(worldjson, worldcontract);

  var estimatedGas = await web3.eth.estimateGas({
    from : "0xd00faF7c2a837DC457389758Ea1271aE6256dc44",
    to: worldcontract,
    data: wc.methods.addAncestors(class_id, value1, value2, value3).encodeABI()
  })
 
 estimatedGas = Math.round(estimatedGas * 1.1)

 
 var gasprice = await web3.eth.getGasPrice();
 gasprice = Math.round(gasprice * 1.1);






    const tx = {
      to: worldcontract,
      gas: web3.utils.toHex(estimatedGas), 
      gasPrice:  web3.utils.toHex(gasprice) ,
      data: wc.methods.addAncestors(class_id, value1, value2, value3).encodeABI()
    };


    const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);



    const receipt = await web3.eth.sendSignedTransaction(signedTx.raw || signedTx.rawTransaction);
    console.log('confirmt');
    console.log(receipt);
    console.log('-----id----');
    console.log(class_id, value1);
    console.log(class_id, value2);
    console.log(class_id, value3);


//  }
}
module.exports = { run };



//run()
