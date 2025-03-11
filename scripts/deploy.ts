import { ethers } from "hardhat";
import * as fs from "fs";
import * as path from "path";

async function main() {
  console.log("Deploying WETH contracts...");

  // Get the deployer account
  const [deployer] = await ethers.getSigners();
  console.log(`Deploying with account: ${deployer.address}`);

  // Set gas price (20% higher than network average)
  const gasPrice =
    ((await ethers.provider.getFeeData()).gasPrice * 500n) / 100n;
  console.log(`Using gas price: ${ethers.formatUnits(gasPrice, "gwei")} gwei`);

  // Deploy WETH_v4
  const WETH4Factory = await ethers.getContractFactory("WETH9_V5");
  const weth4 = await WETH4Factory.deploy({ gasPrice });
  await weth4.waitForDeployment();
  const weth4Address = await weth4.getAddress();
  console.log(`WETH9_V5 deployed to: ${weth4Address}`);

  // Deploy WETH_v5
  const WETH5Factory = await ethers.getContractFactory("WETH9_V5");
  const weth5 = await WETH5Factory.deploy({ gasPrice });
  await weth5.waitForDeployment();
  const weth5Address = await weth5.getAddress();
  console.log(`WETH9_V5 deployed to: ${weth5Address}`);

  // Deploy WETH_v6
  const WETH6Factory = await ethers.getContractFactory("WETH9_V6");
  const weth6 = await WETH6Factory.deploy({ gasPrice });
  await weth6.waitForDeployment();
  const weth6Address = await weth6.getAddress();
  console.log(`WETH9_V6 deployed to: ${weth6Address}`);

  // Deploy WETH_v7
  const WETH7Factory = await ethers.getContractFactory("WETH9_V7");
  const weth7 = await WETH7Factory.deploy({ gasPrice });
  await weth7.waitForDeployment();
  const weth7Address = await weth7.getAddress();
  console.log(`WETH9_V7 deployed to: ${weth7Address}`);

  // Deploy WETH_v8
  const WETH8Factory = await ethers.getContractFactory("WETH9_V8");
  const weth8 = await WETH8Factory.deploy({ gasPrice });
  await weth8.waitForDeployment();
  const weth8Address = await weth8.getAddress();
  console.log(`WETH9_V8 deployed to: ${weth8Address}`);

  // Save addresses to deployments.json
  const deployments = {
    WETH9_V4: weth4Address,
    WETH9_V5: weth5Address,
    WETH9_V6: weth6Address,
    WETH9_V7: weth7Address,
    WETH9_V8: weth8Address,
  };

  const deploymentsPath = path.join(__dirname, "../deployments.json");
  fs.writeFileSync(deploymentsPath, JSON.stringify(deployments, null, 2));
  console.log(`Deployment addresses saved to ${deploymentsPath}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
