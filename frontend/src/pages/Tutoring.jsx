import { Container, Box } from "@chakra-ui/react";
import PageHeader from "../components/header/PageHeader";

quote = {
  author: "Bill Gates",
  quote:
    "A computer is like a violin, you can imagine it making beautiful music, but you have to learn how to play it.",
};

const Tutoring = () => {
  return (
    <Container maxWidth="1200px" p={4} centerContent>
      <Box bg="gray.300" mx={10} position="relative">
        <PageHeader
          text="Tutoring."
          showQuote={true}
          randomQuote={false}
          comingSoon={true}
        />
      </Box>
    </Container>
  );
};

export default Tutoring;
