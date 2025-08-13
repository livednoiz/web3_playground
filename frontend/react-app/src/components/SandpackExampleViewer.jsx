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

  useEffect(() => {
    async function fetchBalance() {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contract = new ethers.Contract(tokenAddress, ERC20_ABI, provider);
        const [account] = await provider.send('eth_requestAccounts', []);
        const userBalance = await contract.balanceOf(account);
        setBalance(ethers.utils.formatUnits(userBalance, 18));  // Assuming 18 decimals for ERC20
      }
    }

    fetchBalance();
  }, []);

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
      />
    </div>
  );
}
// This code sets up a simple React application that includes two components:
// 1. `ConnectWallet`: A button to connect a wallet using MetaMask.
// 2. `BasicERC20`: A component that fetches and displays the balance of an ERC20 token for the connected wallet address.
//
// The `SandpackExampleViewer` component allows users to select between these two examples
// and view them in a live code editor using Sandpack.
// The `EXAMPLES` object contains the code for each example, which is passed to the Sandpack component.
// The `Sandpack` component is a live code editor that allows users to run and modify the code in real-time.
// The `useState` hook is used to manage the selected example, and the `select` element allows users to choose between the examples.
// The `Sandpack` component is imported from the `@codesandbox/sandpack-react` package,
// which provides a simple way to create interactive code examples in React applications.
// The `files` property of the `Sandpack` component is set to the selected example's code,
// and the `options` property is used to customize the appearance of the code editor.
// The `template` property is set to "react" to indicate that the examples are written in React.
// The `showTabs`, `showConsole`, and `showNavigator` options are set to true to display the code editor tabs,
// console, and file navigator, respectively.
// This code is a simple example of how to use Sandpack to create interactive code examples in a React application.
// It allows users to select between different examples and view them in a live code editor.
// The `Sandpack` component is a powerful tool for creating interactive code examples,
// and it can be customized further to suit the needs of the application.
// The `SandpackExampleViewer` component can be used in a larger React application
// to provide users with a way to explore different code examples and learn about React and web3 development.
// The `Sandpack` component is a powerful tool for creating interactive code examples,
// and it can be customized further to suit the needs of the application.
// The `SandpackExampleViewer` component can be used in a larger React application
// to provide users with a way to explore different code examples and learn about React and web3 development.