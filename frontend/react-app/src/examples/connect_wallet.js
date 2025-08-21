// playgrounds/sandpack/examples/connect_wallet.jsx

import { useState, useEffect } from 'react';

function ConnectWallet() {
  const [accounts, setAccounts] = useState([]);
  const [selected, setSelected] = useState('');
  const [status, setStatus] = useState('Nicht verbunden');
  const [network, setNetwork] = useState('');

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        setStatus('Verbindung wird hergestellt...');
        const accs = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccounts(accs);
        setSelected(accs[0] || '');
        setStatus(accs.length ? 'Verbunden' : 'Nicht verbunden');
        const chainId = await window.ethereum.request({ method: 'eth_chainId' });
        setNetwork(chainId ? `Chain ID: ${parseInt(chainId, 16)}` : 'Unbekannt');
      } catch (err) {
        setStatus('Verbindung abgelehnt oder Fehler: ' + err.message);
      }
    } else {
      setStatus('MetaMask nicht gefunden');
      alert('Please install MetaMask');
    }
  };

  // Status bei Account- oder Netzwerkwechsel automatisch aktualisieren
  useEffect(() => {
    if (!window.ethereum) return;
    const handleAccountsChanged = (accs) => {
      setAccounts(accs);
      setSelected(accs[0] || '');
      setStatus(accs.length ? 'Verbunden' : 'Nicht verbunden');
    };
    const handleChainChanged = (chainId) => {
      setNetwork(chainId ? `Chain ID: ${parseInt(chainId, 16)}` : 'Unbekannt');
    };
    window.ethereum.on('accountsChanged', handleAccountsChanged);
    window.ethereum.on('chainChanged', handleChainChanged);
    // Initialisiere Accounts und Netzwerk beim Laden der Komponente
    (async () => {
      try {
        const accs = await window.ethereum.request({ method: 'eth_accounts' });
        setAccounts(accs);
        setSelected(accs[0] || '');
        setStatus(accs.length ? 'Verbunden' : 'Nicht verbunden');
        const chainId = await window.ethereum.request({ method: 'eth_chainId' });
        setNetwork(chainId ? `Chain ID: ${parseInt(chainId, 16)}` : 'Unbekannt');
      } catch (err) {
        setStatus('Fehler beim Initialisieren: ' + err.message);
      }
    })();
    return () => {
      window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
      window.ethereum.removeListener('chainChanged', handleChainChanged);
    };
  }, []);

  // Hinweis für den User, falls Accountauswahl nicht funktioniert
  const showAccountHint = accounts.length > 0 && selected && window.ethereum && window.ethereum.selectedAddress && selected.toLowerCase() !== window.ethereum.selectedAddress.toLowerCase();

  // Debug-Infos
  const debugInfo = window.ethereum ? {
    selectedAddress: window.ethereum.selectedAddress,
    isConnected: window.ethereum.isConnected && window.ethereum.isConnected(),
    chainId: network,
    accounts,
    selected,
  } : {};

  return (
    <div>
      <button onClick={connectWallet}>Connect Wallet</button>
      <div style={{marginTop: '1em'}}>
        <b>Status:</b> {status}<br />
        {accounts.length > 0 && (
          <span>
            <label htmlFor="account-select"><b>Account-Auswahl:</b></label>
            <select
              id="account-select"
              name="account"
              value={window.ethereum && window.ethereum.selectedAddress ? window.ethereum.selectedAddress : selected}
              onChange={e => setSelected(e.target.value)}
              style={{marginLeft: '1em'}}
            >
              {accounts.map(acc => (
                <option key={acc} value={acc}>{acc}</option>
              ))}
            </select>
            <br />
            <b>Aktiver Account:</b> {window.ethereum && window.ethereum.selectedAddress ? window.ethereum.selectedAddress : selected}<br />
          </span>
        )}
        {showAccountHint && (
          <div style={{color: 'orange', marginTop: '0.5em'}}>
            Hinweis: Die Auswahl im Dropdown ändert nicht den aktiven Account in MetaMask.<br />
            Bitte wähle den gewünschten Account direkt in MetaMask aus!
          </div>
        )}
        {network && <span><b>Netzwerk:</b> {network}</span>}
        <details style={{marginTop: '1em'}}>
          <summary>Debug-Info</summary>
          <pre style={{background: '#f6f6f6', padding: '0.5em', fontSize: '0.9em'}}>{JSON.stringify(debugInfo, null, 2)}</pre>
        </details>
      </div>
    </div>
  );
}

export default ConnectWallet;
// This code provides a simple interface to connect a wallet using MetaMask.
// It uses the `eth_requestAccounts` method to prompt the user to connect their wallet.
// Once connected, it displays the connected account address.
// Make sure to run this code in a React environment with MetaMask installed.
// This code is for educational purposes and should be tested in a safe environment.
// Ensure you have MetaMask installed in your browser to test this code.
// This code is a simple example of how to connect a wallet using MetaMask.
// It prompts the user to connect their wallet and displays the connected account address.
// For production code, consider adding error handling and user feedback.
// This code is for educational purposes and should be tested in a safe environment.
// Ensure you have MetaMask installed in your browser to test this code.
// This code is a simple example of how to connect a wallet using MetaMask.
// It prompts the user to connect their wallet and displays the connected account address.
// For production code, consider adding error handling and user feedback.
// This code is for educational purposes and should be tested in a safe environment.