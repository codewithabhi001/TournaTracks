// main.tsx or main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <main className=" bg-gradient-to-r from-[#0b0b0b] via-[#3c0202] to-[#000000] text-white">
        <App />
      </main>
    </NextUIProvider>
  </React.StrictMode>
);