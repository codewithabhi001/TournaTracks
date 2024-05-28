// middleware/loginAttempts.js
const User = require("../models/User.js");

module.exports = async function incrementLoginAttempts(req, res, next) {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      user.loginAttempts += 1;
      await user.save();
    }
    return next(); // Ensure next is returned here
  } catch (error) {
    console.error("Error incrementing login attempts:", error);
    return res.status(500).json({ error: "An unexpected error occurred" });
  }
};