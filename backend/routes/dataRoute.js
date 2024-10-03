import express from "express";
import {} from "../controllers/bookReviewController.js";
import {
  fetchProjectsData,
  fetchResumeData,
} from "../controllers/dataController.js";

const router = express.Router();

// Get the resume data
router.get("/resume", fetchResumeData);

// Get projects data
router.get("/projects", fetchProjectsData);

export default router;
