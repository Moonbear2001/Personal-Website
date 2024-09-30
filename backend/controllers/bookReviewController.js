import mongoose from "mongoose";

import BookReviewModel from "../db/models/bookReviewModel.js";

// Get all book reviews
export const getAllBookReviews = async (req, res) => {
  try {
    const bookReviews = await BookReviewModel.find({});
    return res.status(200).json({
      count: bookReviews.length,
      data: bookReviews,
    });
  } catch (error) {
    console.log(error.message);
    res.send(500).send({ message: error.message });
  }
};

// Save a new book review
export const createBookReview = async (req, res) => {
  try {
    const newBookReview = new BookReviewModel(req.body);
    const savedBookReview = await newBookReview.save();
    return res.status(201).send(savedBookReview);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

// Get a book review
export const getBookReviewById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ message: "Invalid ID format" });
    }
    const bookReview = await BookReviewModel.findById(id);
    if (!bookReview) {
      return res.status(404).json({ message: "Book review not found" });
    }
    return res.json(bookReview);
  } catch (error) {
    console.log(error.message);
    res.send(500).send({ message: "Server error", error: error.message });
  }
};

// Get a book review by title
export const getBookReviewByTitle = async (req, res) => {
  const { title } = req.params;
  try {
    const bookReview = await BookReviewModel.findOne({ title: title });
    if (!bookReview) {
      return res.status(404).json({ message: "Book review not found" });
    }
    return res.json(bookReview);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Update a book review
export const updateBookReviewById = async (req, res) => {
  const { id } = req.params;
  const {
    title,
    author,
    genre,
    publicationDate,
    series,
    reviewText,
    quotes,
    rating,
    sillyRating,
    relatedVideos,
    tags,
    coverImage,
    additionalInfo,
  } = req.body;
  try {
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ message: "Invalid ID format" });
    }
    const updatedReview = await BookReviewModel.findByIdAndUpdate(
      req.params.id,
      {
        title,
        author,
        genre,
        publicationDate,
        series,
        reviewText,
        quotes,
        rating,
        sillyRating,
        relatedVideos,
        tags,
        coverImage,
        additionalInfo,
      },
      { new: true, runValidators: true }
    );
    if (!updatedReview) {
      return res.status(404).json({ message: "Book review not found" });
    }
    return res.json(updatedReview);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Delete a book review
export const deleteBookReviewById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ message: "Invalid ID format" });
    }

    const deleteResult = await BookReviewModel.findByIdAndDelete(id);
    if (!deleteResult) {
      return res
        .status(404)
        .send({ message: "Book review not found and not deleted." });
    }

    return res
      .status(200)
      .send({ message: "Book review deleted successfully. " });
  } catch (error) {
    console.log(error.message);
    res.send(500).send({ message: error.message });
  }
};
