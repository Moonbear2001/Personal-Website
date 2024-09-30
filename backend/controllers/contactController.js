import crypto from "crypto";
import nodemailer from "nodemailer";

import ContactMessageModel from "../db/models/contactMessageModel.js";

export const handleMsg = async (req, res) => {
  const { name, email, reason, customReason, message } = req.body;

  // Verify fields
  if (!name || !email || !reason || !message) {
    return res.status(400).send({
      message: "To contact, fill out all fields.",
    });
  }

  try {
    await dbSaveMsg(name, email, reason, customReason, message);
    await emailSendMsg({ name, email, reason, customReason, message });
    return res.status(201).send(contactMessage);
  } catch (error) {
    console.error(error.message);
    return res.status(500).send({ message: error.message });
  }
};

// Save message to the database
const dbSaveMsg = async (name, email, reason, customReason, message) => {
  const { iv, encryptedData } = encryptEmail(email);

  const newContactMessage = new ContactMessageModel({
    name: name,
    email: encryptedData,
    iv: iv,
    reason: reason,
    customReason: customReason,
    message: message,
  });

  await newContactMessage.save();
};

// Send message to my email
const emailSendMsg = async ({ name, email, reason, customReason, message }) => {
  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_SENDER,
      pass: process.env.EMAIL_APP_PW,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_RECEIVER,
    subject: `New Contact Message from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Reason: ${reason}
      Custom Reason: ${customReason || "N/A"}
      Message: ${message}
    `,
  };

  await transporter.sendMail(mailOptions);
};

// DB message encryption
const encryptEmail = (email) => {
  const iv = crypto.randomBytes(16);

  const cipher = crypto.createCipheriv(
    process.env.ENCRYPTION_ALGO,
    Buffer.from(process.env.ENCRYPTION_KEY, "base64"),
    iv
  );
  let encrypted = cipher.update(email, "utf8", "hex");
  encrypted += cipher.final("hex");
  return {
    iv: iv.toString("hex"),
    encryptedData: encrypted,
  };
};

// Function to decrypt the email (for use later)
const decryptEmail = (encryptedEmail, iv) => {
  const decipher = crypto.createDecipheriv(
    algorithm,
    Buffer.from(process.env.ENCRYPTION_KEY, "base64"),
    Buffer.from(iv, "hex")
  );
  let decrypted = decipher.update(encryptedEmail, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
};
