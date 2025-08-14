import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white/80 backdrop-blur border-b border-gray-200 mb-6 rounded shadow flex items-center justify-between px-4 py-2">
      <div className="font-bold text-purple-700 text-xl">Web3 Playground</div>
      <div className="flex gap-4">
        <Link className="hover:text-purple-600 font-medium" to="/">Home</Link>
        <Link className="hover:text-purple-600 font-medium" to="/tutorials">Tutorials</Link>
        <Link className="hover:text-purple-600 font-medium" to="/examples">Beispiele</Link>
      </div>
    </nav>
  );
}
