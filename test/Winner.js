const { ethers } = require("hardhat");
const { loadFixture } = require('@nomicfoundation/hardhat-network-helpers');
const { expect } = require('chai');

const CONTRACT_ABI = [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"","type":"address"}],"name":"Winner","type":"event"},{"inputs":[],"name":"attempt","outputs":[],"stateMutability":"nonpayable","type":"function"}]
const CONTRACT_BYTES = "608060405234801561001057600080fd5b506101f0806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063732b7a8d14610030575b600080fd5b61003861003a565b005b3273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16036100a8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161009f9061013e565b60405180910390fd5b7f745c90b656b4aafe296c8ca35aeacfe56cb96c90e1d320e5da643fff1051b6c0336040516100d7919061019f565b60405180910390a1565b600082825260208201905092915050565b7f6d73672e73656e64657220697320657175616c20746f2074782e6f726967696e600082015250565b60006101286020836100e1565b9150610133826100f2565b602082019050919050565b600060208201905081810360008301526101578161011b565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006101898261015e565b9050919050565b6101998161017e565b82525050565b60006020820190506101b46000830184610190565b9291505056fea26469706673582212204abe72145fd3b231a2ffa1767fbf00b95015f26e82c1b5b9c78d447fceb8929a64736f6c63430008110033"

describe("Emit Winner test", function() {
  const deploy = async () => {
    const signer = await ethers.getSigner();
    console.log('Signer address: ', signer.address)
  
    const Winner = await ethers.getContractFactory("Winner")
    const winner = await Winner.deploy()

    const Contract = await ethers.getContractFactory(CONTRACT_ABI, CONTRACT_BYTES)
    const contract = await Contract.deploy()
  
    return { winner, signer, contract }
  }

  it("Should deploy winner correctly", async () => {
    const { winner, signer } = await loadFixture(deploy);
    
    expect(await winner.deployTransaction.from).to.equal(signer.address);
  })

  it("Should deploy contract correctly", async () => {
    const { contract, signer } = await loadFixture(deploy);
    
    expect(await contract.deployTransaction.from).to.equal(signer.address);
  })

  it("Should emit winner", async function () {
    const {winner, contract } = await loadFixture(deploy);

    await expect(winner.emitWinner(contract.address))
      .to.emit(contract, "Winner")
      .withArgs(winner.address)
  })
})