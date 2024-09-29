import { Box, Flex, Text, UnorderedList, ListItem } from "@chakra-ui/react";
import LogoLink from "./LogoLink"; // Adjust the import path as needed
import PropTypes from "prop-types";
import { useState } from "react";

const formatDate = (date) =>
  date ? new Date(date).toLocaleDateString() : "Present";

const ProjectCard = ({
  data: { title, role, description, website, logo, startDate, endDate },
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      bg="gray.100"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      mb={6}
      boxShadow="md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Flex height="100%">
        <LogoLink website={website} logo={logo} altText={`${title} logo`} />

        <Box ml={4} flex="1">
          <Flex direction="column" height="100%" justify="center">
            {/* Project Title and Role stacked vertically */}
            <Flex direction="column" mb={1} transition="0.3s">
              <Text
                fontWeight="bold"
                fontSize={isHovered ? "3xl" : "4xl"} // Adjusted font size for hover
                transition="font-size 0.3s, transform 0.3s"
                transform={isHovered ? "translateY(-5px)" : "none"} // Move up slightly on hover
              >
                {title}
              </Text>
              <Text
                fontSize={isHovered ? "2xl" : "3xl"} // Adjusted font size for hover
                transition="font-size 0.3s, transform 0.3s"
                transform={isHovered ? "translateY(-5px)" : "none"} // Move up slightly on hover
              >
                {role}
              </Text>
            </Flex>

            {/* Duration - only visible when hovered */}
            {isHovered && (
              <Box>
                <Text fontSize="sm">
                  {formatDate(startDate)} - {formatDate(endDate)}
                </Text>
              </Box>
            )}
          </Flex>
        </Box>
      </Flex>

      {/* Expanded Description Section - only visible when hovered */}
      {isHovered && (
        <Box mt={4}>
          <UnorderedList>
            {description.map((desc, i) => (
              <ListItem key={i}>{desc}</ListItem>
            ))}
          </UnorderedList>
        </Box>
      )}
    </Box>
  );
};

// Define PropTypes for ProjectCard
ProjectCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
    website: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string, // Optional endDate
  }).isRequired,
};

export default ProjectCard;
