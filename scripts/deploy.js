async function main() {
  // using getSigners method instead of maual create signer with privatekey and provider
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account: ", deployer.address);

  const Winner = await ethers.getContractFactory("Winner");
  const winner = await Winner.deploy();

  await winner.deployed();

  console.log("Winner contract address: ", winner.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    })