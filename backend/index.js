import express from "express";
import dotenv from "dotenv";

import { connectMongoDB } from "./config/db.js";
// import  from "./config.js";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});



// Exit before opening port if database connection fails
connectMongoDB();

app.listen(process.env.PORT, () => {
  console.log(`Listening on port: ${process.env.PORT}`);
});

