const Web3 = require("web3");

async function main() {
    // Configuring the connection to an Ethereum node
    const network = process.env.ETHEREUM_NETWORK;
    const web3 = new Web3(
        new Web3.providers.HttpProvider(
            `https://${network}.infura.io/v3/${process.env.INFURA_PROJECT_ID}`
        )
    );

    var fs = require('fs');
    var jsonFile = "ct_abi.json";

    var parsed=JSON.parse(fs.readFileSync(jsonFile));
    var abi = parsed.abi;

    const tokenAddress = "0x326C977E6efc84E512bB9C30f76E30c160eD06FB";
    const toAddress = "0xF1B792820b52e6503208CAb98ec0B7b89ac64D6A"

    // Creating a signing account from a private key
    const signer = web3.eth.accounts.privateKeyToAccount(
        process.env.SIGNER_PRIVATE_KEY
    );
    web3.eth.accounts.wallet.add(signer);

    const contract = new web3.eth.Contract(abi, tokenAddress, { from: signer.address } )
    let amount = web3.utils.toHex(web3.utils.toWei("1"));

    contract.methods.transfer(toAddress, amount).send({
        from: signer.address,
        gas: 5000000
    }).then(console.log).catch(console.error);

 }

require("dotenv").config();
main();