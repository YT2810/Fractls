require("dotenv").config(); // Load environment variables from .env file
const { ethers } = require("ethers");
const fs = require("fs");
const path = require("path");

async function main() {
  // Configure the connection to an Ethereum node
  const network = "sepolia"; // Ethereum network you are using
  const provider = new ethers.providers.InfuraProvider(network, process.env.INFURA_PROJECT_ID);

  // Create a signing account from a private key
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

  // Read the ABI and bytecode from the compiled contract
  const contractPath = path.resolve(__dirname, '../artifacts/contracts/Fractls.sol/Fractls.json');
  const { abi, bytecode } = JSON.parse(fs.readFileSync(contractPath, 'utf8'));

  // Create a ContractFactory and deploy the contract
  const contractFactory = new ethers.ContractFactory(abi, bytecode, wallet);
  console.log("Deploying contract...");

  const contract = await contractFactory.deploy(process.env.INTERMEDIARY_WALLET);
  await contract.deployed();

  // The contract is now deployed on the chain
  console.log(`Contract deployed at address: ${contract.address}`);
}

// Execute the main function and handle errors
main().catch((error) => {
  console.error(error);
  process.exit(1);
});
