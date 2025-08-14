import React from "react";

const tutorials = [
  { title: "Intro to Web3", file: "01_intro_to_web3.md" },
  { title: "Smart Contracts & Solidity", file: "02_smart_contracts_solidity.md" },
  { title: "Deploy with Hardhat", file: "03_deploy_with_hardhat.md" },
  { title: "Frontend mit ethers & React", file: "04_frontend_with_ethers_react.md" },
  { title: "Unit Tests & Security", file: "05_unit_tests_security.md" },
  { title: "Token Standards", file: "06_token_standards.md" },
  { title: "DApp Hosting & Verification", file: "07_dapp_hosting_verification.md" },
  { title: "Cross-Chain & Advanced Patterns", file: "08_cross_chain_and_advanced_patterns.md" },
  { title: "Governance & Tokenomics", file: "09_governance_and_tokenomics.md" },
  { title: "Deployment Strategies & Security", file: "10_deployment_strategies_and_security.md" },
  { title: "Final Considerations & Roadmap", file: "11_final_considerations_and_roadmap.md" }
];

export default function TutorialLinks() {
  return (
    <section className="bg-white rounded shadow p-6 mb-6 border-l-4 border-green-400">
      <h2 className="text-xl font-bold mb-4 text-green-700">Web3 Tutorials</h2>
      <ul className="list-disc ml-6">
        {tutorials.map(t => (
          <li key={t.file}>
            <a
              href={`/tutorials/${t.file}`}
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
