// src/components/HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden">
      <div className="relative z-10 text-center p-6">
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-gradient"
        >
          Welcome to the Ultimate Gaming Experience
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-2xl mb-6"
        >
          Your ultimate solution for organizing and tracking tournaments.
          Seamlessly create and manage events, keep track of scores, and provide
          real-time updates to participants and fans.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center space-x-4"
        >
          <button className="px-8 py-3 bg-purple-600 text-lg font-semibold rounded-md hover:bg-purple-700 focus:outline-none">
            Get Started
          </button>
          <button className="px-8 py-3 bg-blue-600 text-lg font-semibold rounded-md hover:bg-blue-700 focus:outline-none">
            Learn More
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-8"
        >
          <p className="text-md md:text-lg">
            Our tool provides real-time updates and comprehensive management
            features for gamers. Stay ahead with live stats and detailed
            analytics.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
