import React from 'react';
import ConnectWallet from '../components/ConnectWallet';
import MintNFTs from '../components/MintNFTs';
import Marketplace from '../components/Marketplace';
import ClaimNFT from '../components/ClaimNFT';
import BuySellComponent from '../components/BuySellComponent';

const HomePage = () => {
  const handleImageUpload = (imageURI) => {
    console.log('Image uploaded:', imageURI);
  };

  return (
    <div>
      <h1>Welcome to Fractls</h1>
      <ConnectWallet />
      <MintNFTs />
      <Marketplace />
      <ClaimNFT />
      <BuySellComponent />
    </div>
  );
};

export default HomePage;
