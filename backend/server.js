import express, { response } from "express";
import path from "path";
import dotenv from "dotenv";

import bookReviewsRoute from "./routes/bookReviewsRoute.js";
import contactRoute from "./routes/contactRoute.js";
import quoteRoute from "./routes/quoteRoute.js";
import dataRoute from "./routes/dataRoute.js";
import loginRoute from "./routes/loginRoute.js";

import connectDB from "./db/db.js";

dotenv.config();

const app = express();

app.use(express.json());

const __dirname = path.resolve();

// Routes
app.use("/api/v1/bookReviews", bookReviewsRoute);
app.use("/api/v1/contact", contactRoute);
app.use("/api/v1/quote", quoteRoute);
app.use("/api/v1/data", dataRoute);
app.use("/api/v1/login", loginRoute);

// Serve static files from the frontend build directory
app.use(express.static(path.join(__dirname, "/frontend/dist")));

// Handle any requests that don't match the above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/frontend/dist/index.html"));
});

// Connect to db
connectDB();

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Listening on port: ${process.env.PORT}`);
});
