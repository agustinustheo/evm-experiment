import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-ignition-ethers";

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
    mandalaTestnet: {
      url: "https://mlg1.mandalachain.io",
      accounts: [process.env.PRIVATE_KEY!],
      gas: 5500000,
    },
  },
  etherscan: {
    apiKey: {
      mandalaTestnet: "any-api-key-value",
    },
    customChains: [
      {
        network: "mandalaTestnet",
        chainId: 6025,
        urls: {
          apiURL: "https://niskala.mandalachain.io/api",
          browserURL: "https://niskala.mandalachain.io/",
        },
      },
    ],
  },
};

export default config;
