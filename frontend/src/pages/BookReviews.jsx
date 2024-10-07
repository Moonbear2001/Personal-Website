import { useState, useEffect } from "react";
import { Grid, Container, Box, VStack, Text, Heading } from "@chakra-ui/react";
import PageHeader from "../components/header/PageHeader";
import SearchBar from "../components/bookReview/SearchBar";
import BookReview from "../components/bookReview/BookReview";
import CustomDivider from "../components/CustomDivider";
import CenterMode from "../components/bookReview/BookHighlightCarousel";
import GenrePieChart from "../components/bookReview/GenrePieChart";
import FrequencyLineChart from "../components/bookReview/FrequencyLineChart";

const blurb = `When you've been into movies, TV, book, albums, hikes, or any other kind of hobby for long enough, you lose complete track of what you watched/read/listened/done and what you thought about it at the time. As a long-time avid reader, I've lost track of the majority of books I've read. I use this part of my website to track the books I've read and what I thought about each. The reviews might be extremely candid and terse depending on the kind of day of was having when I finished the book, but I'll try to give every book its fair shot.\n\nThis database began on October 1st, 2024, so if you're a visitor soon after that date, you may not see much. Fear not, I will continue to add reviews of the books that I read and it will quickly fill up.\n\nCheck out the highlights to see some of my favorite titles that I felt deserved special recognition.`;

const BookReviews = () => {
  const [bookReviews, setBookReviews] = useState([]);
  const [filteredReviews, setFilteredReviews] = useState([]); // Change to an array

  useEffect(() => {
    const fetchBookReviews = async () => {
      try {
        const response = await fetch("/api/v1/bookReviews", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBookReviews(data.data);
      } catch (error) {
        console.error("Error fetching book reviews:", error);
      }
    };

    fetchBookReviews();
  }, []);

  const handleSearch = async (searchTerm) => {
    try {
      const response = await fetch(
        `/api/v1/bookReviews/search/${encodeURIComponent(searchTerm)}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setFilteredReviews(data.data); // Set all found reviews
    } catch (error) {
      console.error("Error searching for book review:", error);
    }
  };

  return (
    <Container maxWidth="1200px" p={4} centerContent mb={500}>
      <Box bg="gray.300" mx={10} position="relative">
        <PageHeader
          text="Book reviews."
          showQuote={true}
          randomQuote={true}
          comingSoon={false}
        />
        <Text whiteSpace="pre-wrap" mb={8} color="gray.700">
          {blurb}
        </Text>
      </Box>
      <CustomDivider />

      {/* Carousel */}
      <Heading fontSize="4xl" mb={10}>
        Highlights
      </Heading>
      <CenterMode />

      <CustomDivider />
      <Heading fontSize="4xl" mb={4}>
        Reading data
      </Heading>

      <Box width={"full"} height={"600px"}>
        <Grid templateColumns="1fr 1fr" height="100%" alignItems="center">
          <GenrePieChart />
          <FrequencyLineChart />
        </Grid>
      </Box>

      <CustomDivider />
      <Heading fontSize="4xl" mb={4}>
        Search the database.
      </Heading>
      <SearchBar onSearch={handleSearch} />

      <VStack spacing={4} align="stretch">
        {filteredReviews.length > 0 ? (
          filteredReviews.map((review) => (
            <BookReview key={review._id} review={review} />
          ))
        ) : (
          <Text>No book reviews found.</Text>
        )}
      </VStack>
    </Container>
  );
};

export default BookReviews;
