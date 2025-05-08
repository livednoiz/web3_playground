# 🚀 Deployment-Strategien & Smart Contract Security

Die Veröffentlichung deiner Smart Contracts auf einer Blockchain ist ein kritischer Schritt. In diesem Kapitel lernst du sichere und effiziente Wege für das Deployment sowie Best Practices für Sicherheit und Audits.

---

## 🧰 Deployment-Strategien

### 🔍 Testnetzwerke nutzen

* Nutze Goerli, Sepolia, Polygon Mumbai oder Base Goerli zum Testen
* Verwende `.env`-Dateien für private Schlüssel & RPC-URLs

```bash
npx hardhat run scripts/deploy.js --network sepolia
```

### 🔄 Upgradebare Deployments

Verwende das OpenZeppelin Upgrades Plugin:

```bash
npx hardhat run scripts/deploy-proxy.js --network polygon
```

### 🧪 Automatisiertes Testing vor Deployment

* Nutze Hardhat + Chai + Waffle
* Schreibe Tests für jeden öffentlichen Zustand

```js
expect(await contract.balanceOf(addr1.address)).to.equal(1000);
```

---

## 🔐 Sicherheitsprinzipien

### 1. **Vermeide Reentrancy**

Nutze `ReentrancyGuard` oder Checks-Effects-Interactions Pattern.

```solidity
function withdraw() public nonReentrant {
    uint amount = balances[msg.sender];
    balances[msg.sender] = 0;
    payable(msg.sender).transfer(amount);
}
```

### 2. **Zugriffsrechte korrekt setzen**

Verwende `onlyOwner`, `AccessControl` oder `Ownable`-Pattern.

### 3. **Integer Overflows absichern**

Ab Solidity 0.8 automatisch durch SafeMath integriert.

### 4. **Fallback- und Receive-Funktionen korrekt verwenden**

```solidity
receive() external payable {
    emit Received(msg.sender, msg.value);
}
```

### 5. **Externe Calls minimieren & prüfen**

Reduziere Abhängigkeiten von fremden Contracts und setze Timeouts oder Limits.

---

## 📋 Audits & Analyse

### 🔧 Tools zur Codeanalyse

* Slither (static analysis)
* MythX / Mythril
* OpenZeppelin Defender (Monitoring)
* Hardhat coverage

### 📤 Externe Audits beauftragen

* Quantstamp, CertiK, Hacken etc.
* Dokumentation als Teil des GitHub-Repos

---

## 📦 Verifizierung bei Etherscan & Co.

```bash
npx hardhat verify --network mainnet DEPLOYED_CONTRACT_ADDRESS "ConstructorParam1"
```

Verifizierung sorgt für Transparenz und Vertrauen bei Nutzern.

---

## ✅ Best Practices

* Teste auf mehreren Chains (EVM-kompatibel)
* Vermeide `tx.origin` für Authentifizierung
* Nutze `.env` + Hardware Wallets für private Schlüssel
* Deployment-Dokumentation ins Repo aufnehmen
* Immer Code-Freezes und Sign-Offs vor finalem Deployment

---

➡️ Abschluss: `11_final_considerations_and_roadmap.md`

> 🛡️ *„Sicherheit ist kein Feature – es ist ein Prozess.“*
