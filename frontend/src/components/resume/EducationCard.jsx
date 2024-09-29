import {
  Box,
  Flex,
  Image,
  Heading,
  Text,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

const EducationCard = ({ data: education }) => {
  return (
    <Box
      bg="gray.100"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      mb={6}
      boxShadow="md"
      height="200px" // Set a uniform height for the card
    >
      <Flex height="100%">
        {/* Logo container on the left */}
        <Box
          width="180px" // Fixed width for the logo container
          height="180px" // Fixed height for the logo container
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Image
            src={education.logo}
            alt={`${education.institution} logo`}
            maxHeight="160px" // Ensure the image fits within the container
            objectFit="contain" // Do not stretch the image
          />
        </Box>

        {/* Institution, degree, dates, and description on the right */}
        <Box ml={4} height="100%" flex="1">
          <Flex direction="column" height="100%" justifyContent="space-between">
            <Box>
              <Heading as="h3" size="md" mb={1}>
                {education.institution}
              </Heading>
              <Text fontWeight="bold" mb={1}>
                {education.degree}
              </Text>
              <Text>
                {new Date(education.startDate).toLocaleDateString()} -{" "}
                {new Date(education.endDate).toLocaleDateString()}
              </Text>
            </Box>
            <UnorderedList mt={2}>
              {education.description.map((desc, i) => (
                <ListItem key={i}>{desc}</ListItem>
              ))}
            </UnorderedList>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

EducationCard.propTypes = {
  data: PropTypes.shape({
    institution: PropTypes.string.isRequired,
    degree: PropTypes.string.isRequired,
    startDate: PropTypes.instanceOf(Date).isRequired,
    endDate: PropTypes.instanceOf(Date).isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
    website: PropTypes.string,
    location: PropTypes.shape({
      city: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
    }).isRequired,
    logo: PropTypes.string.isRequired,
  }).isRequired,
};

export default EducationCard;
