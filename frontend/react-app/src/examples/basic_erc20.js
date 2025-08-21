// playgrounds/sandpack/examples/basic_erc20.jsx

import { useState, useEffect } from 'react';
import { BrowserProvider, Contract, formatUnits } from 'ethers';

const ERC20_ABI = [
  "function balanceOf(address) view returns (uint256)"
];

const tokenAddress = '0x...'; // ERC20 Contract Address

function BasicERC20() {
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    async function fetchBalance() {
      if (window.ethereum) {
        const provider = new BrowserProvider(window.ethereum);
        const contract = new Contract(tokenAddress, ERC20_ABI, provider);
        const accounts = await provider.send('eth_requestAccounts', []);
        const account = accounts[0];
        const userBalance = await contract.balanceOf(account);
        setBalance(formatUnits(userBalance, 18));  // Assuming 18 decimals for ERC20
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

export default BasicERC20;
// This code fetches the balance of an ERC20 token for the connected wallet address.
// It uses ethers.js to interact with the Ethereum blockchain and the ERC20 contract.
// Make sure to replace '0x...' with the actual ERC20 contract address.
// This code is meant to be run in a React environment with MetaMask installed.
// It will prompt the user to connect their wallet and then display their token balance.
// Note: This is a basic example and does not include error handling or network switching.
// For production code, consider adding error handling and user feedback.
// This code is for educational purposes and should be tested in a safe environment.
// Ensure you have ethers.js installed in your project:
// npm install ethers
// You can run this code in a React application with MetaMask installed.
// Make sure to replace '0x...' with the actual ERC20 contract address.
// This code is a simple example of how to interact with an ERC20 token contract using ethers.js.
// It fetches the balance of the connected wallet address and displays it.