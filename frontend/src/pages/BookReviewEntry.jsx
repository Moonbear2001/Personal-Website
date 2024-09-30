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
    title: "",
    author: "",
    genre: [],
    publicationDate: "",
    series: { name: "", number: 0 },
    isbn: "",
    reviewText: "",
    quotes: [],
    rating: 1,
    sillyRating: "",
    relatedVideos: [],
    tags: [],
    coverImage: "",
    additionalInfo: {},
    finished: "",
  });

  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookReview((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Book Review Data:", bookReview);
    try {
      const response = await fetch("/api/v1/bookReview", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookReview),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await response.json();

      toast({
        title: "success",
        description: "book review saved",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "fail",
        description: "error",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
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
                placeholder="Enter book title"
                variant="outline"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Author</FormLabel>
              <Input
                borderColor="black"
                borderWidth="2px"
                _focus={{ borderColor: "black" }}
                name="author"
                value={bookReview.author}
                onChange={handleChange}
                placeholder="Enter author's name"
                variant="outline"
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
                placeholder="Did you finish"
                variant="outline"
              />
            </FormControl>

            <FormControl>
              <FormLabel>Publication Date</FormLabel>
              <Input
                borderColor="black"
                borderWidth="2px"
                _focus={{ borderColor: "black" }}
                type="date"
                name="publicationDate"
                value={bookReview.publicationDate}
                onChange={handleChange}
                variant="outline"
              />
            </FormControl>

            <FormControl>
              <FormLabel>Review Date</FormLabel>
              <Input
                borderColor="black"
                borderWidth="2px"
                _focus={{ borderColor: "black" }}
                type="date"
                name="reviewDate"
                value={bookReview.reviewDate}
                onChange={handleChange}
                variant="outline"
              />
            </FormControl>

            <FormControl>
              <FormLabel>Series Name</FormLabel>
              <Input
                borderColor="black"
                borderWidth="2px"
                _focus={{ borderColor: "black" }}
                name="series.name"
                value={bookReview.series.name}
                onChange={(e) =>
                  setBookReview((prev) => ({
                    ...prev,
                    series: { ...prev.series, name: e.target.value },
                  }))
                }
                placeholder="Enter series name"
                variant="outline"
              />
            </FormControl>

            <FormControl>
              <FormLabel>Series Number</FormLabel>
              <Input
                borderColor="black"
                borderWidth="2px"
                _focus={{ borderColor: "black" }}
                type="number"
                name="series.number"
                value={bookReview.series.number}
                onChange={(e) =>
                  setBookReview((prev) => ({
                    ...prev,
                    series: { ...prev.series, number: Number(e.target.value) },
                  }))
                }
                placeholder="Enter series number"
                variant="outline"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>ISBN</FormLabel>
              <Input
                borderColor="black"
                borderWidth="2px"
                _focus={{ borderColor: "black" }}
                name="isbn"
                value={bookReview.isbn}
                onChange={handleChange}
                placeholder="Enter ISBN"
                variant="outline"
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
                placeholder="Enter your review"
                variant="outline"
              />
            </FormControl>

            <FormControl>
              <FormLabel>Quotes (dont end with comma)</FormLabel>
              <Textarea
                borderColor="black"
                borderWidth="2px"
                _focus={{ borderColor: "black" }}
                name="quotes"
                value={bookReview.quotes.join(", ")}
                onChange={(e) =>
                  setBookReview((prev) => ({
                    ...prev,
                    quotes: e.target.value
                      .split(",")
                      .map((quote) => quote.trim()),
                  }))
                }
                placeholder="Enter quotes separated by commas"
                variant="outline"
              />
            </FormControl>

            <FormControl>
              <FormLabel>Genre (dont end with comma)</FormLabel>
              <Textarea
                borderColor="black"
                borderWidth="2px"
                _focus={{ borderColor: "black" }}
                name="genres"
                value={bookReview.genre.join(", ")}
                onChange={(e) =>
                  setBookReview((prev) => ({
                    ...prev,
                    genre: e.target.value
                      .split(",")
                      .map((genre) => genre.trim()),
                  }))
                }
                placeholder="Enter quotes separated by commas"
                variant="outline"
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
                placeholder="Enter rating (1-10)"
                variant="outline"
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
                placeholder="Enter silly rating"
                variant="outline"
              />
            </FormControl>

            <FormControl>
              <FormLabel>Related Videos (dont end with comma)</FormLabel>
              <Textarea
                borderColor="black"
                borderWidth="2px"
                _focus={{ borderColor: "black" }}
                name="relatedVideos"
                value={bookReview.relatedVideos.join(", ")}
                onChange={(e) =>
                  setBookReview((prev) => ({
                    ...prev,
                    relatedVideos: e.target.value
                      .split(",")
                      .map((video) => video.trim()),
                  }))
                }
                placeholder="Enter related video URLs separated by commas"
                variant="outline"
              />
            </FormControl>

            <FormControl>
              <FormLabel>Tags (dont end with comma)</FormLabel>
              <Textarea
                borderColor="black"
                borderWidth="2px"
                _focus={{ borderColor: "black" }}
                name="tags"
                value={bookReview.tags.join(", ")}
                onChange={(e) =>
                  setBookReview((prev) => ({
                    ...prev,
                    tags: e.target.value.split(",").map((tag) => tag.trim()),
                  }))
                }
                placeholder="Enter tags separated by commas"
                variant="outline"
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
                placeholder="Enter cover image URL"
                variant="outline"
              />
            </FormControl>

            {/* <FormControl>
              <FormLabel>Additional Info</FormLabel>
              <Textarea
                borderColor="black"
                borderWidth="2px"
                _focus={{ borderColor: "black" }}
                name="additionalInfo"
                value={JSON.stringify(bookReview.additionalInfo)}
                onChange={(e) =>
                  setBookReview((prev) => ({
                    ...prev,
                    additionalInfo: JSON.parse(e.target.value || "{}"),
                  }))
                }
                placeholder='Enter additional info as JSON (e.g., {"key": "value"})'
                variant="outline"
              />
            </FormControl> */}

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
