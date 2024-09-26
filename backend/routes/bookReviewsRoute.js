import express from "express";
import { getBookReviews, getBookReview, createBookReview, updateBookReview, deleteBookReview } from "../controllers/bookReviewController.js"

const router = express.Router();

// Get all book reviews from the database
router.get("/", getBookReviews);

// Save a new review
router.post("/", createBookReview);

// Get a book review
router.get("/:id", getBookReview);

// Update a book review
router.put("/:id", updateBookReview);

// Delete a book
router.delete("/:id", deleteBookReview);

export default router;