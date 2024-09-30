import mongoose from "mongoose";

const bookReviewSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    authors: {
      type: [String],
      required: true,
    },
    publicationDate: {
      type: Date,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    reviewDate: {
      type: Date,
      default: Date.now,
      required: true,
    },
    timesRead: {
      type: Number,
      default: 1,
      required: true,
    },
    readLanguage: {
      type: String,
      enum: ["English", "French", "Spanish", "Japanese"],
      required: true,
    },
    originalLanguage: {
      type: String,
    },
    format: {
      type: String,
      enum: ["physical", "eBook", "audiobook"],
      required: true,
    },
    difficultyLevel: {
      type: Number,
      min: 0,
      max: 10,
      required: true,
    },
    rating: {
      type: Number,
      min: 1,
      max: 10,
      required: true,
    },
    sillyRating: {
      type: String,
      required: true,
    },
    reviewText: {
      type: String,
      required: true,
    },
    finished: {
      type: Boolean,
      required: true,
    },
    inSeries: {
      type: Boolean,
      default: false,
      required: true,
    },
    seriesName: {
      type: String,
    },
    seriesNumber: {
      type: Number,
      min: 1,
    },
    isbn: {
      type: String,
      unique: true,
    },
    themes: {
      type: [String],
      default: [],
    },
    favoriteCharacters: {
      type: [String],
      default: [],
    },
    relatedVideos: {
      type: [String],
    },
    tags: {
      type: [String],
    },
    quotes: {
      type: [String],
    },
    genres: {
      type: [String],
      default: [],
    },
    coverImage: {
      type: String,
    },
  },
  { timestamps: true }
);

export default bookReviewSchema;
