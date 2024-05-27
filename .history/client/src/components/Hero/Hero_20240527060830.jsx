// src/components/HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden">
      {/* Glowing Background SVG */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 800"
      >
        <defs>
          <radialGradient
            id="grad1"
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            <stop
              offset="0%"
              style={{ stopColor: "#FF00FF", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#000000", stopOpacity: 0 }}
            />
          </radialGradient>
        </defs>
        <rect width="800" height="800" fill="url(#grad1)" />
      </svg>

      <div className="relative z-10 text-center p-6">
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-extrabold mb-4"
        >
          Gaming Live Results Manager
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-2xl mb-6"
        >
          Manage and view live results of your favorite games effortlessly.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="px-8 py-3 bg-purple-600 text-lg font-semibold rounded-md hover:bg-purple-700 focus:outline-none"
        >
          Get Started
        </motion.button>
      </div>
    </div>
  );
};

export default HeroSection;
