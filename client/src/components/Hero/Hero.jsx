// src/components/HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";

const HeroSection = () => {
  return (
    <div className="relative text-white flex items-center justify-center min-h-screen bg-cover bg-no-repeat bg-center">
      <div className="overlay absolute top-0 left-0 w-full h-full"></div>
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Your background animations */}
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between mx-auto  px-8 py-12">
        <div className="w-full md:w-auto text-center md:text-left p-8 md:pt-16">
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl lg:text-6xl py-2 font-extrabold mb-4 bg-gradient-to-r from-[#d2add3] via-pink- to-[#aa0df3] bg-clip-text text-transparent animate-gradient drop-shadow-glow"
          >
            Enter the Gaming Arena
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg md:text-2xl lg:text-3xl font-bold mb-6 text-gray-300"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-900 to-blue-500 animate-gradient-text">
              Experience the ultimate gaming platform.
              <br />
              Create, manage, and track your tournaments effortlessly.
            </span>
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-row justify-center md:justify-start space-x-4"
          >
            <button className="btn-13 px-6 py-2 md:px-8 md:py-3 lg:px-10 lg:py-4 text-base md:text-lg lg:text-xl font-semibold rounded-md focus:outline-none">
              Start Now
            </button>
            <button className="btn-13 px-6 py-2 md:px-8 md:py-3 lg:px-10 lg:py-4 text-base md:text-lg lg:text-xl font-semibold rounded-md focus:outline-none">
              Learn More
            </button>
          </motion.div>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 overflow-visible">
          <motion.div
            className="relative max-w-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl shadow-2xl overflow-visible transform transition duration-500 hover:scale-105"
            initial={{ rotate: -5 }}
            whileHover={{ rotate: 0 }}
          >
            <div className="relative z-10">
              <img
                className="w-full h-96 object-cover rounded-xl"
                src="https://img.freepik.com/free-photo/cartoon-woman-wearing-vr-glasses_23-2151136877.jpg?t=st=1717113087~exp=1717116687~hmac=b2661a3e7103f4208e54a152c2e37940a7fce2e768ebc58725ff3fbc77531f6a&w=996"
                alt="Placeholder"
              />
            </div>
            <div className="absolute inset-0 rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-50 rounded-xl blur"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-50 rounded-xl blur"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(HeroSection);
