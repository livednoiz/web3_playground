# ⚙️ Smart Contracts mit Solidity – Dein erster Vertrag

Willkommen zur zweiten Lektion! Hier lernst du, wie du mit **Solidity** einen einfachen Smart Contract erstellst und auf der Blockchain speicherst.

---

## 🧰 Voraussetzungen

* ✅ Node.js & NPM installiert
* ✅ MetaMask eingerichtet mit Testnet ETH (z. B. Sepolia)
* ✅ Code-Editor (z. B. VS Code)

---

## 🛠️ Projektsetup mit Hardhat

1. **Initialisiere ein neues Projekt:**

```bash
mkdir my-first-contract && cd my-first-contract
npm init -y
npm install --save-dev hardhat
npx hardhat
```

Wähle „Create a basic sample project“ und folge den Anweisungen.

2. **Projektstruktur:**

```
my-first-contract/
├── contracts/
│   └── MyContract.sol
├── scripts/
│   └── deploy.js
├── test/
├── hardhat.config.js
```

---

## ✍️ Dein erster Solidity-Vertrag

Datei: `contracts/MyContract.sol`

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract MyContract {
    string public message = "Hallo Web3!";

    function setMessage(string memory _newMessage) public {
        message = _newMessage;
    }
}
```

---

## 🚀 Deployment-Skript

Datei: `scripts/deploy.js`

```js
const hre = require("hardhat");

async function main() {
  const MyContract = await hre.ethers.getContractFactory("MyContract");
  const contract = await MyContract.deploy();
  await contract.deployed();
  console.log("Contract deployed to:", contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
```

---

## 🧪 Deployen im Testnetz (Sepolia)

1. API Key bei [Alchemy](https://alchemy.com) oder [Infura](https://infura.io) holen
2. `.env` Datei erstellen mit deinem privaten Schlüssel und RPC-URL
3. `hardhat.config.js` erweitern:

```js
require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_URL,
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  solidity: "0.8.20"
};
```

4. Deployment:

```bash
npx hardhat run scripts/deploy.js --network sepolia
```

---

## ✅ Erfolg prüfen

Sobald dein Vertrag deployed ist, kannst du die Adresse in [https://sepolia.etherscan.io](https://sepolia.etherscan.io) nachschlagen.

---

➡️ Weiter mit: `03_deploy_with_hardhat.md`

> 📜 *„Smart Contracts are the backbone of trustless systems.“*
