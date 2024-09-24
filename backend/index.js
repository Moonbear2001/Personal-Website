import express, { response } from "express";
import path from "path";
import dotenv from "dotenv";
import mongoose from "mongoose";

import { connectMongoDB } from "./config/db.js";
import bookReviewsRoute from "./routes/bookReviewsRoute.js"

dotenv.config();

const app = express();

app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

const __dirname = path.resolve();
console.log(__dirname);

app.use("/bookReviews", bookReviewsRoute);

// Serve static files from the frontend build directory
app.use(express.static(path.join(__dirname, '/frontend/dist')));

// Handle any requests that don't match the above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/frontend/dist/index.html'));
});


// Exit before opening port if database connection fails
connectMongoDB();

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Listening on port: ${process.env.PORT}`);
});

