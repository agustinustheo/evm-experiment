// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

// npx hardhat ignition deploy ignition/modules/WETH4.ts --network mandalaTestnet

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const WETH4Module = buildModule("WETH4Module", (m) => {
  // Deploy WETH4
  const weth4 = m.contract("WETH9_V4", [], {});

  return { weth4 };
});

export default WETH4Module;
