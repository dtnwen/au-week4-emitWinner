require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()

const { GOERLI_URL, PRIVATE_KEY } = process.env

module.exports = {
  defaultNetwork: "goerli",
  networks: {
    goerli: {
      url: GOERLI_URL,
      accounts: [PRIVATE_KEY]
    }
  },

  solidity: "0.8.18",
};
