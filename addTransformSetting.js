const { configEnv } = require('./config');

var Web3 = require('web3');

var web3 = new Web3(configEnv.rpc_url);



var trasnformsettingjson = [{"inputs":[{"internalType":"address","name":"_newModerator","type":"address"}],"name":"AddModerator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_newOwner","type":"address"}],"name":"ChangeOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"Kill","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint32","name":"_classId","type":"uint32"}],"name":"getClassTransformInfo","outputs":[{"internalType":"uint8","name":"transformLevel","type":"uint8"},{"internalType":"uint32","name":"transformCLassId","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint32","name":"_classId","type":"uint32"}],"name":"getTransformInfo","outputs":[{"internalType":"uint32","name":"transformClassId","type":"uint32"},{"internalType":"uint8","name":"level","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isMaintaining","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"moderators","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint32","name":"_classId","type":"uint32"},{"internalType":"uint8","name":"_transformLevel","type":"uint8"},{"internalType":"uint32","name":"_tranformClass","type":"uint32"}],"name":"setConfigClass","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalModerators","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint32","name":"","type":"uint32"}],"name":"transformClasses","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint32","name":"","type":"uint32"}],"name":"transformLevels","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"}]

// var worldcontract = '0xB170Ba875222B3b02bA8D7ac8d826e715DF4Dec4'
// var datacontract = '0x0f05607e51d5224300520a710898A8467d8d1117'

var trasnformsettingcontract = configEnv.contract.ethermon_transform_setting;

//press contracts
//var worldcontract = '0xddBd79d31e6353D4eDbe62Ed9A550CCfFD35B589'
//var datacontract = '0x99284133aF792BD0Efabf3CC4Bd8622f3Ae21834'


const privateKey = configEnv.private_key;

async function run(class_id, transform_level, transform_class) {



  var tsc = new web3.eth.Contract(trasnformsettingjson, trasnformsettingcontract);



  var estimatedGas = await web3.eth.estimateGas({
    from : "0xd00faf7c2a837dc457389758ea1271ae6256dc44",
    to: trasnformsettingcontract,
    data: tsc.methods.setConfigClass(class_id, transform_level, transform_class).encodeABI()
  })
 
 estimatedGas = Math.round(estimatedGas * 1.1)

 
 var gasprice = await web3.eth.getGasPrice();
 gasprice = Math.round(gasprice * 1.1);






    const tx = {
      to: trasnformsettingcontract,
      gas: web3.utils.toHex(estimatedGas), 
      gasPrice:  web3.utils.toHex(gasprice) ,
      data: tsc.methods.setConfigClass(class_id, transform_level, transform_class).encodeABI()
    };


    const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);



    const receipt = await web3.eth.sendSignedTransaction(signedTx.raw || signedTx.rawTransaction);




  console.log('confirmt');
  console.log(receipt);
  console.log('-----id----');
  console.log(class_id, transform_class, transform_level);
}

module.exports = { run };