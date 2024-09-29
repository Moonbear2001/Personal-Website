import { Container, Box } from "@chakra-ui/react";
import PageHeader from "../components/PageHeader";

const Interests = () => {
  return (
    <Container maxWidth="1200px" p={4} centerContent>
      <Box bg="gray.300" mx={10} position="relative">
        <PageHeader text="Free time." />
      </Box>
    </Container>
  );
};

export default Interests;
