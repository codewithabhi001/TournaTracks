const User = require("../models/User");
const Slot = require("../models/Slot");
const createDynamicSlotModel = require("../models/Slot");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
require("dotenv").config();
const recordLoginAttempt = require("../middlewares/recordLoginAttempt");


// Register User
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      registrationDate: new Date(),
    });
    await newUser.save();

    // Construct the collection name based on the user's email
    const collectionName = `slots_${newUser.email.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase()}`;

    // Create a new dynamic model for the collection
    const DynamicSlot = createDynamicSlotModel(collectionName);

    // Optional: Create an initial document in the new collection (if needed)
    const initialSlot = new DynamicSlot({
      organizationName: newUser.name,
      matchTitle: "Initial Match",
      matchDate: new Date().toISOString(),
      teams: ["Team A", "Team B"]
    });

    await initialSlot.save();

    res.status(201).json({ message: "Registration successful!" });
  } catch (error) {
    console.error("User registration failed:", error);
    res.status(500).json({ error: "Registration failed. Please try again." });
  }
};

// Login User
exports.loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      req.loginSuccess = false;
      return recordLoginAttempt(req, res, () => {
        res.status(401).json({ message: "Invalid email or password" });
      });
    }

    // Check if password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      req.loginSuccess = false;
      return recordLoginAttempt(req, res, () => {
        res.status(401).json({ message: "Invalid email or password" });
      });
    }

    user.lastLogin = new Date();
    req.loginSuccess = true;
    await recordLoginAttempt(req, res, async () => {
      await user.save();

      // Generate JWT
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      // Send token in cookie
      res.cookie("token", token, { httpOnly: true, secure: true });

      res.status(200).json({ message: "Login successful", token });
    });
  } catch (error) {
    console.error("User login failed:", error);
    res.status(500).json({ error: "Login failed. Please try again." });
  }
};

// Forget Password
exports.forgetPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const resetToken = crypto.randomBytes(128).toString("hex");

    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000; // Token expires in 1 hour
    await user.save();

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const baseURL =
      process.env.NODE_ENV === "production"
        ? "https://www.bgmiscrims.site"
        : "http://localhost:5173";

    const mailOptions = {
      from: process.env.MAIL_USER,
      to: user.email,
      subject: "Password Reset Request",
      html: `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; max-width: 600px; margin: auto; padding: 20px; background: #1a1a1a; color: #fff; border: 1px solid #333; border-radius: 10px;">
        <h2 style="color: #e0e0e0;">Password Reset Request</h2>
        <p style="color: #c7c7c7;">You are receiving this email because you (or someone else) has requested the reset of the password for your account.</p>
        <p style="color: #c7c7c7;">Please click on the button below, or paste this link into your browser to complete the process:</p>
        <p style="text-align: center; margin: 20px 0;">
          <a href="${baseURL}/reset-password/${resetToken}" style="display: inline-block; padding: 10px 20px; color: #fff; background-color: #007BFF; border-radius: 5px; text-decoration: none; font-weight: bold; box-shadow: 0 0 5px #007BFF, 0 0 10px #007BFF, 0 0 20px #007BFF; transition: box-shadow 0.3s;">
            Reset Password
          </a>
        </p>
        <p style="color: #c7c7c7;">If you did not request this, please ignore this email and your password will remain unchanged.</p>
        <p style="color: #c7c7c7;">Thank you,</p>
        <p style="color: #e0e0e0; font-size: 1.2em; font-weight: bold;">TournaTracks</p>
      </div>
    `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Password reset link sent to email" });
  } catch (error) {
    console.error("Forgot password error:", error);
    res.status(500).json({ error: "An unexpected error occurred" });
  }
};

// Reset Password
exports.resetPassword = async (req, res) => {
  try {
    const { resetToken } = req.params;
    const { newPassword } = req.body;

    const user = await User.findOne({
      resetPasswordToken: resetToken,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid or expired token" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    user.password = hashedPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    res.status(200).json({ message: "Password reset successfully" });
  } catch (error) {
    console.error("Reset password error:", error);
    res.status(500).json({ error: "An unexpected error occurred" });
  }
};

exports.getSlots = async (req, res) => {
  try {
    // Add logging to understand the function's execution flow
    console.log("Fetching slots...");

    // Attempt to fetch all slots
    const slots = await Slot.find();

    // Log the result
    console.log("Slots fetched successfully:", slots);

    // Send the fetched slots in the response
    res.status(200).json(slots);
  } catch (error) {
    // Log the error to understand what went wrong
    console.error("Error fetching slots:", error);

    // Send an appropriate error response
    res.status(500).json({ error: "Internal Server Error" });
  }
};
// Create new slot


// Create new slot
exports.createSlot = async (req, res) => {
  try {
    const { organizationName, matchTitle, matchDate, teams, email } = req.body;

    // Validate the input
    if (
      !organizationName ||
      !matchTitle ||
      !matchDate ||
      !teams ||
      teams.length === 0 ||
      !email
    ) {
      return res.status(400).json({ error: "Please fill out all fields." });
    }

    // Construct the collection name based on the user's email
    const collectionName = `slots_${email.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase()}`;

    // Create a new dynamic model for the collection
    const DynamicSlot = createDynamicSlotModel(collectionName);

    // Create a new slot
    const newSlot = new DynamicSlot({
      organizationName,
      matchTitle,
      matchDate,
      teams,
      createdAt: new Date(),
    });

    await newSlot.save();

    res.status(200).json({ message: "Slot successfully created!" });
  } catch (error) {
    console.error("Error during slot creation:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
