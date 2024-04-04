const Web3 = require("web3");
const { ethers } = require("ethers");


const senders = ["0xf1547eb3fa3f4780e8ca1e1ab00b47de41b06d48",]


function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function main() {
    // Configuring the connection to an Ethereum node



    //const provider = new JsonRpcProvider(process.env.RPC_URL);
    const provider = new ethers.providers.JsonRpcProvider("https://mainnet.skalenodes.com/v1/green-giddy-denebola");

    const PRIVATE_KEY = process.env.PRIVATE_KEY;





    var DISTRIBUTION_VALUE = 0

    DISTRIBUTION_VALUE = ethers.utils.parseUnits("0.01".toString(), 18);

    //   console.log('DISTRIBUTION_VALUEDISTRIBUTION_VALUE');
    //  console.log(DISTRIBUTION_VALUE);
    const wallet = new ethers.Wallet(PRIVATE_KEY, provider);




    for (let i = 0; i < senders.length; i++) {
        const sender = senders[i];
        console.log(sender);
        await wallet.sendTransaction({
            to: sender,
            value: DISTRIBUTION_VALUE
        });
        await sleep(5000)


    }




}
require("dotenv").config();
main();