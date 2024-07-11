import { ethers } from 'ethers';

let provider;
let signer;

if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
  // We are in the browser and MetaMask is running.
  window.ethereum.request({ method: 'eth_requestAccounts' })
    .then(accounts => {
      console.log('Connected:', accounts[0]);
      provider = new ethers.BrowserProvider(window.ethereum);
      signer = provider.getSigner();
    })
    .catch(err => console.error(err));
} else {
  // We are on the server *OR* MetaMask is not running.
  const providerUrl = `https://sepolia.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_PROJECT_ID}`;
  provider = new ethers.JsonRpcProvider(providerUrl);
  // No signer on the server side, as we cannot sign transactions without a connected wallet.
}

export { provider, signer };
