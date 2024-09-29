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

const ProjectCard = ({ data: project }) => {
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
            src={project.logo}
            alt={`${project.title} logo`}
            maxHeight="160px" // Ensure the image fits within the container
            objectFit="contain" // Do not stretch the image
          />
        </Box>

        {/* Institution, degree, dates, and description on the right */}
        <Box ml={4} height="100%" flex="1">
          <Flex direction="column" height="100%" justifyContent="space-between">
            <Box>
              <Heading as="h3" size="md" mb={1}>
                {project.title}
              </Heading>
              <Text fontWeight="bold" mb={1}>
                {project.role}
              </Text>
              <Text>
                {new Date(project.startDate).toLocaleDateString()} -{" "}
                {new Date(project.endDate).toLocaleDateString()}
              </Text>
            </Box>
            <UnorderedList mt={2}>
              {project.description.map((desc, i) => (
                <ListItem key={i}>{desc}</ListItem>
              ))}
            </UnorderedList>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

ProjectCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    startDate: PropTypes.instanceOf(Date).isRequired,
    endDate: PropTypes.instanceOf(Date).isRequired,
    website: PropTypes.string, // Optional
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
    logo: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default ProjectCard;
