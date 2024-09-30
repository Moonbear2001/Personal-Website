import express from "express";
import { handleMsg } from "../controllers/contactController.js";
import { rateLimit } from "express-rate-limit";

const router = express.Router();

// // Limit users to 2 contacts per minute
// const limiter = rateLimit({
//   windowMs: 60 * 1000,
//   max: 2,
//   message: "Too many requests, please try again later.",
// });

// // Apply to your contact route
// router.post("/contact", limiter, handleMsg);

router.post("/", handleMsg);

export default router;
