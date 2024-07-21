const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  forgetPassword,
  resetPassword,
  getSlots,
  createSlot,
  getUserDetails // Import the getUserDetails controller function
} = require("../controllers/userController"); // Renamed to userController
const authMiddleware = require("../middlewares/authMiddleware");

// Routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/forget-password", forgetPassword);
router.post("/reset-password/:resetToken", resetPassword);
router.get("/getslots", authMiddleware, getSlots);
router.post("/createslots", authMiddleware, createSlot);
router.get("/me", authMiddleware, getUserDetails); // Added route to get user details

module.exports = router;
