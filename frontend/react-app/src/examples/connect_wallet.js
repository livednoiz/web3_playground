// playgrounds/sandpack/examples/connect_wallet.jsx

import { useState } from 'react';

function ConnectWallet() {
  const [address, setAddress] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setAddress(account);
    } else {
      alert("Please install MetaMask");
    }
  };

  return (
    <div>
      <button onClick={connectWallet}>Connect Wallet</button>
      {address && <p>Connected Account: {address}</p>}
    </div>
  );
}

export default ConnectWallet;
// This code provides a simple interface to connect a wallet using MetaMask.
// It uses the `eth_requestAccounts` method to prompt the user to connect their wallet.
// Once connected, it displays the connected account address.
// Make sure to run this code in a React environment with MetaMask installed.
// This code is for educational purposes and should be tested in a safe environment.
// Ensure you have MetaMask installed in your browser to test this code.
// This code is a simple example of how to connect a wallet using MetaMask.
// It prompts the user to connect their wallet and displays the connected account address.
// For production code, consider adding error handling and user feedback.
// This code is for educational purposes and should be tested in a safe environment.
// Ensure you have MetaMask installed in your browser to test this code.
// This code is a simple example of how to connect a wallet using MetaMask.
// It prompts the user to connect their wallet and displays the connected account address.
// For production code, consider adding error handling and user feedback.
// This code is for educational purposes and should be tested in a safe environment.