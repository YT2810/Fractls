
# Fractls DApp

## Overview

Fractls is a decentralized application (DApp) for creating and managing fractionalized NFTs. The DApp allows artists to upload an image, set a price, and mint an original NFT along with 9 fractionalized NFTs. Users can buy and trade these fractional NFTs, and the owner of all 9 fractions can claim the original NFT.

## Project Structure

```
Fractls/
├── backend/
│   ├── .env
│   ├── hardhat.config.js
│   ├── contracts/
│   │   └── Fractls.sol
│   ├── test/
│   │   └── FractlsTest.js
│   ├── scripts/
│   │   └── deploy.js
│   └── artifacts/
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
├── .gitignore
├── README.md
└── .env (opcional)
```

## Prerequisites

- Node.js and npm: Install from [nodejs.org](https://nodejs.org/)
- Infura or Alchemy API key
- MetaMask extension for connecting to Ethereum

## Setup

### Backend

1. **Install Dependencies:**

   ```bash
   cd backend
   npm install
   ```

2. **Configure Environment Variables:**

   Create a `.env` file in the `backend` directory and add the following variables:

   ```plaintext
   INFURA_PROJECT_ID=your_infura_project_id
   PRIVATE_KEY=your_wallet_private_key
   ```

3. **Compile Contracts:**

   ```bash
   npx hardhat compile
   ```

4. **Deploy Contracts:**

   ```bash
   npx hardhat run scripts/deploy.js --network sepolia
   ```

5. **Update the Frontend with Contract Address:**

   Add the deployed contract address to the `.env` file in the `frontend` directory:

   ```plaintext
   REACT_APP_CONTRACT_ADDRESS=deployed_contract_address
   ```

### Frontend

1. **Install Dependencies:**

   ```bash
   cd frontend
   npm install
   ```

2. **Configure Environment Variables:**

   Create a `.env` file in the `frontend` directory and add the following variables:

   ```plaintext
   REACT_APP_INFURA_PROJECT_ID=your_infura_project_id
   REACT_APP_CONTRACT_ADDRESS=deployed_contract_address
   ```

3. **Run the Frontend:**

   ```bash
   npm start
   ```

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
