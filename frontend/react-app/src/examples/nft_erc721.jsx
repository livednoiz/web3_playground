import React, { useState } from "react";
import { ethers } from "ethers";

const NFT_CONTRACT_ADDRESS = "0xYourNFTContractAddress"; // Demo-Adresse
const ABI = [
  "function balanceOf(address owner) view returns (uint256)",
  "function ownerOf(uint256 tokenId) view returns (address)",
  "function tokenURI(uint256 tokenId) view returns (string)"
];

export default function NFTDemo() {
  const [info, setInfo] = useState(null);
  const [error, setError] = useState(null);

  async function fetchNFT() {
    try {
      if (!window.ethereum) throw new Error("Wallet nicht gefunden!");
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const [account] = await provider.send("eth_requestAccounts", []);
      const contract = new ethers.Contract(NFT_CONTRACT_ADDRESS, ABI, provider);
      const balance = await contract.balanceOf(account);
      const owner = await contract.ownerOf(1);
      const uri = await contract.tokenURI(1);
      setInfo({ balance: balance.toString(), owner, uri });
      setError(null);
    } catch (e) {
      setError(e.message);
      setInfo(null);
    }
  }

  return (
    <div>
      <button onClick={fetchNFT}>NFT Info abrufen</button>
      {error && <div style={{color: 'red'}}>{error}</div>}
      {info && (
        <div>
          <p><b>Balance:</b> {info.balance}</p>
          <p><b>Owner:</b> {info.owner}</p>
          <p><b>Token URI:</b> {info.uri}</p>
        </div>
      )}
    </div>
  );
}
