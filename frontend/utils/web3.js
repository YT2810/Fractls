import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
  // We are in the browser and MetaMask is running.
  window.ethereum.request({ method: 'eth_requestAccounts' })
    .then(accounts => {
      console.log('Connected:', accounts[0]);
    })
    .catch(err => console.error(err));
  web3 = new Web3(window.ethereum);
} else {
  // We are on the server *OR* MetaMask is not running.
  const providerUrl = `https://sepolia.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_PROJECT_ID}`;
  const provider = new Web3.providers.HttpProvider(providerUrl);
  web3 = new Web3(provider);
}

export default web3;
