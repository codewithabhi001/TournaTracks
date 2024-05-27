// src/pages/LoginPage.jsx
import React from "react";
import { motion } from "framer-motion";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-black p-4">
      <motion.div
        className="flex flex-col lg:flex-row items-center w-full lg:w-3/4 xl:w-2/3 bg-gray-800 rounded-lg shadow-lg overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <motion.div
            className="flex flex-col justify-center items-center h-full w-full p-8 bg-gradient-to-r from-[#1e1e1e] to-[#121212] rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">Login</h2>
            <form className="w-full max-w-sm">
              <div className="mb-4">
                <label
                  className="block text-gray-300 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-700 rounded shadow-sm bg-gray-800 text-white"
                  id="username"
                  type="text"
                  placeholder="Username"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-300 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-700 rounded shadow-sm bg-gray-800 text-white"
                  id="password"
                  type="password"
                  placeholder="******************"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-gradient-to-r from-green-400 via-green-600 to-green-800 hover:from-green-500 hover:via-green-700 hover:to-green-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline glow-button"
                  type="button"
                >
                  Sign In
                </button>
                <a
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
            </form>
          </motion.div>
        </div>
        <motion.div
          className="hidden lg:flex w-full lg:w-1/2 bg-cover bg-center relative"
          style={{ backgroundImage: "url('/path/to/your/image.jpg')" }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-3/4 md:w-2/3 lg:w-1/2 p-8 bg-gradient-to-r from-[#1e1e1e] to-[#121212] rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {/* Your animated illustration or cartoon can go here */}
              <img src="/path/to/illustration.png" alt="Illustration" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
