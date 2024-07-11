// scripts/buySell.js
const { ethers } = require("ethers");
require("dotenv").config();
const fs = require("fs");
const path = require("path");

async function main() {
    console.log("Transferring fraction tokens to buyer...");

    // Set up provider and wallet
    const provider = new ethers.providers.InfuraProvider("sepolia", process.env.INFURA_PROJECT_ID);
    const intermediaryWallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
    const buyerWallet = new ethers.Wallet(process.env.BUYER_PRIVATE_KEY, provider);

    // Load contract ABI and address
    const contractPath = path.resolve(__dirname, '../artifacts/contracts/Fractls.sol/Fractls.json');
    const contractJson = JSON.parse(fs.readFileSync(contractPath, 'utf8'));
    const contractAddress = "0x6dFDE0460AE4701f00E891E161FC033f4bbaaF58";
    const contract = new ethers.Contract(contractAddress, contractJson.abi, intermediaryWallet);

    // Transfer each fraction token to the buyer
    const fractionIds = [2, 3, 4, 5, 6, 7, 8, 9];  // Remaining fraction IDs
    for (let id of fractionIds) {
        console.log(`Transferring fraction token ID ${id} to buyer...`);

        // Check ownership of the token
        const owner = await contract.ownerOf(id);
        if (owner.toLowerCase() !== intermediaryWallet.address.toLowerCase()) {
            console.error(`Intermediary wallet does not own token ID ${id}. Current owner: ${owner}`);
            continue;
        }

        try {
            const tx = await contract['safeTransferFrom(address,address,uint256)'](
                intermediaryWallet.address,
                buyerWallet.address,
                id,
                { gasLimit: 300000 }  // Manually specify gas limit
            );
            await tx.wait();
            console.log(`Fraction token ID ${id} transferred to buyer: ${buyerWallet.address}`);
        } catch (error) {
            console.error(`Error transferring token ID ${id}:`, error);
        }
    }

    console.log("All fraction tokens transferred to buyer.");
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
