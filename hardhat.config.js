require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */




const REACT_APP_PRIVATE_KEY ="0x44b9141a608f27e52fee41790ddc10b4af2e7d51961cf85e07364da145b5b605";
const etherscanAPIKey = "WYWFYT8BAUPU98HKUAQHQPN1594RXEMQ7M";
module.exports = {
  defaultNetwork: "goerli",
  networks: {
    hardhat: { },
    goerli: {
      url: "https://burned-cool-dew.ethereum-goerli.discover.quiknode.pro/c0c4ed01147731b981aaa6fcc34043f55780ee60/",
      accounts: [REACT_APP_PRIVATE_KEY]
    },
  },
  etherscan: { 
    apiKey: etherscanAPIKey,
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 100
      }
    }
  },

}
