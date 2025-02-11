require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const contactRoutes = require("./routes/contactRoutes");
const emailRoutes = require("./routes/emailRoutes");

const app = express();

// ✅ CORS Middleware - Allow requests only from your frontend
app.use(
  cors({
    origin:
      process.env.FRONTEND_URL ||
      "https://my-portfolio-lilac-beta-69.vercel.app", // Replace with your Vercel frontend URL
    methods: ["GET", "POST"],
    credentials: true,
  })
);

// Middleware
app.use(express.json());

// Routes
app.use("/api/contact", contactRoutes);
app.use("/api/email", emailRoutes);

// ✅ Debugging: Check if environment variables are loaded
if (!process.env.MONGO_URI) {
  console.error("❌ ERROR: MONGO_URI is not defined! Check your .env file.");
  process.exit(1); // Stop the server if no MongoDB URI
} else {
  console.log("✅ MONGO_URI Loaded Successfully");
}

// ✅ Connect to MongoDB with better error handling
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Successfully connected to MongoDB Atlas"))
  .catch((err) => {
    console.error("❌ MongoDB Connection Failed:", err.message);
    process.exit(1); // Stop the server if the connection fails
  });

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server is running on port ${PORT}`));
