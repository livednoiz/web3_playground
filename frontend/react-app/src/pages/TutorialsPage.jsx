import React from "react";
import TutorialLinks from "../components/TutorialLinks";

export default function TutorialsPage() {
  return (
    <section className="bg-white rounded shadow p-6 border-l-4 border-blue-400">
      <h2 className="text-xl font-bold mb-4 text-blue-700">Tutorials</h2>
      <TutorialLinks />
    </section>
  );
}
