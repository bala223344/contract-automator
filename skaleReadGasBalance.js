var Web3 = require("web3");
var mysql = require("mysql");

const fsPromises = require("fs").promises;

var web3 = new Web3("https://mainnet.skalenodes.com/v1/green-giddy-denebola");

async function run() {
  var args = process.argv;
  let arr = [

    "0x35f62ef71509169Bb6eCAF0e495A9C3B47BeC5F8"
]

  for (let i = 0; i < arr.length; i++) {
    var wc = await web3.eth.getBalance(arr[i]);

    console.log(arr[i]);
    console.log(wc);

    if (wc == 0  || wc == 1000000000000) {
      await fsPromises.writeFile("./zerob.txt", '"' + arr[i] + '",\n', {
        flag: "a+",
      });
      console.log("writ");
    }
  }
}

run();
