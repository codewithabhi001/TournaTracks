import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import api from "../../api";

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
      const resetToken = window.location.pathname.split("/").pop();

      const response = await api.post(
        `/api/auth//reset-password/${resetToken}`,
        {
          newPassword,
          resetToken,
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
    <div className="flex items-center justify-center min-h-screen bg-dark p-4">
      <div className="max-w-3xl flex justify-center items-center w-full">
        <div className="bg-transparent p-8 rounded-md shadow-lg border border-gray-700 text-white w-full max-w-md backdrop-blur-md bg-black bg-opacity-50">
          <motion.h2
            className="text-3xl font-bold text-center mb-8 text-neon"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Reset Password
          </motion.h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              className="relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <label htmlFor="newPassword" className="text-sm text-neon">
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="bg-transparent border-b border-neon focus:outline-none focus:border-neon text-white w-full neon-input"
                required
              />
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <label htmlFor="confirmPassword" className="text-sm text-neon">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
              {loading ? "Resetting Password..." : "Reset Password"}
            </motion.button>
          </form>
          <ToastContainer
            position="top-right"
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
