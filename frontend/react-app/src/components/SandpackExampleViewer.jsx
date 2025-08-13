import React, { useState } from "react";
import { Sandpack } from "@codesandbox/sandpack-react";

const connectWalletSource = `
import { useState } from 'react';

export default function ConnectWallet() {
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
`;

const basicERC20Source = `
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';

const ERC20_ABI = [
  "function balanceOf(address) view returns (uint256)"
];

const tokenAddress = '0x...'; // ERC20 Contract Address

export default function BasicERC20() {
  const [balance, setBalance] = useState(null);
  const [noWallet, setNoWallet] = useState(false);

  useEffect(() => {
    async function fetchBalance() {
      if (!window.ethereum) {
        setNoWallet(true);
        return;
      }
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(tokenAddress, ERC20_ABI, provider);
      const [account] = await provider.send('eth_requestAccounts', []);
      const userBalance = await contract.balanceOf(account);
      setBalance(ethers.utils.formatUnits(userBalance, 18));  // Assuming 18 decimals for ERC20
    }
    fetchBalance();
  }, []);

  if (noWallet) {
    return <div style={{color: 'red', fontWeight: 'bold'}}>Bitte öffne dieses Beispiel in einer echten DApp-Umgebung mit MetaMask!</div>;
  }

  return (
    <div>
      <h3>ERC20 Token Balance:</h3>
      <p>{balance ? balance : "Loading..."}</p>
    </div>
  );
}
`;

const EXAMPLES = {
  "🔗 Connect Wallet": {
    "/App.js": {
      code: connectWalletSource
    },
    "/ConnectWallet.js": {
      code: connectWalletSource
    }
  },
  "💰 Basic ERC20": {
    "/App.js": {
      code: basicERC20Source
    },
    "/BasicERC20.js": {
      code: basicERC20Source
    }
  }
};

export default function SandpackExampleViewer() {
  const [selected, setSelected] = useState("🔗 Connect Wallet");

  return (
    <div className="p-4">
      <label className="block mb-2 font-semibold">Beispiel wählen:</label>
      <select
        className="mb-4 p-2 rounded border"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        {Object.keys(EXAMPLES).map((label) => (
          <option key={label} value={label}>
            {label}
          </option>
        ))}
      </select>

      <Sandpack
        template="react"
        files={EXAMPLES[selected]}
        options={{ showTabs: true, showConsole: true, showNavigator: true }}
        customSetup={{
          dependencies: {
            ethers: "^6.15.0"
          }
        }}
      />
    </div>
  );
}
