
# Fractls DApp

## Overview

Fractls is a decentralized application (DApp) designed to create and manage fractionalized NFTs (Non-Fungible Tokens). The platform allows artists to upload images, set prices, and mint an original NFT along with 9 fractionalized NFTs. Users can buy, trade, and assemble these fractional NFTs. The owner of all 9 fractions can claim the original NFT, adding a unique puzzle-like gaming interface to the NFT experience.

Fractls aims to bridge the gap between beginner artists and the current NFT space, providing a platform where everyone gets an equal opportunity.

## Tech Stack

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose
  - Pinata SDK
  - Multer
  - Jimp
  - Axios
  - Hardhat (for Ethereum development)
  - OpenZeppelin Contracts

- **Frontend:**
  - React.js
  - Web3.js
  - MetaMask

- **Smart Contracts:**
  - Solidity
  - Hardhat
  - OpenZeppelin

## Project Structure

\`\`\`plaintext
Fractls/
├── backend/
│   ├── .env
│   ├── hardhat.config.js
│   ├── contracts/
│   │   └── Fractls.sol
│   ├── scripts/
│   │   └── deploy.js
│   ├── artifacts/
│   ├── routes/
│   │   └── upload.js
│   ├── services/
│   │   ├── uploadService.js
│   │   └── pinataService.js
│   ├── models/
│   │   ├── imageModel.js
│   │   └── batchModel.js
│   ├── uploads/
│   ├── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── config/
│   │       ├── contractConfig.js
│   │       └── pinataConfig.js
│   ├── .env
│   ├── package.json
│   └── node_modules/
├── test/
│   ├── backend/
│   │   └── someTestFile.js
│   ├── frontend/
│   │   └── someTestFile.js
├── .gitignore
├── README.md
└── .env (optional)
\`\`\`

## Prerequisites

- Node.js and npm: Install from [nodejs.org](https://nodejs.org/)
- MongoDB: Install from [mongodb.com](https://www.mongodb.com/)
- Infura or Alchemy API key (for Ethereum network connection)
- MetaMask extension for connecting to Ethereum

## Setup

### Backend

1. **Install Dependencies:**

   \`\`\`bash
   cd backend
   npm install
   \`\`\`

2. **Configure Environment Variables:**

   Create a `.env` file in the `backend` directory and add the following variables:

   \`\`\`plaintext
   INFURA_PROJECT_ID=your_infura_project_id
   PRIVATE_KEY=your_wallet_private_key
   PINATA_API_KEY=your_pinata_api_key
   PINATA_SECRET_API_KEY=your_pinata_secret_api_key
   MONGODB_URI=mongodb://localhost:27017/your_database_name
   \`\`\`

3. **Compile Contracts:**

   \`\`\`bash
   npx hardhat compile
   \`\`\`

4. **Deploy Contracts:**

   \`\`\`bash
   npx hardhat run scripts/deploy.js --network sepolia
   \`\`\`

5. **Start the Backend Server:**

   \`\`\`bash
   npm start
   \`\`\`

### Frontend

1. **Install Dependencies:**

   \`\`\`bash
   cd frontend
   npm install
   \`\`\`

2. **Configure Environment Variables:**

   Create a `.env` file in the `frontend` directory and add the following variables:

   \`\`\`plaintext
   REACT_APP_INFURA_PROJECT_ID=your_infura_project_id
   REACT_APP_CONTRACT_ADDRESS=deployed_contract_address
   \`\`\`

3. **Run the Frontend:**

   \`\`\`bash
   npm start
   \`\`\`

## Usage

1. **Connect Wallet:**

   Open the application in your browser and connect your MetaMask wallet.

2. **Upload Image and Set Price:**

   Use the form to upload an image and set the total price for the original and fractional NFTs.

3. **Mint NFTs:**

   Mint the original and fractional NFTs.

4. **Trade and Claim NFTs:**

   Trade fractional NFTs on the marketplace and claim the original NFT when you own all 9 fractions.

## Contributing

Feel free to fork this repository and make contributions. Pull requests are welcome.

## License

This project is licensed under the MIT License.
