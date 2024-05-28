// controllers/authController.js

const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Controller function for user registration
exports.registerUser = async (req, res) => {
  try {
    // Extract registration data from request body
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .json({ error: "User already exists. Please log in." });
    }

    // Create a new user
    const newUser = new User({ name, email, password });

    // Save the new user to the database
    await newUser.save();

    // Generate JWT token
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Send a success response
    res.status(201).json({ message: "Registration successful!", token });
  } catch (error) {
    // Handle errors
    console.error("User registration failed:", error);
    res.status(500).json({ error: "Registration failed. Please try again." });
  }
};
