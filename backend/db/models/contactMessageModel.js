import mongoose from "mongoose";
import contactMessageSchema from "../schemas/contactMessageSchema.js";

const ContactMessageModel = mongoose.model(
  "ContactMessage",
  contactMessageSchema
);

export default ContactMessageModel;
