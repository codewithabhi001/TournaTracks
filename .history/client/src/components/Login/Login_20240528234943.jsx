import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../../ToastifyCustom.css"; // Import the custom styles
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { motion } from "framer-motion";
import "./Login.css"; // Create a separate CSS file for custom styles
import api from "../../api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when login starts

    try {
      const response = await api.post(
        "/api/auth/login",
        { email, password },
        { withCredentials: true }
      );

      if (response.status === 200) {
        // Login successful
        toast.success("Login successful.");
        const cookies = response.headers["set-cookie"];

        if (cookies) {
          sessionStorage.setItem("sessionCookies", JSON.stringify(cookies));
          console.log("Cookies stored in session storage:", cookies);
        }

        setTimeout(() => {
          navigate("/"); // Redirect to home page
        }, 2000);
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // Invalid credentials
        toast.error("Invalid email or password.");
      } else {
        // Other login errors
        console.error("Login error:", error);
        toast.error("Login failed. Please try again!");
      }
    } finally {
      setLoading(false); // Set loading to false when login process completes
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
            Login
          </motion.h1>
          <form onSubmit={handleSubmit}>
            <motion.label
              className="block mb-2 text-neon"
              htmlFor="email"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Please Enter your Account details
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
            <div className="text-right mb-4">
              <Link to="/forget-password" className="text-neon">
                Forgot Password
              </Link>
            </div>
            <motion.button
              type="submit"
              className={`bg-gradient-to-r from-purple-600 via-red-500 to-yellow-500 hover:from-blue-500 hover:to-red-500 text-white py-2 rounded-md w-full transform transition duration-300 hover:scale-105 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              } neon-button`}
              disabled={loading}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              {loading ? "Loading..." : "Login"}
            </motion.button>
            <motion.div
              className="flex justify-around my-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              <i className="fab fa-google text-2xl cursor-pointer hover:text-pink-500"></i>
              <i className="fab fa-github text-2xl cursor-pointer hover:text-pink-500"></i>
              <i className="fab fa-facebook text-2xl cursor-pointer hover:text-pink-500"></i>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.5 }}
            >
              <Link to="/register" className="text-neon">
                Create an account
              </Link>
            </motion.div>
          </form>
        </div>
        <div className="p-10 text-white w-full md:w-1/2 flex flex-col justify-center items-center bg-gradient-to-b from-transparent via-black to-transparent">
          <motion.img
            src="Hero3.png"
            alt="Login Illustration"
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
            Welcome back! Please enter your details to continue.
          </motion.p>
        </div>
      </div>
      <ToastContainer
        position="top-center" // Changed to top-center for better responsiveness
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

export default Login;
