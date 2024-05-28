const User = require("../models/User");
const bcrypt = require("bcryptjs");

// Controller function for user registration
exports.registerUser = async (req, res) => {
  try {
    // Extract registration data from request body
    const { name, email, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .json({ error: "User with this email address already exists." });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user in the database
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    // Send a success response
    res.status(201).json({ message: "Registration successful!" });
  } catch (error) {
    // Handle errors
    console.error("User registration failed:", error);
    res.status(500).json({ error: "Registration failed. Please try again." });
  }
};
