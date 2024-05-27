import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/forget-password",
        { email }
      );

      if (response.status === 200) {
        toast.success("Password reset email sent. Please check your inbox.");
        setEmail("");
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        toast.error("User not found. Please enter a valid email.");
      } else {
        toast.error(
          "Failed to send password reset email. Please try again later."
        );
      }
      console.error("Forgot password error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-4">
      <div className="flex flex-col md:flex-row rounded-lg overflow-hidden shadow-2xl border border-gray-700 w-full max-w-4xl bg-gray-800">
        <div className="p-10 text-white w-full md:w-1/2 flex flex-col justify-center">
          <motion.h1
            className="text-center text-3xl mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Forgot Password
          </motion.h1>
          <form onSubmit={handleSubmit}>
            <motion.label
              className="block mb-2"
              htmlFor="email"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Please enter your email address
            </motion.label>
            <motion.input
              className="w-full p-3 mb-4 text-black rounded focus:outline-none"
              type="email"
              id="email"
              placeholder="Johndoe@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            />
            <motion.button
              type="submit"
              className={`bg-gradient-to-r from-purple-600 via-red-500 to-yellow-500 hover:from-blue-500 hover:to-red-500 text-white py-2 rounded-md w-full transform transition duration-300 hover:scale-105 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              {loading ? "Resetting Password..." : "Reset Password"}
            </motion.button>
            <motion.div
              className="text-center mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              <Link to="/login" className="text-pink-500">
                Remembered your password? Login here
              </Link>
            </motion.div>
          </form>
        </div>
        <div className="p-10 text-white w-full md:w-1/2 flex flex-col justify-center items-center bg-gradient-to-b from-gray-800 to-gray-900">
          <motion.img
            src="Hero3.png"
            alt="Forgot Password Illustration"
            className="mb-6 w-full max-w-xs md:max-w-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          />
          <motion.p
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            Enter your email address and we will send you a link to reset your
            password.
          </motion.p>
        </div>
      </div>
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
  );
};

export default ForgotPassword;
