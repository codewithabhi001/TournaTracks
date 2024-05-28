const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
require("dotenv").config();
// const incrementLoginAttempts = require("../middlewares/loginAttempts.js");

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

    res.status(201).json({ message: "Registration successful!" });
  } catch (error) {
    console.error("User registration failed:", error);
    res.status(500).json({ error: "Registration failed. Please try again." });
  }
};

// Your authentication controller
exports.loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Check if a token exists in the request cookies
    const token = req.cookies.token;

    if (token) {
      // If a token exists, update it with a new token
      // Your logic to update the token here

      // Retrieve the user based on the token from the database
      let user = await User.findOne({ token });

      if (!user) {
        // If the user does not exist, create a new user entry with incremented login attempt count and token
        user = new User({
          token,
          email,
          loginAttempts: 1, // Set login attempts to 1 for new user
        });
      } else {
        // If the user exists, increase the login attempt count
        user.loginAttempts += 1;
      }

      // Save or update the user in the database
      await user.save();
    }

    // Proceed with the regular login process
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Check if password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Reset login attempts and update last login
    user.loginAttempts = 0;
    user.lastLogin = new Date();
    await user.save(); // Save user after updating last login

    // Generate JWT
    const newToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Send token in cookie
    res.cookie("token", newToken, { httpOnly: true, secure: true });

    // Send the success response
    res.status(200).json({ message: "Login successful", token: newToken });
  } catch (error) {
    console.error("User login failed:", error);
    // Pass the error to the error handling middleware
    next(error);
  }
};

// Forget Password
exports.forgetPassword = async (req, res) => {
  try {
    const { email } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Generate reset token
    const resetToken = crypto.randomBytes(128).toString("hex");

    // Save reset token and expiration date in user document
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000; // Token expires in 1 hour
    await user.save();

    console.log(`Generated reset token: ${resetToken}`);
    console.log(`Stored reset token in DB: ${user.resetPasswordToken}`);

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.MAIL_USER, // Your email address
        pass: process.env.MAIL_PASS, // Your email password or app password
      },
    });

    // Send email with password reset link
    const mailOptions = {
      from: process.env.MAIL_USER, // Sender's email address
      to: user.email,
      subject: "Password Reset Request",
      html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ccc;">
            <h2 style="color: #333;">Password Reset Request</h2>
            <p>You are receiving this email because you (or someone else) has requested the reset of the password for your account.</p>
            <p>Please click on the button below, or paste this link into your browser to complete the process:</p>
            <p style="text-align: center;">
              <a href="http://localhost:5173/reset-password/${resetToken}" style="display: inline-block; padding: 10px 20px; color: #fff; background-color: #007BFF; border-radius: 5px; text-decoration: none;">Reset Password</a>
            </p>
            <p>If you did not request this, please ignore this email and your password will remain unchanged.</p>
            <p>Thank you,</p>
            <p>Your Company Name</p>
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

    console.log(`Received reset token: ${resetToken}`);

    // Find user by reset token and check expiration
    const user = await User.findOne({
      resetPasswordToken: resetToken,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      console.log("Token is invalid or expired.");
      return res.status(400).json({ message: "Invalid or expired token" });
    }

    console.log("Token is valid. User found:", user.email);

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update user's password and clear reset token
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
