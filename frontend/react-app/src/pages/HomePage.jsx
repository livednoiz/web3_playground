import React from "react";

export default function HomePage() {
  return (
    <section className="bg-white rounded shadow p-6 mb-6 border-l-4 border-purple-400">
      <h1 className="text-3xl font-extrabold mb-2 text-purple-700">Web3 Playground</h1>
      <p className="mb-4 text-gray-700 text-lg">
        <b>Ziel:</b> Mit diesem Playground kannst du Web3-Technologien interaktiv und praxisnah erleben. Probiere Wallet-Interaktionen, Smart Contracts und Blockchain-Features direkt im Browser aus – ohne Setup!
      </p>
      <ul className="list-disc ml-6 text-gray-600">
        <li>Live-Editor für Web3-Code (React, ethers.js, Solidity)</li>
        <li>Beispiele für Wallet-Connect, Token-Interaktionen und mehr</li>
        <li>Direkte Integration von Tutorials und Lerninhalten</li>
        <li>Modernes, responsives Design für Desktop & Mobile</li>
      </ul>
    </section>
  );
}
