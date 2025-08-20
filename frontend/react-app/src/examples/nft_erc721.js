// Beispiel: Interaktion mit einem ERC-721 NFT Smart Contract
import { ethers } from "ethers";

const NFT_CONTRACT_ADDRESS = "0xYourNFTContractAddress"; // Demo-Adresse
const ABI = [
  "function balanceOf(address owner) view returns (uint256)",
  "function ownerOf(uint256 tokenId) view returns (address)",
  "function tokenURI(uint256 tokenId) view returns (string)"
];

async function getNFTInfo(provider, userAddress, tokenId) {
  const contract = new ethers.Contract(NFT_CONTRACT_ADDRESS, ABI, provider);
  const balance = await contract.balanceOf(userAddress);
  const owner = await contract.ownerOf(tokenId);
  const uri = await contract.tokenURI(tokenId);
  return { balance, owner, uri };
}

export default async function runNFTDemo() {
  if (!window.ethereum) throw new Error("Wallet nicht gefunden!");
  const provider = new ethers.BrowserProvider(window.ethereum);
  const accounts = await provider.send("eth_requestAccounts", []);
  const userAddress = accounts[0];
  const tokenId = 1; // Beispiel-Token
  const info = await getNFTInfo(provider, userAddress, tokenId);
  console.log("NFT Info:", info);
  return info;
}

// Demo-Aufruf:
// runNFTDemo().then(console.log).catch(console.error);
