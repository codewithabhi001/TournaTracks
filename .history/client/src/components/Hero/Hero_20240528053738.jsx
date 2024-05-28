import React from "react";
import { motion } from "framer-motion";
import "./HeroSection.css"; // Import CSS file for styling

const HeroSection = () => {
  return (
    <div className="hero-section relative">
      {/* Background */}
      <div className="bg-container">
        <div className="overlay"></div>
        <div className="stars-pattern"></div>
      </div>

      {/* Content */}
      <div className="content">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="title"
        >
          Enter the Gaming Arena
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="subtitle"
        >
          Experience the ultimate gaming platform.
          <br />
          Create, manage, and track your tournaments effortlessly.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="button-container"
        >
          <button className="btn start-btn">Start Now</button>
          <button className="btn learn-btn">Learn More</button>
        </motion.div>
      </div>
    </div>
  );
};

export default React.memo(HeroSection);
