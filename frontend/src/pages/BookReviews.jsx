import { useState, useEffect } from "react";
import { Container, Box, VStack, Text, Center } from "@chakra-ui/react";
import PageHeader from "../components/header/PageHeader";
import SearchBar from "../components/bookReview/SearchBar";
import BookReview from "../components/bookReview/BookReview";
import CustomDivider from "../components/CustomDivider";
// import BookHighlightCarousel from "../components/bookReview/BookHighlightCarousel";
// import CenterMode from "../components/bookReview/CenterMode";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";\
import Carousel from "../components/bookReview/SimpleCarousel";

const blurb = `When you've been into movies, TV, book, albums, hikes, or any other kind of hobby for long enough, you lose complete track of what you watched/read/listened/done and what you thought about it at the time. As a long-time avid reader, I've lost track of the majority of books I've read. I use this part of my website to track the books I've read and what I thought about each. The reviews might be extremely candid and terse depending on the kind of day of was having when I finished the book, but I'll try to give every book its fair shot.\n\nThis database began on October 1st, 2024, so if you're a visitor soon after that date, you may not see much. Fear not, I will continue to add reviews of the books that I read and it will quickly fill up.\n\nCheck out the highlights to see some of my favorite titles that I felt deserved special recognition. They have each received their own customized and stylized page to match their aesthetic.`;

const BookReviews = () => {
  const bookHighlights = [
    {
      title: "Neuromancer",
      image: "/bookHighlights/neuromancer/neuromancer-cover-narrow.jpg",
      link: "/bookReviews/neuromancer",
    },
    {
      title: "The Gunslinger",
      image: "/bookHighlights/gunslinger/gunslinger-cover-narrow.jpg",
      link: "/bookReviews/gunslinger",
    },
    {
      title: "Hyperion",
      image: "/bookHighlights/neuromancer/hyperion-modern-cover-narrow.jpg",
      link: "/bookReviews/hyperion",
    },
  ];

  const [bookReviews, setBookReviews] = useState([]);
  const [filteredReview, setFilteredReview] = useState(null);

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
        console.log("Books: ", data.data);

        setBookReviews(data.data);
      } catch (error) {
        console.error("Error fetching book reviews:", error);
      }
    };

    fetchBookReviews();
  }, []);

  const handleSearch = (searchTerm) => {
    console.log("in search");
    console.log("Book reviews: ", bookReviews);
    const foundReview = bookReviews.find(
      (review) =>
        review.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        review._id.includes(searchTerm)
    );

    setFilteredReview(foundReview || null);
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
      {/* <BookHighlightCarousel books={bookHighlights} /> */}
      {/* <CenterMode></CenterMode> */}
      <Carousel></Carousel>
      <CustomDivider />
      <Text>Reading Tracker</Text>
      <CustomDivider />
      <SearchBar onSearch={handleSearch} />

      <VStack spacing={4} align="stretch">
        {filteredReview ? (
          <BookReview review={filteredReview} />
        ) : (
          <Text>No book review found.</Text>
        )}
      </VStack>
    </Container>
  );
};

export default BookReviews;
