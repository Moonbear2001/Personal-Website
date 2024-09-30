import mongoose from "mongoose";

const bookReviewSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    genre: {
      type: [String],
    },
    publicationDate: {
      type: Date,
    },
    series: {
      name: {
        type: String,
      },
      number: {
        type: Number,
        min: 0,
      },
    },
    isbn: {
      type: String,
      unique: true,
    },
    reviewText: {
      type: String,
      required: true,
    },
    quotes: {
      type: [String],
      required: true,
    },
    rating: {
      type: Number,
      min: 1,
      max: 10,
    },
    sillyRating: {
      type: String,
      required: true,
    },
    reviewDate: {
      type: Date,
      default: Date.now,
    },
    relatedVideos: {
      type: [String],
      required: false,
    },
    tags: {
      type: [String],
    },
    coverImage: {
      type: String,
    },
    finished: {
      type: Boolean,
    },
    additionalInfo: {
      type: Map,
      of: String,
    },
  },
  { timestamps: true }
);

export default bookReviewSchema;
