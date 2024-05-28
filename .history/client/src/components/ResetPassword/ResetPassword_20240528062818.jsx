import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/forgot-password",
        { email }
      );

      if (response.status === 200) {
        toast.success("Password reset link sent to your email.");
        setEmail("");
      } else {
        toast.error("Failed to send reset link. Please try again.");
      }
    } catch (error) {
      console.error("Forgot password error:", error);
      toast.error("Failed to send reset link. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-dark p-4">
      <div className="max-w-3xl flex justify-center items-center w-full">
        <div className="bg-transparent p-8 rounded-md shadow-lg border border-gray-700 text-white w-full max-w-md backdrop-blur-md bg-black bg-opacity-50">
          <motion.h2
            className="text-3xl font-bold text-center mb-8 text-neon"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Forgot Password
          </motion.h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              className="relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <label htmlFor="email" className="text-sm text-neon">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent border-b border-neon focus:outline-none focus:border-neon text-white w-full neon-input"
                required
              />
            </motion.div>
            <motion.button
              type="submit"
              className={`bg-gradient-to-r from-purple-600 via-red-500 to-yellow-500 hover:from-blue-500 hover:to-green-500 text-white py-2 rounded-md w-full transform transition duration-300 hover:scale-105 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              } neon-button`}
              disabled={loading}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              {loading ? "Sending Reset Link..." : "Send Reset Link"}
            </motion.button>
          </form>
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
