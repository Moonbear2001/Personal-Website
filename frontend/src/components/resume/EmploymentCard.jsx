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

const EmploymentCard = ({ data: employment }) => {
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
        <Box
          width="180px" // Fixed width for the logo container
          height="180px" // Fixed height for the logo container
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Image
            src={employment.logo}
            alt={`${employment.company} logo`}
            maxHeight="160px" // Ensure the image fits within the container
            objectFit="contain" // Do not stretch the image
          />
        </Box>

        {/* Institution, degree, dates, and description on the right */}
        <Box ml={4} height="100%" flex="1">
          <Flex direction="column" height="100%" justifyContent="space-between">
            <Box>
              <Heading as="h3" size="md" mb={1}>
                {employment.company}
              </Heading>
              <Text fontWeight="bold" mb={1}>
                {employment.role}
              </Text>
              <Text>
                {new Date(employment.startDate).toLocaleDateString()} -{" "}
                {new Date(employment.endDate).toLocaleDateString()}
              </Text>
            </Box>
            <UnorderedList mt={2}>
              {employment.description.map((desc, i) => (
                <ListItem key={i}>{desc}</ListItem>
              ))}
            </UnorderedList>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

// Define PropTypes for EducationCard
EmploymentCard.propTypes = {
  data: PropTypes.shape({
    company: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    startDate: PropTypes.instanceOf(Date).isRequired, // Changed to Date type
    endDate: PropTypes.instanceOf(Date).isRequired, // Changed to Date type
    website: PropTypes.string,
    location: PropTypes.shape({
      city: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
    }).isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
    logo: PropTypes.string.isRequired,
  }).isRequired,
};

export default EmploymentCard;
