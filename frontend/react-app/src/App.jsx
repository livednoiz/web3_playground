import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import SandpackExampleViewer from "./components/SandpackExampleViewer";
import InfoPanel from "./components/InfoPanel";
import TutorialLinks from "./components/TutorialLinks";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Navbar from "./components/Navbar";

function App() {
  const [themeClass, setThemeClass] = useState("bg-gradient-to-br from-blue-50 to-purple-100 text-gray-900");
  return (
  <BrowserRouter>
    <main className={`min-h-screen p-6 font-sans ${themeClass}`}>
      <div className="max-w-2xl mx-auto">
        <Navbar />
        <ThemeSwitcher onThemeChange={setThemeClass} />
        <InfoPanel />
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
        <TutorialLinks />
        <section className="bg-white rounded shadow p-6 border-l-4 border-blue-400">
          <h2 className="text-xl font-bold mb-4 text-blue-700">Interaktive Beispiele</h2>
          <SandpackExampleViewer />
        </section>
      </div>
    </main>
  </BrowserRouter>
  );
}
export default App;
// This code sets up a simple React application that includes a component called `SandpackExampleViewer`.
// The `SandpackExampleViewer` component allows users to select between different code examples
// and view them in a live code editor using Sandpack.
// The `SandpackExampleViewer` component is imported from the `./components/SandpackExampleViewer` file.
// The `SandpackExampleViewer` component contains a dropdown menu that allows users to select between different examples,
// and the selected example is displayed in a live code editor using the `Sandpack` component.
// The `Sandpack` component is a live code editor that allows users to run and modify the code in real-time.
// The `Sandpack` component is imported from the `@codesandbox/sandpack-react` package,
// which provides a simple way to create interactive code examples in React applications.
// The `files` property of the `Sandpack` component is set to the selected example's code,
// and the `options` property is used to customize the appearance of the code editor.
// The `template` property is set to "react" to indicate that the examples are written in React.
// The `showTabs`, `showConsole`, and `showNavigator` options are set to true to display the code editor tabs,
// console, and file navigator, respectively.
// This code is a simple example of how to use Sandpack to create interactive code examples in a React application.
// It allows users to select between different examples and view them in a live code editor.
// The `Sandpack` component is a powerful tool for creating interactive code examples,
// and it can be customized further to suit the needs of the application.
// The `SandpackExampleViewer` component can be used in a larger React application
// to provide users with a way to explore different code examples and learn about React and web3 development.
// The `Sandpack` component is a powerful tool for creating interactive code examples,
// and it can be customized further to suit the needs of the application.
// The `SandpackExampleViewer` component can be used in a larger React application
// to provide users with a way to explore different code examples and learn about React and web3 development.
// The `Sandpack` component is a powerful tool for creating interactive code examples,
// and it can be customized further to suit the needs of the application.
// The `SandpackExampleViewer` component can be used in a larger React application
// to provide users with a way to explore different code examples and learn about React and web3 development.