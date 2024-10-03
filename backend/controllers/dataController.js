import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const fetchResumeData = async (req, res) => {
  try {
    const resumePath = path.join(__dirname, "../data/resume-json/resume.json");
    res.sendFile(resumePath);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

export const fetchProjectsData = async (req, res) => {
  try {
    const projectsPath = path.join(
      __dirname,
      "../data/projects-json/projects.json"
    );
    res.sendFile(projectsPath);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};
