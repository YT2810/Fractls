// scripts/claim.js
const { ethers } = require("ethers");
require("dotenv").config();
const fs = require("fs");
const path = require("path");

async function main() {
    console.log("Claiming the original NFT...");

    // Set up provider and wallet
    const provider = new ethers.providers.InfuraProvider("sepolia", process.env.INFURA_PROJECT_ID);
    const wallet = new ethers.Wallet(process.env.BUYER_PRIVATE_KEY, provider);

    // Load contract ABI and address
    const contractPath = path.resolve(__dirname, '../artifacts/contracts/Fractls.sol/Fractls.json');
    const contractJson = JSON.parse(fs.readFileSync(contractPath, 'utf8'));
    const contractAddress = "0x6dFDE0460AE4701f00E891E161FC033f4bbaaF58";
    const contract = new ethers.Contract(contractAddress, contractJson.abi, wallet);

    // Claim the original NFT
    const fractionIds = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const tx = await contract.claimOriginal(fractionIds);
    await tx.wait();
    console.log("Original NFT claimed successfully.");
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
