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
  searchBookReviewByTitle,
} from "../controllers/bookReviewController.js";
import authenticateToken from "../middleware/authMiddleware.js";

const router = express.Router();

// Save a new review
router.post("/", authenticateToken, createBookReview);

// Update a book review by id
router.put("/:id", authenticateToken, updateBookReviewById);

// Get all book reviews from the database
router.get("/", getAllBookReviews);

// Get a book review by id
router.get("/:id", getBookReviewById);

// Get a book review by title
router.get("/title/:title", getBookReviewByTitle);

// Delete a book review by id
router.delete("/:id", deleteBookReviewById);

// Get book review genre data
router.get("/data/genres", getBookReviewGenres);

// Get book reading frequency data
router.get("/data/frequency", getBookReviewFrequency);

// Search for a book review by title
router.get("/search/:title", searchBookReviewByTitle);

export default router;
