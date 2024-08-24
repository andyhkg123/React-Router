import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-red-500 text-3xl font-bold underline">
        React router dom
      </h1>
    </>
  );
}

export default App;
