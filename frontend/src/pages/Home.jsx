import { Container, Image, Grid, GridItem, Text, Box } from "@chakra-ui/react";
import LinkCard from "../components/header/LinkCard";
import PageHeader from "../components/header/PageHeader";
import WelcomeMessage from "../components/messages/WelcomeMessage";

const cards = [
  {
    title: "About Me",
    description:
      "Learn more about who I am, where I'm from, and how I approach problems.",
    link: "/about",
  },
  {
    title: "Portfolio",
    description:
      "A collection of my work that I'm most proud of and what I'm currently working on.",
    link: "/portfolio",
  },
  {
    title: "Book Reviews",
    description:
      "Maybe I've read your favorite book, check to see if I've read it and what I thought of it.",
    link: "/bookReviews",
  },
  {
    title: "Contact Me",
    description:
      "Reach out for any reason whatsoever! Tutoring inquiries, freelancing opportunities, feedback on the website, or just to say hi.",
    link: "/contact",
  },
  // {
  //   title: "Tutoring",
  //   description: "Find out about what I can teach and my experience doing it.",
  //   link: "/tutoring",
  // },
  // {
  //   title: "Freelance Work",
  //   description:
  //     "I would love to build a full-stack application to meet your business's needs.",
  //   link: "/freelance",
  // },
];

function HomePage() {
  return (
    <Container maxWidth="1200px" p={4} centerContent>
      <WelcomeMessage />
      <Box bg="gray.300" mx={10} position="relative">
        <PageHeader
          text="Welcome."
          showQuote={false}
          randomQuote={false}
          comingSoon={false}
        />

        <Text maxW="600px" mb={8} color="gray.700">
          I’m{" "}
          <Text as="span" fontWeight="bold">
            Desmond Roberts
          </Text>
          , a recent Rice University Computer Science graduate and jack of all
          trades programmer tutoring, freelancing, learning new technologies,
          and looking for a job in tech.
        </Text>

        <Grid my={10} templateColumns="repeat(2, 1fr)" gap={6}>
          {cards.map((card, index) => (
            <GridItem key={index}>
              <LinkCard
                key={index}
                title={card.title}
                description={card.description}
                link={card.link}
              />
            </GridItem>
          ))}
        </Grid>

        <Box
          bottom="0"
          left="0"
          width="100%"
          display="flex"
          justifyContent="center"
        >
          <Image
            src="/musashi-eating-trans-bg.png"
            alt="Footer Image"
            width={["60%", "50%", "30%"]}
            maxWidth="600px"
            objectFit="cover"
          />
        </Box>
      </Box>
    </Container>
  );
}

export default HomePage;
