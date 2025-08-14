# 🗳️ Governance & Tokenomics

Governance ist der zentrale Aspekt vieler Web3-Projekte. In Kombination mit einer durchdachten Tokenomics kann sie Vertrauen, Beteiligung und Nachhaltigkeit fördern. Dieses Kapitel führt dich in beide Themen praxisnah ein.

---

## 🧩 Grundlagen: Was ist Governance?

Governance beschreibt, wie Entscheidungen in einem Projekt getroffen werden – ob zentralisiert, semi-dezentral oder vollständig durch eine DAO (Decentralized Autonomous Organization).

### 🔑 Governance-Typen

| Typ       | Merkmale                                |
| --------- | --------------------------------------- |
| Off-Chain | Snapshot, Discourse, Soft Voting        |
| On-Chain  | Smart Contracts steuern Aktionen direkt |
| Hybrid    | Off-Chain Voting + On-Chain Execution   |

---

## 🪙 Tokenomics – die Wirtschaft deiner dApp

### 💡 Was ist Tokenomics?

Tokenomics beschreibt die ökonomische Struktur eines Tokens: seine Verteilung, Nutzung, Anreize und Funktionen.

### 📊 Beispielstruktur für einen Utility-/Governance-Token

| Anteil              | Zweck               | Sperrfrist       |
| ------------------- | ------------------- | ---------------- |
| 40% Community       | Airdrops, Rewards   | sofort/verzögert |
| 20% Team            | Motivation, Anreiz  | 12–36 Monate     |
| 20% Treasury        | DAO-Finanzierung    | kontrolliert     |
| 10% Investoren      | Frühphase           | 6–18 Monate      |
| 10% Staking Rewards | Beteiligung fördern | nach Bedarf      |

---

## 🧠 Umsetzung einer einfachen DAO mit OpenZeppelin

### 📦 Installation

```bash
npm install @openzeppelin/contracts
```

### 🧾 Beispiel mit `Governor.sol`

```solidity
contract MyGovernor is Governor, GovernorVotes, GovernorTimelockControl {
    constructor(IVotes _token, TimelockController _timelock)
        Governor("MyGovernor")
        GovernorVotes(_token)
        GovernorTimelockControl(_timelock)
    {}

    function votingDelay() public pure override returns (uint256) {
        return 1; // Blöcke
    }

    function votingPeriod() public pure override returns (uint256) {
        return 45818; // ~1 Woche bei 13s Blockzeit
    }

    function quorum(uint256 blockNumber) public pure override returns (uint256) {
        return 100000e18; // Mindestanzahl an Stimmen
    }
}
```

---

## 📋 On-Chain Voting Ablauf

1. Proposal erstellen
2. Voting durch Tokenholder (ERC20Votes)
3. Auswertung nach Ablauf
4. Ausführung per Timelock

---

## 🔐 Snapshot als Off-Chain Alternative

* Kostenloses Voting-Tool
* Integration mit ENS, ERC20, ERC721 möglich
* Keine Transaktionskosten
* Ideal für Community-Projekte

> [https://snapshot.org](https://snapshot.org)

---

## ✅ Best Practices

* Vermeide Token-Übermacht einzelner Gruppen
* Nutze Timelocks zur Sicherheit
* Belohne Beteiligung (z. B. mit Staking + Voting Power)
* Plane langfristige Token-Freisetzungen (Vesting)
* Dokumentiere Entscheidungen öffentlich (z. B. via GitHub, Forum)

---

> 🏛️ *„Code ist Gesetz, aber Governance ist Kultur.“*
