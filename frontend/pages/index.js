import { useEffect, useState } from 'react';
import web3 from '../utils/web3';

const Home = () => {
  const [account, setAccount] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadAccount = async () => {
      try {
        const accounts = await web3.eth.getAccounts();
        if (accounts.length > 0) {
          setAccount(accounts[0]);
        } else {
          setError('No account connected');
        }
      } catch (err) {
        setError('Error fetching accounts');
        console.log('Error fetching accounts:', err);
      }
    };

    if (web3) {
      loadAccount();
    }
  }, []);

  return (
    <div>
      {account ? (
        <span>Connected with {account}</span>
      ) : (
        <>
          <button onClick={() => window.ethereum.request({ method: 'eth_requestAccounts' })}>Connect to MetaMask</button>
          {error && <p>{error}</p>}
        </>
      )}
    </div>
  );
};

export default Home;
