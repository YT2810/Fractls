// frontend/components/Marketplace.js
import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { provider } from '../utils/ethers';
import ContractABI from '../abi/Fractls.json';

const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;

const Marketplace = () => {
  const [tokens, setTokens] = useState([]);
  const [randomPrices, setRandomPrices] = useState({});

  useEffect(() => {
    const fetchTokens = async () => {
      const contract = new ethers.Contract(contractAddress, ContractABI.abi, provider);
      const totalSupply = await contract.tokenCounter();
      const tokenList = [];
      for (let i = 0; i < totalSupply; i++) {
        const tokenId = i;
        const tokenURI = await contract.tokenURI(tokenId);
        tokenList.push({ tokenId, tokenURI });
      }
      setTokens(tokenList);

      // Assign random prices
      const prices = {};
      tokenList.forEach((token) => {
        prices[token.tokenId] = (Math.random() * 0.1).toFixed(2); // Random price between 0 and 0.1 ETH
      });
      setRandomPrices(prices);
    };

    fetchTokens();
  }, []);

  return (
    <div>
      <h2>Marketplace</h2>
      {tokens.length > 0 ? (
        tokens.map((token) => (
          <div key={token.tokenId}>
            <p>Token ID: {token.tokenId}</p>
            <p>Token URI: {token.tokenURI}</p>
            <img src={token.tokenURI} alt={`Token ${token.tokenId}`} style={{ width: '200px', height: '200px' }} />
            <p>Price: {randomPrices[token.tokenId]} ETH</p>
          </div>
        ))
      ) : (
        <p>No tokens available</p>
      )}
    </div>
  );
};

export default Marketplace;
