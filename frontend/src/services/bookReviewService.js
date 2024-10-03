// Get a random quote from the backend
// Return it as a quote js object
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
    console.error("Failed to fetch the random quote:", error.message);
    return { quote: " ", author: " ", source: " " };
  }
}
