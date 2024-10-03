// Get resume from backend
export async function getResumeData() {
  try {
    const response = await fetch("/api/v1/data/resume", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch resume data: ", error.message);
    return {};
  }
}

// Get resume from backend
export async function getProjectsData() {
  try {
    const response = await fetch("/api/v1/data/projects", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch projects data: ", error.message);
    return {};
  }
}
