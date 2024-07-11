import React, { useState } from 'react';
import { ethers } from 'ethers';
import { provider, signer } from '../utils/ethers';
import ContractABI from '../abi/Fractls.json';
import axios from 'axios';

const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;

const MintNFTs = () => {
  const [status, setStatus] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [price, setPrice] = useState('');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleMint = async () => {
    if (!image || !price) {
      alert('Please provide an image and a price.');
      return;
    }

    setStatus('Minting in progress...');

    try {
      const contract = new ethers.Contract(contractAddress, ContractABI.abi, signer);
      const imageURI = await uploadImageToIPFS(image);
      const fractionTokenURIs = Array(9).fill(imageURI);
      const tx = await contract.createCollectible(imageURI, fractionTokenURIs);
      await tx.wait();

      setStatus('Minting completed successfully.');
    } catch (error) {
      console.error('Error during minting:', error);
      setStatus('Minting failed. Please check the console for details.');
    }
  };

  return (
    <div>
      <h2>Mint NFTs</h2>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {imagePreview && <img src={imagePreview} alt="Preview" style={{ width: '200px', height: '200px' }} />}
      <input type="text" placeholder="Set price in ETH" value={price} onChange={(e) => setPrice(e.target.value)} />
      <button onClick={handleMint}>Mint</button>
      <p>{status}</p>
    </div>
  );
};

const uploadImageToIPFS = async (image) => {
  const formData = new FormData();
  formData.append('file', image);
  try {
    const response = await axios.post('/api/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data.imageURI;
  } catch (error) {
    console.error('Error uploading image to IPFS:', error);
    throw new Error('Failed to upload image to IPFS');
  }
};

export default MintNFTs;
