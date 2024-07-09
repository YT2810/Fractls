// frontend/pages/index.js
import { useEffect, useState } from 'react';
import Web3 from 'web3';

const Home = () => {
  const [account, setAccount] = useState(null);

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.request({ method: 'eth_requestAccounts' })
        .then(accounts => setAccount(accounts[0]))
        .catch(err => console.error(err));
    }
  }, []);

  return (
    <div>
      <h1>Welcome to Fractls</h1>
      {account ? (
        <p>Connected with address: {account}</p>
      ) : (
        <p>Please connect your wallet</p>
      )}
    </div>
  );
};

export default Home;
