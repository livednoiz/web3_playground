export const files = {
  "/App.js": {
    code: `
import React, { useState } from "react";

export default function App() {
  const [account, setAccount] = useState(null);

  async function connectWallet() {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setAccount(accounts[0]);
      } catch (error) {
        console.error("Wallet connection failed:", error);
      }
    } else {
      alert("MetaMask is not installed");
    }
  }

  return (
    <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
      <h2>🔗 Connect Your Wallet</h2>
      {account ? (
        <p>Connected: <strong>{account}</strong></p>
      ) : (
        <button onClick={connectWallet}>Connect MetaMask</button>
      )}
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
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Connect Wallet Example</title>
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