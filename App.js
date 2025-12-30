import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  return (
    <div>
      <h1 className="color">Hello, React!</h1>
      <button onClick={() => alert("zayed is a coder")}>
        press me bro
      </button>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);