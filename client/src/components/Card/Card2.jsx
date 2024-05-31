// src/components/Card.jsx
import React from "react";
import { motion } from "framer-motion";

const Card = () => {
  return (
    <motion.div
      className="relative max-w-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl shadow-lg overflow-visible transform transition duration-500 hover:scale-105"
      initial={{ rotate: -10 }}
      whileHover={{ rotate: 0 }}
    >
      <div className="relative">
        <img
          className="w-full h-64 object-cover rounded-t-xl"
          src="https://via.placeholder.com/300"
          alt="Placeholder"
        />
        <div className="absolute top-4 right-4 bg-gray-900 shadow-lg rounded-lg p-2 w-28 text-center transform translate-x-1/2 -translate-y-1/2">
          <p className="text-blue-500 font-semibold">Followers</p>
          <p className="text-gray-300">1200</p>
        </div>
        <div className="absolute bottom-4 left-[-1rem] bg-gray-900 shadow-lg rounded-lg p-2 w-28 text-center transform -translate-x-1/2 translate-y-1/2">
          <p className="text-red-500 font-semibold">Subscribers</p>
          <p className="text-gray-300">300</p>
        </div>
      </div>
      <div className="p-4"></div>
    </motion.div>
  );
};

export default Card;
