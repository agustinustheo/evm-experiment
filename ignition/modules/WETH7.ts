// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

// npx hardhat ignition deploy ignition/modules/WETH7.ts --network mandalaTestnet

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const WETH7Module = buildModule("WETH7Module", (m) => {
  // Deploy WETH7
  const weth7 = m.contract("WETH9_V7");

  return { weth7 };
});

export default WETH7Module;
