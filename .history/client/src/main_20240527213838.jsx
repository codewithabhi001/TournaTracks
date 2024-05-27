// main.tsx or main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <main
        className="main-bg"
        style={{
          backgroundImage:
            'url("https://c4.wallpaperflare.com/wallpaper/28/820/856/cyber-science-fiction-digital-art-concept-art-cyberpunk-hd-wallpaper-preview.jpg")',
        }}
      >
        <App />
      </main>
    </NextUIProvider>
  </React.StrictMode>
);
