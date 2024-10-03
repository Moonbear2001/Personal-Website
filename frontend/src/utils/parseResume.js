// Suite of functions for extracting data from the resume obj

const getContactData = (resumeObj) => {
  return resumeObj.contact;
};

const getEducationData = (resumeObj) => {
  return resumeObj.education.map((school) => ({
    ...school,
    startDate: new Date(school.startDate),
    endDate: school.endDate ? new Date(school.endDate) : new Date("2024-11-01"),
  }));
};

const getProjectData = (resumeObj) => {
  return resumeObj.projects.map((project) => ({
    ...project,
    startDate: new Date(project.startDate),
    endDate: project.endDate
      ? new Date(project.endDate)
      : new Date("2024-11-01"),
  }));
};

const getInternshipData = (resumeObj) => {
  return resumeObj.internships.map((internship) => ({
    ...internship,
    startDate: new Date(internship.startDate),
    endDate: internship.endDate
      ? new Date(internship.endDate)
      : new Date("2024-11-01"),
  }));
};

const getEmploymentData = (resumeObj) => {
  return resumeObj.employment.map((job) => ({
    ...job,
    startDate: new Date(job.startDate),
    endDate: job.endDate ? new Date(job.endDate) : new Date("2024-11-01"),
  }));
};

// Return an array of javascript objects to be put in About me timeline
// Sorted in chronological order
const getTimelineData = (resumeObj) => {
  const timelineColors = {
    education: "blue.500",
    project: "red.500",
    internship: "green.500",
    employment: "purple.500",
  };

  let educationData = getEducationData(resumeObj);
  educationData.forEach((entry) => {
    entry.type = "education";
    entry.label = entry.institution;
    entry.color = timelineColors.education;
  });

  let projectData = getProjectData(resumeObj);
  projectData.forEach((entry) => {
    entry.type = "project";
    entry.label = entry.title;
    entry.color = timelineColors.project;
  });

  let internshipData = getInternshipData(resumeObj);
  internshipData.forEach((entry) => {
    entry.type = "internship";
    entry.label = entry.company;
    entry.color = timelineColors.internship;
  });

  let employmentData = getEmploymentData(resumeObj);
  employmentData.forEach((entry) => {
    entry.type = "employment";
    entry.label = entry.company;
    entry.color = timelineColors.employment;
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
};
