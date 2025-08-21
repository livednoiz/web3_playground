import React, { useState } from 'react';

function MinimalWalletConnect() {
  const [account, setAccount] = useState('');
  const [status, setStatus] = useState('Nicht verbunden');

  const connect = async () => {
    if (window.ethereum) {
      try {
        setStatus('Verbindung wird hergestellt...');
        const accs = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accs[0] || '');
        setStatus(accs.length ? 'Verbunden' : 'Nicht verbunden');
      } catch (err) {
        setStatus('Verbindung abgelehnt oder Fehler: ' + err.message);
      }
    } else {
      setStatus('MetaMask nicht gefunden');
      alert('Please install MetaMask');
    }
  };

  return (
    <div>
      <button onClick={connect}>Connect Wallet</button>
      <div style={{marginTop: '1em'}}>
        <b>Status:</b> {status}<br />
        <b>Account:</b> {account}<br />
      </div>
    </div>
  );
}

export default MinimalWalletConnect;
