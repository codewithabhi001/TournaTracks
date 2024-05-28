const User = require("../models/User");

const recordLoginAttempt = async (req, res, next) => {
  try {
    const { email } = req.body;
    const ipAddress =
      req.headers["x-forwarded-for"] || req.socket.remoteAddress; // Capture the user's IP address
    const user = await User.findOne({ email });

    if (user) {
      const success = req.loginSuccess || false;
      user.loginAttempts.push({
        date: new Date(),
        success,
        ipAddress,
      });
      await user.save();
    }

    if (next && typeof next === "function") {
      return next(); // Ensure next is a function before calling
    }
    throw new Error("Next function is not provided or invalid");
  } catch (error) {
    console.error("Error recording login attempt:", error);
    // Pass the error to the error handling middleware
    if (next && typeof next === "function") {
      return next(error); // Ensure next is a function before calling
    }
    throw error;
  }
};

module.exports = recordLoginAttempt;
