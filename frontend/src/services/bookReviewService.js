export async function getGenreData() {
  try {
    const response = await fetch("/api/v1/bookReviews/data/genres");

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Genre data in frontend service: ", data);
    return data;
  } catch (error) {
    console.error("Failed to fetch genre data:", error.message);
    return [];
  }
}

export async function getFrequencyData() {
  try {
    const response = await fetch("/api/v1/bookReviews/data/frequency");

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Frequency data in frontend service: ", data);
    return data;
  } catch (error) {
    console.error("Failed to fetch frequency data:", error.message);
    return [];
  }
}
