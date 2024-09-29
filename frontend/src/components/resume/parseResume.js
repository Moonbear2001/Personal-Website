import resumeData from "./resumeData.js";

// Return the full resume object
const getResumeData = () => {
  return resumeData;
};

const getContactData = () => {
  return resumeData.contact;
};

const getEducationData = () => {
  return resumeData.education.map((school) => ({
    ...school,
    startDate: new Date(school.startDate),
    endDate: school.endDate ? new Date(school.endDate) : new Date("2024-11-01"),
  }));
};

const getProjectData = () => {
  return resumeData.projects.map((project) => ({
    ...project,
    startDate: new Date(project.startDate),
    endDate: project.endDate
      ? new Date(project.endDate)
      : new Date("2024-11-01"),
  }));
};

const getInternshipData = () => {
  return resumeData.internships.map((internship) => ({
    ...internship,
    startDate: new Date(internship.startDate),
    endDate: internship.endDate
      ? new Date(internship.endDate)
      : new Date("2024-11-01"),
  }));
};

const getEmploymentData = () => {
  return resumeData.employment.map((job) => ({
    ...job,
    startDate: new Date(job.startDate),
    endDate: job.endDate ? new Date(job.endDate) : new Date("2024-11-01"),
  }));
};

// Return an array of javascript objects to be put in About me timeline
// Sorted in chronological order
const getTimelineData = () => {
  const timelineColors = {
    education: "blue.500",
    project: "red.500",
    internship: "green.500",
    employment: "purple.500",
  };

  let educationData = getEducationData();
  educationData.forEach((entry) => {
    // entry.label = entry.degree + "@" + entry.institution;
    entry.label = entry.institution;
    entry.color = timelineColors.education;
    entry.section = "education";
  });

  let projectData = getProjectData();
  projectData.forEach((entry) => {
    // entry.label = entry.role + "for" + entry.title;
    entry.label = entry.title;
    entry.color = timelineColors.project;
    entry.section = "project";
  });

  let internshipData = getInternshipData();
  internshipData.forEach((entry) => {
    // entry.label = entry.role + "@" + entry.company;
    entry.label = entry.company;
    entry.color = timelineColors.internship;
    entry.section = "internship";
  });

  let employmentData = getEmploymentData();
  employmentData.forEach((entry) => {
    // entry.label = entry.role + "@" + entry.company;
    entry.label = entry.company;
    entry.color = timelineColors.employment;
    entry.section = "employment";
  });

  return [
    ...educationData,
    ...projectData,
    ...internshipData,
    ...employmentData,
  ].sort((a, b) => a.startDate - b.startDate);
};

export {
  getContactData,
  getEducationData,
  getProjectData,
  getInternshipData,
  getEmploymentData,
  getTimelineData,
  getResumeData,
};
