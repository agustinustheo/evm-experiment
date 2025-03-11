// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

// npx hardhat ignition deploy ignition/modules/WETH8.ts --network mandalaTestnet

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const WETH8Module = buildModule("WETH8Module", (m) => {
  // Deploy WETH8
  const weth8 = m.contract("WETH9_V8");

  return { weth8 };
});

export default WETH8Module;
