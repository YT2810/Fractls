import React, { useState } from 'react';
import { ethers } from 'ethers';
import { signer } from '../utils/ethers';
import ContractABI from '../abi/Fractls.json';

const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;

const ClaimNFT = () => {
  const [claimed, setClaimed] = useState(false);
  const [fractionIds, setFractionIds] = useState('');

  const handleClaim = async () => {
    const contract = new ethers.Contract(contractAddress, ContractABI.abi, signer);
    const ids = fractionIds.split(',').map(id => id.trim());
    const tx = await contract.claimOriginal(ids);
    await tx.wait();
    setClaimed(true);
  };

  return (
    <div>
      <h2>Claim Original NFT</h2>
      <input 
        type="text" 
        placeholder="Fraction IDs (comma separated)" 
        value={fractionIds} 
        onChange={(e) => setFractionIds(e.target.value)} 
      />
      <button onClick={handleClaim} disabled={claimed}>Claim</button>
      {claimed && <p>Original NFT claimed successfully!</p>}
    </div>
  );
};

export default ClaimNFT;
