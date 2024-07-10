const mongoose = require("mongoose");

const slotSchema = new mongoose.Schema({
  organizationName: {
    type: String,
    required: true,
  },
  matchTitle: {
    type: String,
    required: true,
  },
  matchDate: {
    type: String, // Changed to String to accept any string input
    required: true,
  },
  teams: {
    type: [String],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  available: {
    type: Boolean,
    default: true,
  },
  // Add other fields as necessary
});

// Export a function to create a dynamic model
module.exports = (collectionName) => mongoose.model(collectionName, slotSchema);
