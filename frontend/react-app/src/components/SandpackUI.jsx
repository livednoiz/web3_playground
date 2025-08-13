import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import ConnectWallet from '../../../playgrounds/sandpack/examples/connect_wallet.js';
import BasicERC20 from '../../../playgrounds/sandpack/examples/basic_erc20.js';

export default function SandpackUI() {
  const [view, setView] = useState('wallet');

  return (
    <div className="min-h-screen bg-gray-100 p-4 font-sans">
      <h1 className="text-2xl font-bold mb-4">🧪 Web3 Sandbox</h1>
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setView('wallet')}
          className={`px-4 py-2 rounded ${view === 'wallet' ? 'bg-blue-500 text-white' : 'bg-white border'}`}
        >
          🔌 Wallet Connect
        </button>
        <button
          onClick={() => setView('erc20')}
          className={`px-4 py-2 rounded ${view === 'erc20' ? 'bg-green-500 text-white' : 'bg-white border'}`}
        >
          💰 ERC20 Balance
        </button>
      </div>
      <div className="bg-white shadow rounded p-4">
        {view === 'wallet' && <ConnectWallet />}
        {view === 'erc20' && <BasicERC20 />}
      </div>
    </div>
  );
}

// Optional: Mount direkt für Standalone-Test
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('root');
  if (container) {
    createRoot(container).render(<SandpackUI />);
  }
});
