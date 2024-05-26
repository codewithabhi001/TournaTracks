// ResetPassword.js

import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      toast.error(
        "Passwords do not match. Please make sure both fields match."
      );
      return;
    }

    setLoading(true);

    try {
      const token = window.location.pathname.split("/").pop();

      const response = await axios.post(
        `http://localhost:5000/reset-password/${token}`,
        {
          newPassword,
          token,
        }
      );

      if (response.status === 200) {
        setConfirmPassword("");
        setNewPassword("");

        toast.success(
          "Password reset successful. Please login with your new password."
        );
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        toast.error("Password reset failed. Please try again.");
      }
    } catch (error) {
      console.error("Password reset error:", error);

      if (error.response) {
        if (error.response.status === 404) {
          toast.error("User not found. Please try again.");
        } else if (error.response.status === 400) {
          toast.error("Bad request. Please check your input.");
        } else {
          toast.error("Password reset failed. Please try again.");
        }
      } else {
        toast.error("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black mt-14 mb-14 md:mt-0">
      <div className="max-w-3xl flex justify-center items-center w-full">
        <div className="bg-transparent p-8 rounded-md shadow-lg border border-gray-700 text-white w-full max-w-md">
          <h2 className="text-3xl font-bold text-center mb-8">
            Reset Password
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <label htmlFor="newPassword" className="text-sm">
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="bg-transparent border-b border-gray-500 focus:outline-none focus:border-white text-white w-full"
                required
              />
            </div>
            <div className="relative">
              <label htmlFor="confirmPassword" className="text-sm">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="bg-transparent border-b border-gray-500 focus:outline-none focus:border-white text-white w-full"
                required
              />
            </div>
            <button
              type="submit"
              className={`bg-gradient-to-r from-purple-500 to-pink-500 hover:from-blue-500 hover:to-green-500 text-white py-2 rounded-md w-full transform transition duration-300 hover:scale-105 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Resetting Password..." : "Reset Password"}
            </button>
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

export default ResetPassword;
