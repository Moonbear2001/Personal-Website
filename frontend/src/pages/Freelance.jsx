import { Container, Box } from "@chakra-ui/react";
import PageHeader from "../components/header/PageHeader";

const Freelance = () => {
  return (
    <Container maxWidth="1200px" p={4} centerContent>
      <Box bg="gray.300" mx={10} position="relative">
        <PageHeader
          text="Freelance."
          showQuote={true}
          randomQuote={false}
          comingSoon={true}
        />
      </Box>
    </Container>
  );
};

export default Freelance;
