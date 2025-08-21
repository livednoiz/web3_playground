// playgrounds/sandpack/examples/basic_erc20.js

export const files = {
  "/App.js": {
    code: `
import React, { useState, useEffect } from 'react';
import { BrowserProvider, Contract, formatUnits } from 'ethers';

const ERC20_ABI = [
  "function balanceOf(address) view returns (uint256)"
];

const tokenAddress = '0x...'; // Replace with actual address

export default function App() {
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    async function fetchBalance() {
      if (window.ethereum) {
        const provider = new BrowserProvider(window.ethereum);
        const contract = new Contract(tokenAddress, ERC20_ABI, provider);
        const accounts = await provider.send('eth_requestAccounts', []);
        const account = accounts[0];
        const userBalance = await contract.balanceOf(account);
        setBalance(formatUnits(userBalance, 18));
      }
    }
    fetchBalance();
  }, []);

  return (
    <div>
      <h3>ERC20 Token Balance</h3>
      <p>{balance ? balance : "Loading..."}</p>
    </div>
  );
}
    `,
    active: true,
  },
  "/index.js": {
    code: `
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
    `,
  },
  "/index.html": {
    code: `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>ERC20 Example</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
    `,
  },
};
export const dependencies = {
  "ethers": "^6.0.0",
  "react": "^18.0.0",
  "react-dom": "^18.0.0",
};
export const devDependencies = {
  "vite": "^4.0.0",
  "vite-plugin-react": "^3.0.0",
};
export const main = "index.js";
export const entry = "/index.js";
export const title = "ERC20 Token Balance Example";
export const description = "A simple example to fetch and display the balance of an ERC20 token using ethers.js.";
export const template = "react";
export const sandbox = {
  title: "ERC20 Token Balance Example",
  description: "A simple example to fetch and display the balance of an ERC20 token using ethers.js.",
  dependencies: {
    "ethers": "^6.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
  },
  devDependencies: {
    "vite": "^4.0.0",
    "vite-plugin-react": "^3.0.0",
  },
};