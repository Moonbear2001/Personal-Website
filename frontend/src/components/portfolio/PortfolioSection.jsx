import { Box, Text, Image, SimpleGrid, Link } from "@chakra-ui/react";
import PropTypes from "prop-types";

const PortfolioSection = ({ title, description, projects }) => {
  return (
    <Box mb={8}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        {title}
      </Text>
      <Text mb={6}>{description}</Text>

      <SimpleGrid columns={[2, 3, 4]} spacing={4}>
        {projects.map((project, index) => (
          <Link
            key={index}
            href={project.link}
            isExternal
            _hover={{ textDecoration: "none" }} // Optional: to remove underline on hover
          >
            <Image
              src={project.image}
              alt={project.name}
              boxSize="150px" // Adjust this size as needed
              objectFit="contain" // Ensures the entire image is shown
              maxHeight="150px" // Maintain max height for consistency
              maxWidth="100%" // Maintain full width
              _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
            />
          </Link>
        ))}
      </SimpleGrid>
    </Box>
  );
};

PortfolioSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  projects: PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }),
};

export default PortfolioSection;
