// playgrounds/sandpack/main.js

import React from 'react';
import ReactDOM from 'react-dom';
import BasicERC20 from './examples/basic_erc20';
import ConnectWallet from './examples/connect_wallet';

function App() {
  return (
    <div>
      <h1>Web3 Playground</h1>
      <ConnectWallet />
      <BasicERC20 />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
// This code sets up a simple React application that includes two components:
// 1. `ConnectWallet`: A button to connect a wallet using MetaMask.
// 2. `BasicERC20`: A component that fetches and displays the balance of an ERC20 token for the connected wallet address.