const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const requestIp = require("request-ip"); // Import the request-ip middleware

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(requestIp.mw()); // Add the request-ip middleware here

// app.use(
//   cors({
//     origin: "http://localhost:5173", // Update to your frontend URL
//     credentials: true, // Allow credentials
//   })
// );

app.use(
  cors({
    origin: "https://bgmiscrims.site", // Allow requests from this origin
    credentials: true, // Allow cookies to be sent along with the request
  })
);
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
