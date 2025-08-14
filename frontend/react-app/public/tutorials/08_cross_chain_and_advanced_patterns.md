# 🔄 Cross-Chain-Kommunikation & fortgeschrittene Patterns

Mit steigender Komplexität von dApps gewinnen Themen wie Chain-übergreifende Kommunikation und erweiterbare Architekturen an Bedeutung. Dieses Kapitel bietet dir einen praxisnahen Einstieg.

---

## 🌉 Cross-Chain Kommunikation

### 🌐 Was bedeutet Cross-Chain?

Die Interaktion eines Smart Contracts mit anderen Chains oder das Senden von Daten/Tokens über Chain-Grenzen hinweg.

### 🔧 Lösungen & Tools

| Tool / Protokoll | Zweck                           | Chains unterstützt       |
| ---------------- | ------------------------------- | ------------------------ |
| Chainlink CCIP   | Sichere Cross-Chain-Nachrichten | Ethereum, Avalanche, etc |
| LayerZero        | Omnichain-Interoperabilität     | Viele EVM-Chains         |
| Axelar           | Generalisiertes Messaging       | Cosmos, EVM              |

### ✍️ Beispiel mit LayerZero (simplifiziert)

```solidity
contract MyCrossChainApp is NonblockingLzApp {
    function _nonblockingLzReceive(...) internal override {
        // Empfange Daten von anderer Chain
    }

    function sendToOtherChain(uint16 dstChainId, bytes memory payload) public payable {
        _lzSend(dstChainId, payload, ...);
    }
}
```

---

## 🧠 Fortgeschrittene Smart Contract Patterns

### 🏗️ Upgradebare Contracts (Proxy Pattern)

Mit `@openzeppelin/hardhat-upgrades`:

```bash
npm install @openzeppelin/hardhat-upgrades
```

```solidity
// contracts/MyLogic.sol
contract MyLogic is Initializable {
    uint public value;
    function initialize(uint _value) public initializer {
        value = _value;
    }
}
```

```js
const MyLogic = await ethers.getContractFactory("MyLogic");
const proxy = await upgrades.deployProxy(MyLogic, [42]);
```

### 🔐 Timelock & Multisig

* Verzögert kritische Aktionen (z. B. mit `TimelockController`)
* Governance-Funktion in DAOs
* Gnosis Safe als gängige Multisig-Lösung

---

## 📡 Eventbasierte Kommunikation mit TheGraph

Erstelle eine Subgraph-Definition, um Events indexiert und suchbar zu machen.

```yaml
# subgraph.yaml
source:
  address: "<DeinContract>"
  abi: YourContract
  startBlock: 12345678
```

```graphql
# schema.graphql
 type Transfer @entity {
   id: ID!
   from: Bytes!
   to: Bytes!
   value: BigInt!
 }
```

```bash
yarn codegen && yarn deploy
```

---

## ✅ Best Practices

* Setze auf bewährte Cross-Chain-Protokolle mit Audits
* Dokumentiere Chain-IDs, Bridge-Fees & Endpunkte
* Halte deine Smart Contracts modular und testbar
* Trenne Logik von Daten (Upgrade-Fähigkeit!)

---

> 🌍 *„Web3 ist nicht auf eine Chain beschränkt – die Zukunft ist interoperabel.“*
