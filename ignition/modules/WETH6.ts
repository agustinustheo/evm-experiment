// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

// npx hardhat ignition deploy ignition/modules/WETH6.ts --network mandalaTestnet

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const WETH6Module = buildModule("WETH6Module", (m) => {
  // Deploy WETH6
  const weth6 = m.contract("WETH9_V6");

  return { weth6 };
});

export default WETH6Module;
