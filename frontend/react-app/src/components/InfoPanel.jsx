import React from "react";

export default function InfoPanel() {
  return (
    <section className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6 rounded">
      <h2 className="text-lg font-bold mb-2">Willkommen im Web3 Playground!</h2>
      <p className="mb-2">
        Hier kannst du interaktive Web3-Beispiele direkt im Browser ausprobieren. Die Sandbox nutzt <b>Sandpack</b>, um React- und Web3-Code live auszuführen.
      </p>
      <ul className="list-disc ml-6 mb-2">
        <li>Wallet-Interaktionen und Smart Contracts testen</li>
        <li>Code live editieren und Ergebnisse direkt sehen</li>
        <li>Mit Tutorials und Beispielen lernen</li>
      </ul>
      <p className="text-sm text-gray-600">Weitere Infos und Tutorials findest du im Hauptmenü und in der Projektübersicht.</p>
    </section>
  );
}
