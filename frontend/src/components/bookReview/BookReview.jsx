import PropTypes from "prop-types";
import {
  Box,
  Text,
  VStack,
  Image,
  Flex,
  Link,
  HStack,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

const BookReview = ({ review }) => {
  return (
    <Box bg="white" p={4} borderRadius="md" boxShadow="md">
      <Flex align="center">
        {review.coverImage && (
          <Image
            src={review.coverImage}
            alt={review.title}
            boxSize="150px"
            objectFit="cover"
            borderRadius="md"
            mr={4}
          />
        )}
        <VStack align="start" spacing={1}>
          <Text fontWeight="bold" fontSize="lg">
            {review.title}
          </Text>
          <Text color="gray.600">by {review.authors[0]}</Text>
          <Text color="gray.600">
            {new Date(review.reviewDate).toLocaleDateString()}
          </Text>
          <Text mt={2}>{review.reviewText}</Text>
          <Text fontSize="sm" color="gray.500">
            Rating: {review.rating}/10
          </Text>
          <Text fontSize="sm" color="gray.500">
            Silly Rating: {review.sillyRating}
          </Text>

          {review.quotes && review.quotes.length > 0 && (
            <VStack align="start" spacing={1} mt={2}>
              <Text fontSize="sm" color="gray.500">
                Quotes:
              </Text>
              <UnorderedList spacing={1}>
                {review.quotes.map((quote, index) => (
                  <ListItem key={index} fontSize="sm" color="gray.600">
                    {quote}
                  </ListItem>
                ))}
              </UnorderedList>
            </VStack>
          )}

          {review.relatedVideos && review.relatedVideos.length > 0 && (
            <HStack align="start" mt={2} spacing={1}>
              <Text fontSize="sm" color="gray.500">
                Related Videos:
              </Text>
              {review.relatedVideos.map((video, index) => (
                <Link key={index} href={video} color="blue.500" isExternal>
                  {`Video ${index + 1}, `}
                </Link>
              ))}
            </HStack>
          )}
        </VStack>
      </Flex>
    </Box>
  );
};

BookReview.propTypes = {
  review: PropTypes.shape({
    title: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string),
    genres: PropTypes.arrayOf(PropTypes.string),
    publicationDate: PropTypes.instanceOf(Date),
    series: PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.number,
    }),
    isbn: PropTypes.string.isRequired,
    reviewText: PropTypes.string.isRequired,
    quotes: PropTypes.arrayOf(PropTypes.string).isRequired,
    rating: PropTypes.number,
    sillyRating: PropTypes.string.isRequired,
    reviewDate: PropTypes.instanceOf(Date),
    relatedVideos: PropTypes.arrayOf(PropTypes.string),
    tags: PropTypes.arrayOf(PropTypes.string),
    coverImage: PropTypes.string,
    additionalInfo: PropTypes.instanceOf(Map),
  }).isRequired,
};

export default BookReview;
