// frontend/components/BuySellComponent.js
import React, { useState } from 'react';
import { ethers } from 'ethers';
import { signer } from '../utils/ethers';
import ContractABI from '../abi/Fractls.json';

const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;

const BuySellComponent = () => {
  const [tokenId, setTokenId] = useState('');
  const [buyerAddress, setBuyerAddress] = useState('');

  // Function to handle transferring NFTs
  const handleTransfer = async () => {
    const contract = new ethers.Contract(contractAddress, ContractABI.abi, signer);
    try {
      const tx = await contract['safeTransferFrom(address,address,uint256)'](await signer.getAddress(), buyerAddress, tokenId);
      await tx.wait();
      alert(`Token ID ${tokenId} transferred to ${buyerAddress}`);
    } catch (error) {
      console.error('Error transferring token:', error);
    }
  };

  return (
    <div>
      <h2>Buy/Sell NFTs</h2>
      <input type="text" placeholder="Token ID" value={tokenId} onChange={(e) => setTokenId(e.target.value)} />
      <input type="text" placeholder="Buyer Address" value={buyerAddress} onChange={(e) => setBuyerAddress(e.target.value)} />
      <button onClick={handleTransfer}>Transfer</button>
    </div>
  );
};

export default BuySellComponent;
