const Web3 = require("web3");
const { ethers } = require("ethers");

const CystalDistr =  [{"inputs":[{"internalType":"contract CG_SKLAE_CRYS","name":"_crystalContract","type":"address"},{"internalType":"address","name":"_token","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"class_id","type":"uint8"}],"name":"CrystalMinted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"commonChance","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"crystalContract","outputs":[{"internalType":"contract CG_SKLAE_CRYS","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwnedNftsRanged","outputs":[{"internalType":"uint256[]","name":"tokensIds","type":"uint256[]"},{"internalType":"uint8[]","name":"classIds","type":"uint8[]"},{"internalType":"uint256","name":"itemsCount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRandom","outputs":[{"internalType":"bytes32","name":"addr","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"legendaryChance","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mineCrystalFree","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mineCrystalPay","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mintCooldownPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paidBonusTimes","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract CG_SKLAE_CRYS","name":"_crystalContract","type":"address"}],"name":"setConfigCrystalContract","outputs":[{"internalType":"bool","name":"result","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint32","name":"_commonChance","type":"uint32"},{"internalType":"uint32","name":"_legendaryChance","type":"uint32"},{"internalType":"uint256","name":"_mintPrice","type":"uint256"},{"internalType":"uint8","name":"_paidBonusTimes","type":"uint8"},{"internalType":"uint256","name":"_mintCooldownPeriod","type":"uint256"}],"name":"setMiscConfig","outputs":[{"internalType":"bool","name":"result","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]




async function main() {
    // Configuring the connection to an Ethereum node



    //const provider = new JsonRpcProvider(process.env.RPC_URL);
    const provider = new ethers.providers.JsonRpcProvider("https://mainnet.skalenodes.com/v1/green-giddy-denebola");

    const PRIVATE_KEY = process.env.PRIVATE_KEY;







    const signer  = new ethers.Wallet(PRIVATE_KEY, provider);

    const CONTRACT_ADDRESS = "0xE9d487B950A5075D8eaB084e2E04971340765b86"

    const contract = new ethers.Contract(
      CONTRACT_ADDRESS,
      CystalDistr,
      signer
    );





    // let estimate = await contract.estimateGas.mineCrystalFree()

    // let feeData = await  provider.getFeeData()
  

    const tx = await contract.mineCrystalFree();

    const transactionReceipt = await tx.wait();


    console.log('ttttxxxxxxxx');
    console.log(transactionReceipt);




}
require("dotenv").config();
main();