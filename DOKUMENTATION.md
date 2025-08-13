# Web3 Playground – Dokumentation & Installationsanleitung

## Projektüberblick

Dieses Projekt ist ein modularer Web3-Playground mit React-Frontend, interaktiven Sandbox-Beispielen und Tutorials. Ziel ist es, Web3-Technologien praxisnah und verständlich zu vermitteln.

## Projektstruktur

```
web3_playground/
├── README.md
├── FAHRPLAN.md                # Fahrplan & Roadmap
├── ORDNERSTRUKTUR.md          # Übersicht der Ordner
├── frontend/
│   └── react-app/
│       ├── package.json       # Abhängigkeiten & Skripte
│       ├── index.html         # Einstiegspunkt für Vite
│       ├── tailwind.config.js # TailwindCSS-Konfiguration
│       ├── postcss.config.js  # PostCSS-Konfiguration
│       └── src/
│           ├── App.jsx        # Hauptkomponente
│           ├── index.jsx      # Einstiegspunkt für React
│           ├── index.css      # TailwindCSS-Stile
│           └── components/
│               ├── InfoPanel.jsx
│               └── SandpackExampleViewer.jsx
│           └── examples/
│               ├── connect_wallet.jsx
│               └── basic_erc20.jsx
├── playgrounds/
│   └── sandpack/
│       └── ...                # Browserbasierte Playgrounds
├── snippets/                  # Code-Snippets
├── tools/                     # Hilfsskripte
├── tutorials/                 # Schritt-für-Schritt-Anleitungen
```

## Voraussetzungen
- Node.js (empfohlen: v18 oder neuer)
- npm (empfohlen: v9 oder neuer)
- Git
- Optional: MetaMask für Web3-Interaktionen

## Installation & Start

1. **Repository klonen**
   ```bash
   git clone https://github.com/livednoiz/web3_playground.git
   cd web3_playground/frontend/react-app
   ```

2. **Abhängigkeiten installieren**
   ```bash
   npm install
   ```

3. **TailwindCSS v3 sicherstellen**
   ```bash
   npm install tailwindcss@3.3.3 autoprefixer postcss
   ```

4. **Entwicklungsserver starten**
   ```bash
   npm run start
   ```
   Die App ist jetzt unter [http://localhost:5173](http://localhost:5173) erreichbar.

## Wichtige Dateien & Konfigurationen
- `package.json`: Enthält alle Abhängigkeiten und Skripte.
- `tailwind.config.js`: Definiert die Pfade für TailwindCSS.
- `postcss.config.js`: Konfiguriert TailwindCSS und Autoprefixer als PostCSS-Plugins.
- `src/index.css`: Bindet TailwindCSS-Stile ein.
- `src/App.jsx`: Hauptkomponente mit Layout und Beispiel-Viewer.
- `src/components/SandpackExampleViewer.jsx`: Interaktive Sandbox für Web3-Beispiele.

## Sandbox & Web3-Integration
- Die Sandbox (Sandpack) zeigt interaktive React/Web3-Beispiele.
- Für echte Blockchain-Interaktionen ist eine Wallet (z.B. MetaMask) im Browser erforderlich.
- In der Sandbox wird eine Info angezeigt, falls keine Wallet verfügbar ist.

## Erweiterung & Anpassung
- Neue Beispiele können unter `src/examples/` als `.jsx`-Dateien angelegt und im Viewer eingebunden werden.
- Tutorials und Snippets sind modular und können beliebig erweitert werden.
- Das Styling erfolgt über TailwindCSS und kann in `index.css` angepasst werden.

## Troubleshooting
- **TailwindCSS-Fehler:** Stelle sicher, dass Version 3.x installiert ist und die Konfiguration stimmt.
- **Sandbox-Fehler:** Externe Libraries wie `ethers` müssen in der Sandpack-Komponente als Dependency angegeben werden.
- **Web3-Fehler:** Für Blockchain-Interaktionen muss eine Wallet im Browser installiert und verbunden sein.

## Weiterführende Links
- [React Dokumentation](https://react.dev/)
- [TailwindCSS Dokumentation](https://tailwindcss.com/docs/installation)
- [Sandpack Dokumentation](https://sandpack.dev/docs/)
- [ethers.js Dokumentation](https://docs.ethers.org/)
- [MetaMask](https://metamask.io/)

---

**Viel Spaß beim Entwickeln und Lernen mit dem Web3 Playground!**
