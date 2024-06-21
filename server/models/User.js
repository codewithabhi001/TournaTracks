const mongoose = require("mongoose");

const loginAttemptSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  success: {
    type: Boolean,
    required: true,
  },
  ipAddress: {
    type: String,
    required: true,
  },
});

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    resetPasswordToken: {
      type: String,
      default: null,
    },
    resetPasswordExpires: {
      type: Date,
      default: null,
    },
    lastLogin: {
      type: Date,
      default: null,
    },
    loginAttempts: {
      type: [loginAttemptSchema],
      default: [],
    },
    registrationDate: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
