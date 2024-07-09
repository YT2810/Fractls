
# Fractls

Fractls is a decentralized application for creating and trading fractionalized NFTs with a puzzle-like gaming interface. This project is developed as part of a bootcamp and is open source.

## Getting Started

### Prerequisites
- Node.js
- MongoDB
- Infura API key

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/YT2810/Fractls.git
   cd Fractls
   ```

2. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root folder and add the following:
   ```plaintext
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   NEXT_PUBLIC_INFURA_PROJECT_ID=your_infura_project_id
   PRIVATE_KEY=your_wallet_private_key
   ```

4. Initialize the frontend project:
   ```bash
   cd frontend
   npx create-next-app@latest .
   ```
   - Select "no" for all options during the setup process.

5. Install frontend dependencies:
   ```bash
   npm install web3
   ```

### Usage

1. Start the backend server:
   ```bash
   cd backend
   node server.js
   ```

2. Start the frontend server:
   ```bash
   cd ../frontend
   npm run dev
   ```

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License.
