require('dotenv').config();
const { ethers } = require('hardhat');

const WINNER_ADDRESS = "0x197c8b0A31e45e7a68bd3B55401DEfccD5ED75d4"
const CONTRACT_ADDRESS = "0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502"

const contractABI = require("../artifacts/contracts/Winner.sol/Winner.json");

async function main() {
    const signer = await ethers.getSigners();

    const contract = await ethers.getContractAt(contractABI.abi, WINNER_ADDRESS, signer[0]);

    console.log("Emitting...")
    await contract.emitWinner(CONTRACT_ADDRESS);

    console.log("Emit successfully");
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });