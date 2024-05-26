import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

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
    <div className="flex items-center justify-center min-h-screen bg-black mt-14 mb-14 md:mt-0">
      <div className="flex flex-col md:flex-row bg-[#000] rounded-lg overflow-hidden shadow-2xl border border-gray-700 w-full max-w-4xl">
        <div className="p-10 text-white w-full md:w-1/2">
          <h1 className="text-center text-3xl mb-6">Forgot Password</h1>
          <form onSubmit={handleSubmit}>
            <label className="block mb-2" htmlFor="email">
              Please enter your email address
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
            <button
              type="submit"
              className={`bg-gradient-to-r from-[#7b4397] via-[#dc2430] to-[#6a11cb] hover:from-blue-500 hover:to-green-500 text-white py-2 rounded-md w-full transform transition duration-300 hover:scale-105 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Resetting Password..." : "Reset Password"}
            </button>
            <div className="text-center mt-4">
              <Link to="/login" className="text-pink-500">
                Remembered your password? Login here
              </Link>
            </div>
          </form>
        </div>
        <div className="p-10 text-white w-full md:w-1/2 flex flex-col justify-center items-center bg-gradient-to-r from-[#7b4397] via-[#dc2430] to-[#6a11cb]">
          <img
            src="Hero3.png"
            alt="Forgot Password Illustration"
            className="mb-6 w-3/4"
          />
          <p className="text-center">
            Enter your email address and we will send you a link to reset your
            password.
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

export default ForgotPassword;
