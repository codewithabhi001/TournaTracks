import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

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
    <div className="flex items-center justify-center min-h-screen bg-black mt-14 mb-14 md:mt-0">
      <div className="flex flex-col md:flex-row bg-[#000] rounded-lg overflow-hidden shadow-2xl border border-gray-700 w-full max-w-4xl">
        <div className="p-10 text-white w-full md:w-1/2">
          <h1 className="text-center text-3xl mb-6">Register</h1>
          <form onSubmit={handleSubmit}>
            <label className="block mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full p-3 mb-4 text-black rounded focus:outline-none"
              type="text"
              id="name"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label className="block mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full p-3 mb-4 text-black rounded focus:outline-none"
              type="email"
              id="email"
              placeholder="Johndoe@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label className="block mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full p-3 mb-4 text-black rounded focus:outline-none"
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label className="block mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              className="w-full p-3 mb-4 text-black rounded focus:outline-none"
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className={`bg-gradient-to-r from-purple-500 to-pink-500 hover:from-blue-500 hover:to-green-500 text-white py-2 rounded-md w-full transform transition duration-300 hover:scale-105 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Loading..." : "Register"}
            </button>
            <div className="text-center mt-4">
              <Link to="/login" className="text-pink-500">
                Already have an account? Login here
              </Link>
            </div>
          </form>
        </div>
        <div className="p-10 text-white w-full md:w-1/2 flex flex-col justify-center items-center bg-gray-800 border-l-4 border-pink-500 bg-gradient-to-br from-pink-500 to-purple-500">
          <img
            src="Hero3.png"
            alt="Register Illustration"
            className="mb-6 w-3/4"
          />
          <p className="text-center">
            Create your account and start your journey with us.
          </p>
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
