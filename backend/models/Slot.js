const mongoose = require("mongoose");

const slotSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  available: {
    type: Boolean,
    required: true,
  },
  // Add other fields as necessary
});

const Slot = mongoose.model("Slot", slotSchema);

module.exports = Slot;
