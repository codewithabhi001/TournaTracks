const express = require("express");
const {
  registerUser,
  loginUser,
  forgetPassword,
  resetPassword,
  getSlots, // Make sure to import the getSlots function
} = require("../controllers/authController");

const router = express.Router();

// Register route
router.post("/register", registerUser);

// Login route
router.post("/login", loginUser);

// Forgot password route
router.post("/forget-password", forgetPassword);

// Reset password route
router.post("/reset-password/:resetToken", resetPassword);

// Get slots route
router.get("/GetSlots", getSlots);

module.exports = router;
