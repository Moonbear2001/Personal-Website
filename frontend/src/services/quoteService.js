// Get a random quote from the backend
// Return it as a quote js object
export async function getRandomQuote() {
  try {
    const response = await fetch("/api/v1/quote", {
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
    console.error("Failed to fetch the random quote:", error.message);
    return { quote: " ", author: " ", source: " " };
  }
}
