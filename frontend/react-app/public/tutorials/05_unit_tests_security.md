# 🧪 Unit Tests & Sicherheits-Checks für Smart Contracts

Tests sind das Fundament zuverlässiger Smart Contracts. In dieser Lektion lernst du, wie du deine Solidity-Contracts mit Hardhat testest und gängige Sicherheitsrisiken vermeidest.

---

## 🧰 Voraussetzungen

* ✅ Hardhat-Projekt eingerichtet
* ✅ Mocha & Chai sind über `@nomicfoundation/hardhat-toolbox` eingebunden

---

## 🧪 Testskript erstellen: `test/MyContract.js`

```js
const { expect } = require("chai");

describe("MyContract", function () {
  let contract;

  beforeEach(async () => {
    const ContractFactory = await ethers.getContractFactory("MyContract");
    contract = await ContractFactory.deploy();
    await contract.deployed();
  });

  it("sollte eine Standardnachricht setzen", async function () {
    expect(await contract.message()).to.equal("Hallo Welt");
  });

  it("sollte die Nachricht aktualisieren können", async function () {
    await contract.setMessage("Neue Nachricht");
    expect(await contract.message()).to.equal("Neue Nachricht");
  });
});
```

### 📦 Testen mit:

```bash
npx hardhat test
```

---

## 🔒 Sicherheitstipps

### 1. Sichtbarkeit korrekt definieren

* Nutze `public`, `internal`, `private` mit Bedacht

### 2. Reentrancy vermeiden

* Beispiel: Überprüfe & ändere Zustand vor dem externen Aufruf

```solidity
require(balance[msg.sender] > 0);
uint amount = balance[msg.sender];
balance[msg.sender] = 0;
payable(msg.sender).transfer(amount);
```

### 3. Zugriffskontrolle

* Verwende `onlyOwner` aus OpenZeppelin:

```solidity
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyContract is Ownable {
  function adminOnly() public onlyOwner {
    // nur der Eigentümer darf das tun
  }
}
```

### 4. Events für Transparenz

```solidity
event MessageChanged(string newMessage);

function setMessage(string memory newMessage) public {
  message = newMessage;
  emit MessageChanged(newMessage);
}
```

### 5. Vermeide `tx.origin` für Authentifizierung

* Nutze `msg.sender` statt `tx.origin` für Sicherheit gegenüber Phishing

---

## ✅ Testabdeckung prüfen (optional mit Plugin)

```bash
npm install --save-dev solidity-coverage
npx hardhat coverage
```

---

➡️ Weiter mit: `06_token_standards_erc20_erc721.md`

> 🔐 *„Vertraue dem Code – aber teste ihn zuerst.“*
