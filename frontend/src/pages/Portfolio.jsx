import { Container, Box } from "@chakra-ui/react";
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
  const pygameBlurb = `I am a huge fan of the Python library PyGame. It has a strong dedicated community and has withstood the test of time. It strikes a very nice balance between being high level enough to build impressive projects and being low level enough to learn a lot of fundamental game development concepts. Its low barrier of entry combined with accessibility make it perfect for learning programming and I have used it throughout my time as a coding tutor. This is a collection of projects that I have taught countless times over my last 3 years of teaching at theCoderSchool in Irvine.`;

  const phaserProjects = [
    {
      name: "Phaser Galaga",
      link: "https://github.com/Moonbear2001/Phaser-Projects/tree/main/galaga",
      image: "/portfolio/galaga.png",
    },
  ];
  const phaserBlurb = `The JS Phaser library is a powerful and open-source (always nice when something is open-source) JavaScript framework for building 2D games. It is easy and flexible and I am building projects and slowly incorporating it into my tutoring. It offers nice features out of the box such as a physics engine, sprite animations, input handling, and asset management. It is slightly higher level than PyGame and in my opinion is the next step in game learning, especially if a student already has some JS experience.`;

  const godotProjects = [
    {
      name: "Museum of Immersive Art",
      link: "https://github.com/Moonbear2001/Museum-of-Immersive-Art",
      image: "/portfolio/MOIA_logo.jpg",
    },
  ];

  const godotBlurb = `Godot is awesome! Open-source (love it), powerful, growing, and simple to use. It offers multiple programming language options and I think it is an excellent choice for sometime getting into game development because it is much simpler to jump into than a professional level engine like Unreal or Unity. It was my choice when developing Museum of Immersive Art while in school and I never had an issue with it. I hope to develop more games in Godot in the future and test out its 3D capabilities.`;

  const schoolProjects = [
    {
      name: "COMP 421: Operating Systems and Concurrent Programming",
      link: "https://www.clear.rice.edu/comp421/",
      image: "/portfolio/comp421.jpg",
    },
    {
      name: "COMP 424: Mobile and Embedded Programming",
      link: "https://www.hackster.io/2017-warriors/424-lane-keeping-car-e896ad",
      image: "/portfolio/lane_keeping_car.avif",
    },
  ];

  const schoolBlurb = `I completed many projects while studying at Rice University, but these are the ones that I am most proud of. They include: an operating I wrote over the course of a semester and a lane-keeping RC car.`;

  return (
    <Container maxWidth="1200px" p={4}>
      <Box bg="gray.300" mx={10} position="relative">
        <PageHeader
          text="My body of work."
          showQuote={true}
          randomQuote={false}
          comingSoon={false}
          quote={quote}
        />

        <PortfolioSection
          title="School Projects"
          description={schoolBlurb}
          projects={schoolProjects}
        />
        <CustomDivider />

        <PortfolioSection
          title="Godot Projects"
          description={godotBlurb}
          projects={godotProjects}
        />
        <CustomDivider />

        <PortfolioSection
          title="PyGame Projects"
          description={pygameBlurb}
          projects={pygameProjects}
        />
        <CustomDivider />
        <PortfolioSection
          title="Phaser Projects"
          description={phaserBlurb}
          projects={phaserProjects}
        />
        <CustomDivider />
      </Box>
    </Container>
  );
};

export default Portfolio;
