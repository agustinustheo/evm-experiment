import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";

import "dotenv/config";

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      { version: "0.8.4" },
      { version: "0.7.6" },
      { version: "0.6.12" },
      { version: "0.5.17" },
      { version: "0.4.26" },
    ],
    overrides: {
      "contracts/WETH_v8.sol": { version: "0.8.4" },
      "contracts/WETH_v7.sol": { version: "0.7.6" },
      "contracts/WETH_v6.sol": { version: "0.6.12" },
      "contracts/WETH_v5.sol": { version: "0.5.17" },
      "contracts/WETH_v4.sol": { version: "0.4.26" },
    },
  },
  networks: {
    niskalaTestnet: {
      url: "https://mlg2.mandalachain.io",
      accounts: [process.env.PRIVATE_KEY!],
      gas: 5500000,
    },
  },
  // Etherscan configuration removed for compatibility with Hardhat 2.3.0
  // Add back when using a compatible version of hardhat-etherscan
};

export default config;
