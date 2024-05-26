// src/AnimatedPlugin.js
import React from "react";
import "./App.css";

const AnimatedPlugin = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="relative text-9xl font-bold">
        <span className="animate-move text-gradient">P</span>
        <span className="animate-move animation-delay-100 text-gradient">
          L
        </span>
        <span className="animate-move animation-delay-200 text-gradient">
          U
        </span>
        <span className="animate-move animation-delay-300 text-gradient">
          G
        </span>
        <span className="animate-move animation-delay-400 text-gradient">
          I
        </span>
        <span className="animate-move animation-delay-500 text-gradient">
          N
        </span>
      </div>
    </div>
  );
};

export default AnimatedPlugin;
