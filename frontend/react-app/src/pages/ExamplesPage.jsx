import React from "react";
import SandpackExampleViewer from "../components/SandpackExampleViewer";

export default function ExamplesPage() {
  return (
    <section className="bg-white rounded shadow p-6 border-l-4 border-green-400">
      <h2 className="text-xl font-bold mb-4 text-green-700">Interaktive Beispiele</h2>
      <SandpackExampleViewer />
    </section>
  );
}
