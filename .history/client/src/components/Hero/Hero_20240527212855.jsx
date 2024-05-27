// src/components/HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div
      className="relative text-white mt-20 md:mt-36 mb-48 flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('https://c4.wallpaperflare.com/wallpaper/793/573/299/pc-gaming-fantasy-girl-league-of-legends-video-games-video-game-girls-hd-wallpaper-preview.jpg')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "80",
        backgroundPosition: "center center",
      }}
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-40"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
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
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-blue-500 animate-gradient-text">
            Experience the ultimate gaming platform.
            <br />
            Create, manage, and track your tournaments effortlessly.
          </span>
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-row justify-center space-x-4"
        >
          <button className="px-6 py-2 md:px-8 md:py-3 lg:px-10 lg:py-4 bg-gradient-to-r from-green-400 via-green-600 to-green-800 text-base md:text-lg lg:text-xl font-semibold rounded-md hover:bg-green-700 focus:outline-none glow-button">
            Start Now
          </button>
          <button className="px-6 py-2 md:px-8 md:py-3 lg:px-10 lg:py-4 bg-gradient-to-r from-red-400 via-red-600 to-red-800 text-base md:text-lg lg:text-xl font-semibold rounded-md hover:bg-red-700 focus:outline-none glow-button">
            Learn More
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
