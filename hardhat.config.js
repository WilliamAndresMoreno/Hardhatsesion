/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("@nomiclabs/hardhat-waffle");
module.exports = {
  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    goerli: {
      url: "http://127.0.0.1:8545",
      accounts: ["0x5c2ec6a5fa6c58ae2670b4005e72c2417c3d10b180dd8656ad07d25199ae0510"]
    }
  },
  solidity: {
    compilers: [
      {
        version: "0.8.0",
      },
      {
        version: "0.5.15",
      }
    ],
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  }
};