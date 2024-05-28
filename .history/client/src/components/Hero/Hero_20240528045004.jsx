import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div
      className="relative text-white flex items-center justify-center h-screen bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url('girls.png')`,
      }}
    >
      <div
        className="overlay"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.1)",
        }}
      ></div>
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

      <div className="relative z-10 text-left p-8 max-w-screen-xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between">
        <div className="md:w-3/4 lg:w-2/3">
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 bg-gradient-to-r from-[#be499d] via-pink-500 to-[#7a036c] bg-clip-text text-transparent animate-gradient drop-shadow-glow"
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
            className="flex flex-row space-x-4"
          >
            <button className="btn-13 px-6 py-2 md:px-8 md:py-3 lg:px-10 lg:py-4 text-base md:text-lg lg:text-xl font-semibold rounded-md focus:outline-none">
              Start Now
            </button>
            <button className="btn-13 px-6 py-2 md:px-8 md:py-3 lg:px-10 lg:py-4 text-base md:text-lg lg:text-xl font-semibold rounded-md focus:outline-none">
              Learn More
            </button>
          </motion.div>
        </div>
        <div className="md:w-1/4 lg:w-1/3 mt-8 md:mt-0 flex justify-center">
          {/* Logo image */}
          <img src="logo.png" alt="Logo" className="w-64 h-64 object-contain" />
        </div>
      </div>
    </div>
  );
};

export default React.memo(HeroSection);
