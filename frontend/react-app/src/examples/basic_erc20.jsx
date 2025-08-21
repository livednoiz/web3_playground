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

export default BasicERC20;
