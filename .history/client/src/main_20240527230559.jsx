import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import App from "./App";
import "./index.css";
import main from "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <div className="main-bg text-white">
        <div className="glass-effect">
          <App />
        </div>
      </div>
    </NextUIProvider>
  </React.StrictMode>
);
