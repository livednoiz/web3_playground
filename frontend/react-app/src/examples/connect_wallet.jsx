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
