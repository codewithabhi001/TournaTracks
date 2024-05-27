import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when login starts

    try {
      const response = await axios.post("http://localhost:5000/auth/login", {
        email,
        password,
      });

      if (response.status === 200) {
        // Login successful
        toast.success("Login successful.");
        const cookies = response.headers["set-cookie"];

        if (cookies) {
          sessionStorage.setItem("sessionCookies", JSON.stringify(cookies));
          console.log("Cookies stored in session storage:", cookies);
        }

        // Redirect or perform other actions upon successful login
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
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col md:flex-row rounded-lg overflow-hidden shadow-2xl w-full max-w-4xl">
        <div className="p-10 text-white w-full md:w-1/2">
          <h1 className="text-center text-3xl mb-6">Login</h1>
          <form onSubmit={handleSubmit}>
            <label className="block mb-2 text-gray-300" htmlFor="email">
              Please Enter your Account details
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
            <input
              className="w-full p-3 mb-4 text-black rounded focus:outline-none"
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="text-right mb-4">
              <Link to="/forget-password" className="text-pink-500">
                Forgot Password
              </Link>
            </div>
            <button
              type="submit"
              className={`bg-gradient-to-r from-[#7b4397] via-[#dc2430] to-[#6a11cb] hover:from-blue-500 hover:to-green-500 text-white py-2 rounded-md w-full transform transition duration-300 hover:scale-105 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Loading..." : "Login"}
            </button>
            <div className="flex justify-around my-4">
              <i className="fab fa-google text-2xl cursor-pointer hover:text-pink-500"></i>
              <i className="fab fa-github text-2xl cursor-pointer hover:text-pink-500"></i>
              <i className="fab fa-facebook text-2xl cursor-pointer hover:text-pink-500"></i>
            </div>
            <div className="text-center">
              <Link to="#" className="text-pink-500">
                Create an account
              </Link>
            </div>
          </form>
        </div>
        <div className="p-10 text-white w-full md:w-1/2 flex flex-col justify-center items-center">
          <img
            src="Hero3.png"
            alt="Login Illustration"
            className="mb-6 w-3/4"
          />
          <p className="text-center">
            Welcome back! Please enter your details to continue.
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

export default Login;
