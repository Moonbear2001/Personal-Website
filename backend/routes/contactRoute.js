import express from "express";
import mongoose from "mongoose";
import { saveMessage } from "../controllers/contactController.js"


const router = express.Router();

// Save a message
router.post("/", saveMessage);

export default router;
