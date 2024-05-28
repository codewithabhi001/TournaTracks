// server.js

// Import required modules
const express = require("express");

// Create an Express application
const app = express();

// Define a route
app.get("/", (req, res) => {
  res.send("Hello from the backend server!");
});

// Start the server
const PORT = process.env.PORT || 5000; // Use the provided port or default to 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
