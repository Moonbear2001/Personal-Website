import mongoose from "mongoose";

const bookReviewSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishYear: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const BookReview = mongoose.model("BookReview", bookReviewSchema);

export default BookReview;