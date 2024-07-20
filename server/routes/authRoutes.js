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
const authMiddleware = require("../middlewares/authMiddleware");

// Routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/forget-password", forgetPassword);
router.post("/reset-password/:resetToken", resetPassword);
router.get("/getslots", authMiddleware, getSlots);
router.post("/slots", authMiddleware, createSlot);

module.exports = router;
