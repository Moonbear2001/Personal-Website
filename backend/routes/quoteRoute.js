import express from "express";

import {
  getRandomQuote,
  saveNewQuote,
} from "../controllers/quoteController.js";

const router = express.Router();

// Get a random quote
router.get("/", getRandomQuote);

// Save a quote
router.post("/", saveNewQuote);

export default router;
