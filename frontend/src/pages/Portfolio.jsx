import { Container, Box } from "@chakra-ui/react";
import PageHeader from "../components/header/PageHeader";

// Add a quote for the portolio

const Portfolio = () => {
  return (
    <Container maxWidth="1200px" p={4} centerContent>
      <Box bg="gray.300" mx={10} position="relative">
        <PageHeader
          text="My body of work."
          showQuote={true}
          randomQuote={false}
          comingSoon={false}
        />
      </Box>
    </Container>
  );
};

export default Portfolio;
