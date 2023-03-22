require("@nomicfoundation/hardhat-toolbox");

describe("Winner contract", function () {
  it("should emit winner address"), async function () {
    const Winner = await ethers.getContractFactory("Winner");

    const hardhatWinner = await Winner.deploy();

    const winner = await hardhatWinner.emitWinner("0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502");

    console.log(winner)
  }
})