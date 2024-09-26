import express, { response } from "express";
import path from "path";
import dotenv from "dotenv";
import mongoose from "mongoose";

import { connectContactMongoDB, connectMongoDB } from "./config/db.js";
import bookReviewsRoute from "./routes/bookReviewsRoute.js"
import contactRoute from "./routes/contactRoute.js"

dotenv.config();

const app = express();

app.use(express.json());

const __dirname = path.resolve();

// Routes
app.use("/api/v1/bookReviews", bookReviewsRoute);
app.use("/api/v1/contact", contactRoute);

// Serve static files from the frontend build directory
app.use(express.static(path.join(__dirname, '/frontend/dist')));

// Handle any requests that don't match the above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/frontend/dist/index.html'));
});

// Exit before opening port if database connection fails
// connectMongoDB();
connectContactMongoDB();

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Listening on port: ${process.env.PORT}`);
});

