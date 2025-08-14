# 🚀 Deployment mit Hardhat – Schritt für Schritt

In dieser Lektion zeigen wir dir, wie du deinen Smart Contract zuverlässig und sicher in ein Testnetzwerk wie Sepolia deployen kannst.

---

## 🔧 Voraussetzungen

* ✅ Hardhat-Projekt eingerichtet (siehe vorherige Lektion)
* ✅ Zugang zu einem Provider wie [Alchemy](https://alchemy.com) oder [Infura](https://infura.io)
* ✅ .env-Datei mit privatem Key & RPC-URL

---

## 🌍 Netzwerk-Konfiguration in `hardhat.config.js`

```js
require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_URL,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
```

### 📁 .env-Datei

```env
SEPOLIA_URL=https://eth-sepolia.g.alchemy.com/v2/your-api-key
PRIVATE_KEY=0xyourprivatekey
```

**Achtung:** Diese Datei **niemals** in ein öffentliches Repository committen!

---

## 📦 Deployment vorbereiten

Deployment-Skript: `scripts/deploy.js`

```js
const hre = require("hardhat");

async function main() {
  const ContractFactory = await hre.ethers.getContractFactory("MyContract");
  const contract = await ContractFactory.deploy();
  await contract.deployed();
  console.log("✅ Contract deployed to:", contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
```

---

## ⚡ Deployment-Befehl

```bash
npx hardhat run scripts/deploy.js --network sepolia
```

Du bekommst die Contract-Adresse zurück, z. B.:

```
✅ Contract deployed to: 0xabc123...789
```

Diese Adresse kannst du auf [https://sepolia.etherscan.io](https://sepolia.etherscan.io) überprüfen.

---

## 🔍 Interaktion über Hardhat Console

```bash
npx hardhat console --network sepolia
```

```js
const contract = await ethers.getContractAt("MyContract", "0xabc123...");
await contract.setMessage("Hallo Web3 Welt!");
(await contract.message()).toString();
```

---

## 🧹 Bonus: Contract verifizieren (z. B. bei Etherscan)

1. Plugin installieren:

```bash
npm install --save-dev @nomicfoundation/hardhat-verify
```

2. In `hardhat.config.js` ergänzen:

```js
etherscan: {
  apiKey: process.env.ETHERSCAN_API_KEY
}
```

3. Verifizieren:

```bash
npx hardhat verify --network sepolia 0xabc123...
```

---

➡️ Weiter mit: `04_web3_frontend_connect.md`

> 🧠 *„Ein Contract, der nur auf der Blockchain liegt, nützt wenig ohne Interface – Web3 braucht beides.“*
