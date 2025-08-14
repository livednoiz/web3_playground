# 🌐 Hosting & Verifikation deiner DApp

Nachdem du deine Smart Contracts erstellt und getestet hast, zeige ich dir in diesem Kapitel, wie du deine DApp veröffentlichst, hostest und den Contract verifizierst.

---

## 🧾 Überblick

| Bereich      | Technologie                  |
| ------------ | ---------------------------- |
| Hosting      | IPFS, Fleek, Vercel, Netlify |
| Domain       | ENS, Unstoppable Domains     |
| Verifikation | Etherscan, Blockscout        |

---

## 🚀 Deployment deiner DApp

### 🖼️ Frontend bauen (Beispiel: React + Vite)

```bash
npm run build
```

### 🧪 Optional: Build lokal testen

```bash
npx serve dist
```

### 📤 Hosting auf IPFS via Fleek

1. Gehe zu [https://fleek.co](https://fleek.co)
2. Neues Projekt mit deinem GitHub Repo verknüpfen
3. Deploy automatisch nach Build-Trigger (`npm run build`)

Oder direkt via IPFS CLI:

```bash
npm install -g ipfs
ipfs add -r dist/
```

---

## 🌍 Domain mit ENS verbinden

1. Domain via [app.ens.domains](https://app.ens.domains) registrieren
2. Content-Hash setzen (z. B. IPFS CID)

```bash
# Beispiel CID setzen:
npx hardhat set-content-hash --domain mydapp.eth --cid Qm...123
```

---

## 📑 Verifikation auf Etherscan

### 🔑 API Key besorgen

* Etherscan-Account erstellen
* API Key generieren

### ⚙️ Konfiguration in `hardhat.config.js`

```js
require("@nomicfoundation/hardhat-verify");

module.exports = {
  ...,
  etherscan: {
    apiKey: "DEIN_ETHERSCAN_API_KEY"
  }
};
```

### 🔍 Contract verifizieren

```bash
npx hardhat verify --network mainnet DEPLOYED_CONTRACT_ADDRESS
```

---

## ✅ Tipps für Public Deployment

* Lies sorgfältig die Gas-Kosten vor Deployment
* Dokumentiere deine ABI und Address im Frontend
* Nutze `.env`-Dateien für Secrets/API Keys
* Füge Metadaten in deinen Smart Contract ein (z. B. `name`, `symbol`, `version`)

---

➡️ Optional: `08_cross_chain_and_advanced_patterns.md`

> 🌟 *„Was on-chain ist, bleibt on-chain. Sorge dafür, dass es funktioniert und gefunden wird.“*
