import { Container, Box } from "@chakra-ui/react";
import PageHeader from "../components/header/PageHeader";
import ComingSoon from "../components/ComingSoon";

const quote = {
  quote:
    "Most of the good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.",
  author: "Linus Torvalds",
};

const Portfolio = () => {
  return (
    <Container maxWidth="1200px" p={4} centerContent>
      <Box bg="gray.300" mx={10} position="relative">
        <PageHeader
          text="My body of work."
          showQuote={true}
          randomQuote={false}
          comingSoon={false}
          quote={quote}
        />
      </Box>
      <ComingSoon />
    </Container>
  );
};

export default Portfolio;
