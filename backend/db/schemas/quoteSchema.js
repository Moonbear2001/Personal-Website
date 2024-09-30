import mongoose from "mongoose";

const quoteSchema = new mongoose.Schema({
  quote: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
});

export default quoteSchema;
