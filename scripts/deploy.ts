import "@nomiclabs/hardhat-waffle";

// When using the hardhat-waffle plugin in v2.3.0, ethers is available on the hardhat runtime env
import * as hardhat from "hardhat";
import * as fs from "fs";
import * as path from "path";

async function main() {
  console.log("Deploying WETH contracts...");

  // Get the deployer account
  const [deployer] = await (hardhat as any).ethers.getSigners();
  console.log(`Deploying with account: ${deployer.address}`);

  // Set gas price (20% higher than network average)
  const gasPrice = await (hardhat as any).ethers.provider.getGasPrice();
  const adjustedGasPrice = gasPrice.mul(120).div(100); // 20% higher
  console.log(`Using gas price: ${(hardhat as any).ethers.utils.formatUnits(adjustedGasPrice, "gwei")} gwei`);

  // Deploy WETH_v4
  const WETH4Factory = await (hardhat as any).ethers.getContractFactory("WETH9_V5");
  const weth4 = await WETH4Factory.deploy({ gasPrice: adjustedGasPrice });
  await weth4.deployed();
  const weth4Address = weth4.address;
  console.log(`WETH9_V4 deployed to: ${weth4Address}`);

  // Deploy WETH_v5
  const WETH5Factory = await (hardhat as any).ethers.getContractFactory("WETH9_V5");
  const weth5 = await WETH5Factory.deploy({ gasPrice: adjustedGasPrice });
  await weth5.deployed();
  const weth5Address = weth5.address;
  console.log(`WETH9_V5 deployed to: ${weth5Address}`);

  // Deploy WETH_v6
  const WETH6Factory = await (hardhat as any).ethers.getContractFactory("WETH9_V6");
  const weth6 = await WETH6Factory.deploy({ gasPrice: adjustedGasPrice });
  await weth6.deployed();
  const weth6Address = weth6.address;
  console.log(`WETH9_V6 deployed to: ${weth6Address}`);

  // Deploy WETH_v7
  const WETH7Factory = await (hardhat as any).ethers.getContractFactory("WETH9_V7");
  const weth7 = await WETH7Factory.deploy({ gasPrice: adjustedGasPrice });
  await weth7.deployed();
  const weth7Address = weth7.address;
  console.log(`WETH9_V7 deployed to: ${weth7Address}`);

  // Deploy WETH_v8
  const WETH8Factory = await (hardhat as any).ethers.getContractFactory("WETH9_V8");
  const weth8 = await WETH8Factory.deploy({ gasPrice: adjustedGasPrice });
  await weth8.deployed();
  const weth8Address = weth8.address;
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
