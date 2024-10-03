import express from "express";
import {
  getAllBookReviews,
  getBookReviewById,
  getBookReviewByTitle,
  createBookReview,
  updateBookReviewById,
  deleteBookReviewById,
  getBookReviewGenres,
  getBookReviewFrequency,
} from "../controllers/bookReviewController.js";

const router = express.Router();

// Get all book reviews from the database
router.get("/", getAllBookReviews);

// Save a new review
router.post("/", createBookReview);

// Get a book review by id
router.get("/:id", getBookReviewById);

// Get a book review by title
router.get("/title/:title", getBookReviewByTitle);

// Update a book review by id
router.put("/:id", updateBookReviewById);

// Delete a book review by id
router.delete("/:id", deleteBookReviewById);

// Get book review genre data
router.get("/data/genres", getBookReviewGenres);

// Get book reading frequency data
router.get("/data/frequency", getBookReviewFrequency);

export default router;
