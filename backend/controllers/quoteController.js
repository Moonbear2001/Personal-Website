import mongoose from "mongoose";

import QuoteModel from "../db/models/quoteModel.js";

export const getRandomQuote = async (req, res) => {
  QuoteModel.aggregate([{ $sample: { size: 1 } }])
    .then((result) => {
      console.log("Result in backend: ", result);
      res.json(result[0]);
    })
    .catch((error) => {
      res
        .status(500)
        .send({ message: "Error getting random quote.", error: error.message });
    });
};

export const saveNewQuote = async (req, res) => {
  try {
    const newQuote = new QuoteModel(req.body);
    const savedQuote = await newQuote.save();
    return res.status(201).send(savedQuote);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error saving new quote.", error: error.message });
  }
};
