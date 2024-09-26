import BookReview from "../models/bookReviewModel.js"
import mongoose from "mongoose"

// Get all book reviews
export const getBookReviews = async (req, res) => {
  try {
    const bookReviews = await BookReview.find({});
    return res.status(200).json({
      count: bookReviews.length,
      data: bookReviews
    });
  } catch (error) {
    console.log(error.message);
    res.send(500).send({ message: error.message });
  }
}

// Save a new review
export const createBookReview = async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({
        message: "To save a new book review, send all required fields: title, author, publishYear.",
      });
    }
    const newBookReview = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    }
    const bookReview = await BookReview.create(newBookReview);
    return res.status(201).send(bookReview);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
}

// Get a book reviews
export const getBookReview = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ message: 'Invalid ID format' });
    }
    const bookReview = await BookReview.findById(id);
    return res.status(200).json(bookReview);
  } catch (error) {
    console.log(error.message);
    res.send(500).send({ message: error.message });
  }
}

// Update a book review
export const updateBookReview = async (req, res) => {
  try {

    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({
        message: "To update a book review, send all required fields: title, author, publishYear.",
      });
    }

    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ message: 'Invalid ID format' });
    }
    
    const updateResult = await BookReview.findByIdAndUpdate(id, req.body);
    if (!updateResult) {
      return res.status(404).send({ message: "Book review not found and not updated." });
    }

    return res.status(200).send({ message: "Book review updated successfully. "});

  } catch (error) {
    console.log(error.message);
    res.send(500).send({ message: error.message });
  }
}

// Delete a book review
export const deleteBookReview = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({ message: 'Invalid ID format' });
    }
    
    const deleteResult = await BookReview.findByIdAndDelete(id);
    if (!deleteResult) {
      return res.status(404).send({ message: "Book review not found and not deleted." });
    }

    return res.status(200).send({ message: "Book review deleted successfully. "});
  } catch (error) {
    console.log(error.message);
    res.send(500).send({ message: error.message });
  }
}

