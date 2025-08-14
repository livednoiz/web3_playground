# 🌐 Web3 Frontend – Verbindung zu deinem Smart Contract

In dieser Lektion bauen wir eine einfache Web3-Frontend-App mit **HTML**, **JavaScript** und **Ethers.js**, um mit deinem Smart Contract zu interagieren.

---

## 📦 Voraussetzungen

* ✅ Smart Contract ist deployed (z. B. auf Sepolia)
* ✅ Du hast die Contract-Adresse & ABI (JSON Interface)
* ✅ MetaMask ist installiert

---

## 🗂️ Projektstruktur

```
web3-frontend/
├── index.html
├── app.js
├── abi.json
```

---

## 🧩 index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Web3 DApp</title>
</head>
<body>
  <h1>🦊 Web3 Verbindung zur Blockchain</h1>
  <button onclick="connectWallet()">Wallet verbinden</button>
  <p id="account"></p>

  <h2>📬 Nachricht</h2>
  <p id="message"></p>
  <input id="newMessage" type="text" placeholder="Neue Nachricht">
  <button onclick="setMessage()">Senden</button>

  <script src="https://cdn.jsdelivr.net/npm/ethers/dist/ethers.min.js"></script>
  <script src="app.js"></script>
</body>
</html>
```

---

## 🔗 app.js

```js
let provider;
let signer;
let contract;

const CONTRACT_ADDRESS = "0xDEINCONTRACT"; // Ersetze mit deiner Adresse

async function connectWallet() {
  provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  signer = provider.getSigner();

  const abi = await fetch("abi.json").then(res => res.json());
  contract = new ethers.Contract(CONTRACT_ADDRESS, abi, signer);

  document.getElementById("account").innerText = `✅ Verbunden mit: ${await signer.getAddress()}`;
  getMessage();
}

async function getMessage() {
  const msg = await contract.message();
  document.getElementById("message").innerText = msg;
}

async function setMessage() {
  const newMsg = document.getElementById("newMessage").value;
  const tx = await contract.setMessage(newMsg);
  await tx.wait();
  getMessage();
}
```

---

## 📄 abi.json

Exportiere dein ABI z. B. aus Hardhat mit:

```bash
npx hardhat compile
```

Und kopiere den Inhalt aus `artifacts/contracts/MyContract.sol/MyContract.json` → `abi`-Teil nach `abi.json`

Beispiel:

```json
[
  {
    "inputs": [],
    "name": "message",
    "outputs": [ { "internalType": "string", "name": "", "type": "string" } ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [ { "internalType": "string", "name": "_newMessage", "type": "string" } ],
    "name": "setMessage",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]
```

---

## ✅ Teste deine App

1. Öffne `index.html` im Browser
2. Verbinde MetaMask
3. Lies & schreibe die Nachricht auf der Blockchain

---

➡️ Weiter mit: `05_unit_tests_and_security.md`

> 💡 *„Ein gutes Frontend macht Blockchain-Technologie greifbar – und zugänglich.“*
