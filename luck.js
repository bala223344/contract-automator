const { configEnv } = require('./config');

const { createAlchemyWeb3 } = require("@alch/alchemy-web3");

//should be alchemy url
const web3 = createAlchemyWeb3(configEnv.rpc_url);
const genRanHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

async function  run () {
  var i = 0;
  while (i < 30) {

    
    var str = genRanHex(64)
    var key = str.split('').sort(function(){return 0.5-Math.random()}).join('');
    var acc = await web3.eth.accounts.privateKeyToAccount(key);

    console.log(acc);

    url = 'https://etherscan.io/address/'+acc.address;
    console.log(url);
    var start = (process.platform == 'darwin'? 'open': process.platform == 'win32'? 'start': 'xdg-open');
    require('child_process').exec(start + ' ' + url);


    console.log('reerere');

    i++;
  }
}


 run()


  // setInterval(function(){ 
  //   run()},20000);
  

