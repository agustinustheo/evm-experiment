# EVM Experiment

## Overview

This project demonstrates the deployment of WETH (Wrapped Ether) contracts across multiple Solidity versions, targeting the Berlin hardfork (EIP-2070). It showcases how to implement and deploy the same contract functionality across different Solidity compiler versions (0.4.26 through 0.8.4).

## Project Structure

```
├── contracts/
│   ├── WETH_v4.sol    # Solidity 0.4.26 implementation
│   ├── WETH_v5.sol    # Solidity 0.5.17 implementation
│   ├── WETH_v6.sol    # Solidity 0.6.12 implementation
│   ├── WETH_v7.sol    # Solidity 0.7.6 implementation
│   └── WETH_v8.sol    # Solidity 0.8.4 implementation
├── scripts/
│   └── deploy.ts      # Deployment script for all contracts
├── hardhat.config.ts  # Hardhat configuration with multi-compiler setup
└── package.json       # Project dependencies
```

## Prerequisites

- Node.js (v14 or later)
- pnpm package manager

## Installation

```bash
# Clone the repository
git clone https://github.com/agustinustheo/evm-experiment.git
cd evm-experiment

# Install dependencies
pnpm install
```

## Configuration

Create a `.env` file in the project root with the following variables:

```
PRIVATE_KEY=your_private_key_here
```

## Usage

### Compile Contracts

```bash
pnpm hardhat compile
```

### Deploy Contracts

```bash
pnpm hardhat run scripts/deploy.ts --network niskalaTestnet
```

## Deployment Results

The latest deployment results:

```
Deploying WETH contracts...
Deploying with account: 0xe4701a9D484AB8E8DF153d43563e40Cff5F675BC
Using gas price: 0.6 gwei
WETH9_V4 deployed to: 0x64ef1D70682B0E9Eb26737Ac94d41d1df00D35a1
WETH9_V5 deployed to: 0xe2F269C5379F80122A6c271CB079704d206ef5E6
WETH9_V6 deployed to: 0x331c87D43B5E4D04C6ede5B34ED553C536Ac074f
WETH9_V7 deployed to: 0xF7e4839b142b92f717956e7909099F0b01FF6147
WETH9_V8 deployed to: 0xDA59989291b4a86d24Ee85C40724ECc235EF53e4
```

## Technical Details

### Solidity Versions

This project uses multiple Solidity compiler versions to demonstrate compatibility:

- 0.4.26 (Pre-Berlin)
- 0.5.17 (Pre-Berlin)
- 0.6.12 (Pre-Berlin)
- 0.7.6 (Berlin-compatible)
- 0.8.4 (Post-Berlin)

### Hardhat Configuration

The project uses Hardhat 2.3.0 with the following plugins:
- @nomiclabs/hardhat-ethers
- @nomiclabs/hardhat-waffle

### Network Configuration

The project is configured to deploy to the Niskala Testnet.