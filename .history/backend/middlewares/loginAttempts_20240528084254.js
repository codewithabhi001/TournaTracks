// middleware/loginAttempts.js
const User = require("../models/User");

module.exports = async function incrementLoginAttempts(req, res, next) {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      user.loginAttempts += 1;
      await user.save();
    }
    if (next && typeof next === "function") {
      return next(); // Ensure next is a function before calling
    }
    throw new Error("Next function is not provided or invalid");
  } catch (error) {
    console.error("Error incrementing login attempts:", error);
    // Pass the error to the error handling middleware
    return next(error);
  }
};
