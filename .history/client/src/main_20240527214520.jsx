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
       <div
       className="background-image"
       style={{
         backgroundImage:
           'url("https://cdn.discordapp.com/attachments/992804780424577044/1244684557899268159/futuristic-home-8397004_1280.png?ex=66560253&is=6654b0d3&hm=accf15a9eaeb64346aeeb791f343005b07fff6f18b673205e62d0eee53377deb&")'
       }}
     />
        <App />
      </main>
    </NextUIProvider>
  </React.StrictMode>
);
