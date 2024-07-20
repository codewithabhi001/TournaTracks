const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  forgetPassword,
  resetPassword,
  getSlots,
  createSlot,
} = require("../controllers/authController");

// Routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/forget-password", forgetPassword);
router.post("/reset-password/:resetToken", resetPassword);
router.get("/getslots", getSlots); // Ensure this matches your endpoint
router.post("/slots", createSlot);

module.exports = router;
