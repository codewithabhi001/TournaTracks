import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setLoading(true);

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/register", {
        name,
        email,
        password,
      });

      if (response.status === 201) {
        toast.success("Registration successful! Please log in.");
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        toast.error(
          "User with this email address already exists. Please log in instead."
        );
      } else {
        console.error("Registration failed:", error);
        toast.error("Registration failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-dark p-4">
      <div className="flex flex-col md:flex-row rounded-lg overflow-hidden shadow-2xl border border-gray-700 w-full max-w-4xl bg-transparent">
        <div className="p-10 text-white w-full md:w-1/2 flex flex-col justify-center backdrop-blur-md bg-black bg-opacity-50">
          <motion.h1
            className="text-center text-4xl font-bold mb-6 text-neon"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Register
          </motion.h1>
          <form onSubmit={handleSubmit}>
            <motion.label
              className="block mb-2 text-neon"
              htmlFor="name"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Name
            </motion.label>
            <motion.input
              className="w-full p-3 mb-4 text-black rounded focus:outline-none neon-input"
              type="text"
              id="name"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            />
            <motion.label
              className="block mb-2 text-neon"
              htmlFor="email"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Email
            </motion.label>
            <motion.input
              className="w-full p-3 mb-4 text-black rounded focus:outline-none neon-input"
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
            <motion.label
              className="block mb-2 text-neon"
              htmlFor="password"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Password
            </motion.label>
            <motion.input
              className="w-full p-3 mb-4 text-black rounded focus:outline-none neon-input"
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            />
            <motion.label
              className="block mb-2 text-neon"
              htmlFor="confirmPassword"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Confirm Password
            </motion.label>
            <motion.input
              className="w-full p-3 mb-4 text-black rounded focus:outline-none neon-input"
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            />
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
              {loading ? "Loading..." : "Register"}
            </motion.button>
            <motion.div
              className="text-center mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              <Link to="/login" className="text-neon">
                Already have an account? Login here
              </Link>
            </motion.div>
          </form>
        </div>
        <div className="p-10 text-white w-full md:w-1/2 flex flex-col justify-center items-center bg-gradient-to-b from-transparent via-black to-transparent">
          <motion.img
            src="Hero3.png"
            alt="Register Illustration"
            className="mb-6 w-full max-w-xs md:max-w-sm neon-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          />
          <motion.p
            className="text-center text-neon"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            Create your account and start your journey with us.
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

export default Register;
