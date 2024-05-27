// src/components/HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden">
      {/* Glowing Background SVG */}
      <svg
        className="absolute inset-0 w-full h-full opacity-50"
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

      {/* Animated Live Results Text */}
      <motion.div
        className="absolute top-10 left-0 right-0 text-2xl font-bold uppercase"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        <div className="inline-block px-4">Live Results</div>
      </motion.div>

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
