import { Container, Box } from "@chakra-ui/react";
import PageHeader from "../components/header/PageHeader";
import ComingSoon from "../components/ComingSoon";

const quote = {
  author: "Bill Gates",
  quote:
    "A computer is like a violin, you can imagine it making beautiful music, but you have to learn how to play it.",
};

const Tutoring = () => {
  return (
    <Container maxWidth="1200px" p={4} centerContent>
      <Box bg="gray.300" mx={10} position="relative">
        <PageHeader
          quote={quote}
          text="Tutoring."
          showQuote={true}
          randomQuote={false}
          comingSoon={false}
        />
      </Box>
      <ComingSoon />
    </Container>
  );
};

export default Tutoring;
