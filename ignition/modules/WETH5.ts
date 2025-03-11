// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

// npx hardhat ignition deploy ignition/modules/WETH5.ts --network mandalaTestnet

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const WETH5Module = buildModule("WETH5Module", (m) => {
  // Deploy WETH5
  const weth5 = m.contract("WETH9_V5");

  return { weth5 };
});

export default WETH5Module;
