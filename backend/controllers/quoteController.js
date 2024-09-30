import mongoose from "mongoose";

import QuoteModel from "../db/models/quoteModel.js";

export const getRandomQuote = async (req, res) => {
  QuoteModel.aggregate([{ $sample: { size: 1 } }])
    .then((result) => {
      if (result.length > 0) {
        console.log(result[0]); // This is the random quote
      }
    })
    .catch((err) => {
      console.error(err);
    });
};

export const saveNewQuote = async (req, res) => {
  try {
    const newQuote = new QuoteModel(req.body);
    const savedQuote = await newQuote.save();
    return res.status(201).send(savedQuote);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};
