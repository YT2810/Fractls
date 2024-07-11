// scripts/mint.js

require("dotenv").config();
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
  const { abi } = JSON.parse(fs.readFileSync(contractPath, 'utf8'));

  // Define the deployed contract address
  const contractAddress = "0x6dFDE0460AE4701f00E891E161FC033f4bbaaF58"; // Replace with actual deployed contract address

  // Create a contract instance
  const contract = new ethers.Contract(contractAddress, abi, wallet);

  // Define the URI of the original token metadata and fraction tokens metadata
  const originalTokenURI = "ipfs://original_token_uri"; // Replace with actual IPFS URI
  const fractionTokenURIs = [
    "ipfs://fraction_token_uri_1", // Replace with actual IPFS URIs
    "ipfs://fraction_token_uri_2",
    "ipfs://fraction_token_uri_3",
    "ipfs://fraction_token_uri_4",
    "ipfs://fraction_token_uri_5",
    "ipfs://fraction_token_uri_6",
    "ipfs://fraction_token_uri_7",
    "ipfs://fraction_token_uri_8",
    "ipfs://fraction_token_uri_9"
  ];

  console.log("Minting original and fractional NFTs...");
  // Call the createCollectible function of the contract to mint the NFTs
  const tx = await contract.createCollectible(originalTokenURI, fractionTokenURIs);
  await tx.wait();

  console.log("NFTs minted successfully.");
}

// Execute the main function and handle errors
main().catch((error) => {
  console.error(error);
  process.exit(1);
});
