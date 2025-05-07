# 🪙 Token-Standards: ERC-20 und ERC-721 verstehen & implementieren

Ethereum bietet bewährte Token-Standards. In dieser Lektion zeigen wir, wie du fungible (ERC-20) und non-fungible Tokens (ERC-721) implementierst.

---

## 📚 Übersicht

| Standard | Typ                | Beispiele                 |
| -------- | ------------------ | ------------------------- |
| ERC-20   | Fungible Token     | DAI, USDC, UNI            |
| ERC-721  | Non-Fungible Token | CryptoKitties, Bored Apes |

---

## 🧾 ERC-20 Token

### 🔧 Installation

```bash
npm install @openzeppelin/contracts
```

### ✍️ Beispiel-Implementierung

```solidity
// contracts/MyToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    constructor() ERC20("MeinToken", "MTK") {
        _mint(msg.sender, 1000 * 10 ** decimals());
    }
}
```

### 📤 Deployment

```js
// scripts/deploy.js
const hre = require("hardhat");

async function main() {
  const Token = await hre.ethers.getContractFactory("MyToken");
  const token = await Token.deploy();
  await token.deployed();
  console.log("MyToken deployed to:", token.address);
}

main();
```

### 📦 Testen (Ausschnitt)

```js
it("minted tokens to deployer", async () => {
  const balance = await token.balanceOf(owner.address);
  expect(balance).to.equal(ethers.utils.parseUnits("1000", 18));
});
```

---

## 🖼️ ERC-721 Token

### ✍️ Beispiel-Implementierung

```solidity
// contracts/MyNFT.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract MyNFT is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("MeinNFT", "MNFT") {}

    function mintNFT(address recipient) public returns (uint256) {
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _mint(recipient, newItemId);
        return newItemId;
    }
}
```

---

## 🔐 Sicherheit bei Token

* Vermeide direktes `transferFrom` ohne Checks
* Verwende `safeTransferFrom` bei ERC-721
* Nutze Rollenverwaltung (z. B. OpenZeppelin AccessControl)

---

## ✅ Empfehlungen

* Teste jeden Token-Use-Case (Mint, Burn, Transfer, Approve)
* Lies offizielle OpenZeppelin-Dokumentation
* Validierung über Etherscan / Remix

---

➡️ Weiter mit: `07_dapp_hosting_and_verification.md`

> 🧠 *„Standards geben Sicherheit – für Entwickler und Nutzer.“*
