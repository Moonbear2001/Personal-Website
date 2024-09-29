import { Box } from "@chakra-ui/react";

import ResumeSection from "./ResumeSection";
import EducationCard from "./cards/EducationCard";
import EmploymentCard from "./cards/EmploymentCard";
import ProjectCard from "./cards/ProjectCard";
import InternshipCard from "./cards/InternshipCard";
import { getResumeData } from "./parseResume";

const Resume = () => {
  const resumeData = getResumeData();
  return (
    <Box mb={200}>
      <ResumeSection
        title="Education"
        type="education"
        data={resumeData.education}
        CardComponent={EducationCard}
      />

      <ResumeSection
        title="Employment"
        type="employment"
        data={resumeData.employment}
        CardComponent={EmploymentCard}
      />

      <ResumeSection
        title="Internships"
        type="internships"
        data={resumeData.internships}
        CardComponent={InternshipCard}
      />

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
