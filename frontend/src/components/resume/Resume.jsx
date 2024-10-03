import { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";

import ResumeSection from "./ResumeSection";
import EducationCard from "./cards/EducationCard";
import EmploymentCard from "./cards/EmploymentCard";
import ProjectCard from "./cards/ProjectCard";
import InternshipCard from "./cards/InternshipCard";
import { getResumeData } from "../../services/dataService.js";
import CustomDivider from "../CustomDivider";

const Resume = () => {
  const [resumeData, setResumeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getResumeData();
        setResumeData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching resume data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!resumeData) {
    return <div>Error loading resume data.</div>;
  }

  return (
    <Box mb={200}>
      <ResumeSection
        title="Education"
        type="education"
        data={resumeData.education}
        CardComponent={EducationCard}
      />

      <CustomDivider />

      <ResumeSection
        title="Employment"
        type="employment"
        data={resumeData.employment}
        CardComponent={EmploymentCard}
      />

      <CustomDivider />

      <ResumeSection
        title="Internships"
        type="internships"
        data={resumeData.internships}
        CardComponent={InternshipCard}
      />

      <CustomDivider />

      <ResumeSection
        title="Projects"
        type="projects"
        data={resumeData.projects}
        CardComponent={ProjectCard}
      />
    </Box>
  );
};

export default Resume;
