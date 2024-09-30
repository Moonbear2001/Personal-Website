import mongoose from "mongoose";
import bookReviewSchema from "../schemas/bookReviewSchema.js";

const BookReviewModel = mongoose.model("Book Review", bookReviewSchema);

export default BookReviewModel;
