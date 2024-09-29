import { Container, Box } from "@chakra-ui/react";
import PageHeader from "../components/PageHeader";

const Portfolio = () => {
  return (
    <Container maxWidth="1200px" p={4} centerContent>
      <Box bg="gray.300" mx={10} position="relative">
        <PageHeader text="My Body of Work." />
      </Box>
    </Container>
  );
};

export default Portfolio;
