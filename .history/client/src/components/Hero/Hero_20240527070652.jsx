import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative bg-black text-white min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Background gradients and animations */}
        {/* Add your background elements here */}
      </div>

      <div className="relative z-10 text-center p-8 max-w-screen-lg mx-auto">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 bg-gradient-to-r from-green-400 via-pink-500 to-blue-500 bg-clip-text text-transparent animate-gradient drop-shadow-glow"
        >
          Enter the Gaming Arena
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-2xl lg:text-3xl font-bold mb-6 text-gray-300"
          style={{
            background: "linear-gradient(45deg, #7b4397, #dc2430, #6a11cb)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Experience the ultimate gaming platform.
          <br />
          Create, manage, and track your tournaments effortlessly.
        </motion.p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-green-400 via-green-600 to-green-800 text-lg font-semibold rounded-md hover:bg-green-700 focus:outline-none glow-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Now
          </motion.button>
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-red-400 via-red-600 to-red-800 text-lg font-semibold rounded-md hover:bg-red-700 focus:outline-none glow-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
