import React, { useState, useEffect } from 'react';
import { provider } from '../utils/ethers';

const ConnectWallet = () => {
  const [account, setAccount] = useState('');

  useEffect(() => {
    const connectWallet = async () => {
      if (provider) {
        const accounts = await provider.send("eth_requestAccounts", []);
        setAccount(accounts[0]);
      }
    };

    connectWallet();
  }, []);

  return (
    <div>
      <h2>Connect Wallet</h2>
      {account ? <p>Connected account: {account}</p> : <p>Please connect your wallet</p>}
    </div>
  );
};

export default ConnectWallet;
