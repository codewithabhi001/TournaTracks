// src/components/HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const HeroSection = () => {
  return (
    <div className="bg-[#000] text-white">
      <div className="mx-auto flex flex-col md:flex-row justify-center items-center py-24 px-4 md:px-8 lg:px-16 pr-4 md:pr-8 lg:pr-16">
        <motion.div
          className="md:mr-8 text-center md:text-left"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="h-[10vh] flex justify-center flex-col">
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-4 leading-tight">
              <Typewriter
                options={{
                  strings: [
                    "Welcome to the Tournament Hub",
                    "Create, manage, & view live results",
                  ],
                  autoStart: true,
                  loop: true,
                  wrapperClassName: "typewriter-text",
                }}
              />
            </h1>
          </div>
          <p className="text-lg md:text-xl lg:text-3xl text-white w-fit ">
            Your ultimate solution for{" "}
            <span className="highlight">
              organizing and tracking tournaments
            </span>
            . <br /> Seamlessly{" "}
            <span className="highlight">create and manage events</span>, keep
            track of scores, <br /> and provide{" "}
            <span className="highlight">real-time updates</span> to participants
            and fans.
          </p>
          <br />
          <motion.button
            className="bg-gradient-to-r from-[#7b4397] via-[#dc2430] to-[#6a11cb] hover:from-blue-500 text-white font-bold py-2 px-4 rounded glow-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Explore More
          </motion.button>
        </motion.div>
        <motion.div
          className="mt-4 md:mt-0 relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src="/logo2.png"
            alt="Tournament Management"
            className="lg:max-w-[550px] rounded-md hover:scale-95 duration-700 ease-out transform transition-transform animated-logo"
            animate={{ y: [0, -50, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
      <style jsx>{`
        .typewriter-text {
          display: inline-block;
          background: linear-gradient(90deg, #7b4397, #dc2430, #6a11cb);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(
            0 0 20px rgba(108, 17, 203, 0.4)
              /* Match with the button gradient */
          ); /* Adjust glow color */
        }

        .highlight {
          background: linear-gradient(90deg, #7b4397, #dc2430, #6a11cb);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(
            0 0 20px rgba(108, 17, 203, 0.4)
              /* Match with the button gradient */
          ); /* Adjust glow color */
        }

        .glow-button {
          filter: drop-shadow(
            0 0 20px rgba(108, 17, 203, 0.5)
              /* Match with the button gradient */
          ); /* Adjust glow color */
        }

        .animated-logo {
          transition: filter 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
