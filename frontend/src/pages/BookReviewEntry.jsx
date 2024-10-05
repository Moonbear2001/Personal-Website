import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  HStack,
  Heading,
  Container,
  useToast,
} from "@chakra-ui/react";

const BookReviewForm = () => {
  const [bookReview, setBookReview] = useState({
    themes: [],
    favoriteCharacters: [],
    relatedVideos: [],
    tags: [],
    quotes: [],
    genres: [],
  });

  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookReview((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Upload the book review and each quote to their dbs
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Book Review Data:", bookReview);
    const token = localStorage.getItem("token");
    try {
      const response = await fetch("/api/v1/bookReviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(bookReview),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await response.json();
      console.log("Book review response: ", data);

      toast({
        title: "Success",
        description: "Book review saved.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Failed to save review.",
        description: `${error}`,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }

    // Save quotes to db
    for (const quote of bookReview.quotes) {
      try {
        const response = await fetch("/api/v1/quote", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            quote: quote,
            authors: bookReview.authors,
            source: bookReview.title,
          }),
        });
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        console.log(data);

        toast({
          title: "Success",
          description: "Quote saved.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      } catch (error) {
        toast({
          title: "Failed to save quote.",
          description: `${error}`,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    }
  };

  return (
    <Container maxWidth="1200px" p={4} centerContent>
      <Box
        p={5}
        shadow="md"
        borderWidth="1px"
        borderRadius="lg"
        width="1000px"
        bg="white"
      >
        <Heading as="h3" size="lg" mb={4} textAlign="center">
          Book Review Form
        </Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={3} align="center">
            <FormControl isRequired>
              <FormLabel>Title</FormLabel>
              <Input
                borderColor="black"
                borderWidth="2px"
                _focus={{ borderColor: "black" }}
                name="title"
                value={bookReview.title}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Authors</FormLabel>
              <Input
                borderColor="black"
                borderWidth="2px"
                _focus={{ borderColor: "black" }}
                name="authors"
                value={bookReview.authors}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Publication Date</FormLabel>
              <Input
                borderColor="black"
                borderWidth="2px"
                _focus={{ borderColor: "black" }}
                type="date"
                name="publicationDate"
                value={bookReview.publicationDate}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Start Date</FormLabel>
              <Input
                borderColor="black"
                borderWidth="2px"
                _focus={{ borderColor: "black" }}
                type="date"
                name="startDate"
                value={bookReview.startDate}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>End Date</FormLabel>
              <Input
                borderColor="black"
                borderWidth="2px"
                _focus={{ borderColor: "black" }}
                type="date"
                name="endDate"
                value={bookReview.endDate}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Review Date</FormLabel>
              <Input
                borderColor="black"
                borderWidth="2px"
                _focus={{ borderColor: "black" }}
                type="date"
                name="reviewDate"
                value={bookReview.reviewDate}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Times Read</FormLabel>
              <Input
                borderColor="black"
                borderWidth="2px"
                _focus={{ borderColor: "black" }}
                type="number"
                name="timesRead"
                value={bookReview.timesRead}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Language you read book in</FormLabel>
              <Input
                borderColor="black"
                borderWidth="2px"
                _focus={{ borderColor: "black" }}
                name="readLanguage"
                value={bookReview.readLanguage}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Original language</FormLabel>
              <Input
                borderColor="black"
                borderWidth="2px"
                _focus={{ borderColor: "black" }}
                name="originalLanguage"
                value={bookReview.originalLanguage}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Format (physical, eBook, or audiobook)</FormLabel>
              <Input
                borderColor="black"
                borderWidth="2px"
                _focus={{ borderColor: "black" }}
                name="format"
                value={bookReview.format}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Difficulty level</FormLabel>
              <Input
                borderColor="black"
                borderWidth="2px"
                _focus={{ borderColor: "black" }}
                type="number"
                name="difficultyLevel"
                value={bookReview.difficultyLevel}
                onChange={handleChange}
                min={1}
                max={10}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Rating</FormLabel>
              <Input
                borderColor="black"
                borderWidth="2px"
                _focus={{ borderColor: "black" }}
                type="number"
                name="rating"
                value={bookReview.rating}
                onChange={handleChange}
                min={1}
                max={10}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Silly Rating</FormLabel>
              <Input
                borderColor="black"
                borderWidth="2px"
                _focus={{ borderColor: "black" }}
                name="sillyRating"
                value={bookReview.sillyRating}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Review Text</FormLabel>
              <Textarea
                borderColor="black"
                borderWidth="2px"
                _focus={{ borderColor: "black" }}
                name="reviewText"
                value={bookReview.reviewText}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Finished (true or false)</FormLabel>
              <Input
                borderColor="black"
                borderWidth="2px"
                _focus={{ borderColor: "black" }}
                name="finished"
                value={bookReview.finished}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Part of a series? (true or false)</FormLabel>
              <Input
                borderColor="black"
                borderWidth="2px"
                _focus={{ borderColor: "black" }}
                name="inSeries"
                value={bookReview.inSeries}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Series Name</FormLabel>
              <Input
                borderColor="black"
                borderWidth="2px"
                _focus={{ borderColor: "black" }}
                name="seriesName"
                value={bookReview.seriesName}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Series Number</FormLabel>
              <Input
                borderColor="black"
                borderWidth="2px"
                _focus={{ borderColor: "black" }}
                type="number"
                name="seriesNumber"
                value={bookReview.seriesNumber}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl>
              <FormLabel>ISBN</FormLabel>
              <Input
                borderColor="black"
                borderWidth="2px"
                _focus={{ borderColor: "black" }}
                name="isbn"
                value={bookReview.isbn}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Themes (don&apos;t end with comma)</FormLabel>
              <Textarea
                borderColor="black"
                borderWidth="2px"
                _focus={{ borderColor: "black" }}
                name="themes"
                value={bookReview.themes.join(", ")}
                onChange={(e) =>
                  setBookReview((prev) => ({
                    ...prev,
                    themes: e.target.value
                      .split(", ")
                      .map((theme) => theme.toLowerCase()),
                  }))
                }
              />
            </FormControl>

            <FormControl>
              <FormLabel>
                Favorite Characters (don&apos;t end with comma)
              </FormLabel>
              <Textarea
                borderColor="black"
                borderWidth="2px"
                _focus={{ borderColor: "black" }}
                name="favoriteCharacters"
                value={bookReview.favoriteCharacters.join(", ")}
                onChange={(e) =>
                  setBookReview((prev) => ({
                    ...prev,
                    favoriteCharacters: e.target.value.split(", "),
                  }))
                }
              />
            </FormControl>

            <FormControl>
              <FormLabel>Related Videos (don&apos;t end with comma)</FormLabel>
              <Textarea
                borderColor="black"
                borderWidth="2px"
                _focus={{ borderColor: "black" }}
                name="relatedVideos"
                value={bookReview.relatedVideos.join(", ")}
                onChange={(e) =>
                  setBookReview((prev) => ({
                    ...prev,
                    relatedVideos: e.target.value.split(", "),
                  }))
                }
              />
            </FormControl>

            <FormControl>
              <FormLabel>Tags (don&apos;t end with comma)</FormLabel>
              <Textarea
                borderColor="black"
                borderWidth="2px"
                _focus={{ borderColor: "black" }}
                name="tags"
                value={bookReview.tags.join(", ")}
                onChange={(e) =>
                  setBookReview((prev) => ({
                    ...prev,
                    tags: e.target.value
                      .split(", ")
                      .map((tag) => tag.toLowerCase()),
                  }))
                }
              />
            </FormControl>

            <FormControl>
              <FormLabel>Quotes (don&apos;t end with comma)</FormLabel>
              <Textarea
                borderColor="black"
                borderWidth="2px"
                _focus={{ borderColor: "black" }}
                name="quotes"
                value={bookReview.quotes.join(", ")}
                onChange={(e) =>
                  setBookReview((prev) => ({
                    ...prev,
                    quotes: e.target.value.split(", "),
                  }))
                }
              />
            </FormControl>

            <FormControl>
              <FormLabel>Genres (don&apos;t end with comma)</FormLabel>
              <Textarea
                borderColor="black"
                borderWidth="2px"
                _focus={{ borderColor: "black" }}
                name="genres"
                value={bookReview.genres.join(", ")}
                onChange={(e) =>
                  setBookReview((prev) => ({
                    ...prev,
                    genres: e.target.value
                      .split(", ")
                      .map((genre) => genre.toLowerCase()),
                  }))
                }
              />
            </FormControl>

            <FormControl>
              <FormLabel>Cover Image URL</FormLabel>
              <Input
                borderColor="black"
                borderWidth="2px"
                _focus={{ borderColor: "black" }}
                name="coverImage"
                value={bookReview.coverImage}
                onChange={handleChange}
              />
            </FormControl>

            <HStack spacing={4}>
              <Button colorScheme="teal" type="submit">
                Save Review
              </Button>
              <Button colorScheme="gray" onClick={() => setBookReview({})}>
                Clear
              </Button>
            </HStack>
          </VStack>
        </form>
      </Box>
    </Container>
  );
};

export default BookReviewForm;
