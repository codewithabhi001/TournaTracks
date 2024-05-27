// src/components/HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative bg-black text-white h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900 via-black to-blue-900 opacity-40"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
        <motion.img
          src="/new-gaming-background.png"
          alt="Gaming Background"
          className="w-full h-full object-cover opacity-20"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-stars-pattern opacity-50"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        ></motion.div>
      </div>

      <div className="relative z-10 text-center p-8 max-w-screen-lg mx-auto">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 bg-gradient-to-r from-green-400 via-pink-500 to-blue-500 bg-clip-text text-transparent animate-gradient drop-shadow-glow"
        >
          Enter the Gaming Arena
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-2xl lg:text-3xl font-bold mb-6 text-gray-300"
        >
          Experience the ultimate gaming platform.
          <br />
          Create, manage, and track your tournaments effortlessly.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4"
        >
          <button className="px-8 py-3 bg-gradient-to-r from-green-400 via-green-600 to-green-800 text-lg font-semibold rounded-md hover:bg-green-700 focus:outline-none glow-button">
            Start Now
          </button>
          <button className="px-8 py-3 bg-gradient-to-r from-red-400 via-red-600 to-red-800 text-lg font-semibold rounded-md hover:bg-red-700 focus:outline-none glow-button">
            Learn More
          </button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-0 w-full flex justify-center items-center space-x-4 p-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        <img
          src="/icon-controller.png"
          alt="Controller"
          className="w-12 h-12 md:w-16 md:h-16 animate-pulse"
        />
        <img
          src="/icon-headset.png"
          alt="Headset"
          className="w-12 h-12 md:w-16 md:h-16 animate-pulse"
        />
        <img
          src="/icon-trophy.png"
          alt="Trophy"
          className="w-12 h-12 md:w-16 md:h-16 animate-pulse"
        />
      </motion.div>
    </div>
  );
};

export default HeroSection;
