import mongoose from "mongoose";
import quoteSchema from "../schemas/quoteSchema.js";

const QuoteModel = mongoose.model("Quote", quoteSchema);

export default QuoteModel;
