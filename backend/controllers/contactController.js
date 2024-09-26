import ContactMessage from "../models/contactMessageModel.js"
import mongoose from "mongoose"

// Save a new message to the database
export const saveMessage = async (req, res) => {

  const { name, email, reason, customReason, message } = req.body;

  try {
    if (!name || !email || !reason || !message) {
      return res.status(400).send({
        message: "To contact, fill out all fields.",
      });
    }

    const newContactMessage = {
      name: name,
      email: email,
      reason: reason,
      customReason: customReason,
      message: message,
    }

    const contactMessage = await ContactMessage.create(newContactMessage);
    return res.status(201).send(contactMessage);
  }
  catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
}