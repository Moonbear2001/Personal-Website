import { Container, Box, VStack } from "@chakra-ui/react";
import PageHeader from "../components/header/PageHeader";
import PortfolioSection from "../components/portfolio/PortfolioSection";
import CustomDivider from "../components/CustomDivider";

const quote = {
  quote:
    "Most of the good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.",
  author: "Linus Torvalds",
};

const Portfolio = () => {
  const pygameProjects = [
    {
      name: "Pong",
      link: "https://github.com/Moonbear2001/Pygame-Projects/tree/main/pong",
      image: "/portfolio/Pong.webp",
    },
    {
      name: "Flappy Bird",
      link: "https://github.com/Moonbear2001/Pygame-Projects/tree/main/flappy_bird",
      image: "/portfolio/Flappy_Bird.webp",
    },
  ];
  const pygameBlurb = `I am a huge fan of the Python library PyGame. It has a strong dedicated community and has withstood the test of time. It strikes a very nice balance between being high level enough to build impressive projects and being low level enough to learn a lot of fundamental game development concepts. Its low barrier of entry combined with accessibility make it perfect for learning programming and I have used it throughout my time as a coding tutor. This is a collection of projects that I have taught countless times over my last 3 years of teaching.`;

  const phaserProjects = [
    {
      name: "Pong",
      link: "https://github.com/Moonbear2001/Pygame-Projects/tree/main/pong",
      image: "https://example.com/project1.jpg",
    },
  ];
  const phaserBlurb = `Phaser is pretty cool.`;

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
      <VStack>
        <PortfolioSection
          title="PyGame Projects"
          description={pygameBlurb}
          projects={pygameProjects}
        />
        <CustomDivider />
        <PortfolioSection
          title="Phaser Projects"
          description={phaserBlurb}
          projects={pygameProjects}
        />
      </VStack>
    </Container>
  );
};

export default Portfolio;
