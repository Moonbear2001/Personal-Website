import { Container, Box, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import LinkedInLink from "../components/LinkedInLink";
import GithubLink from "../components/GithubLink";
import Timeline from "../components/timeline/Timeline";
import TimelineKey from "../components/timeline/TimelineKey";
import CustomDivider from "../components/CustomDivider";
import Resume from "../components/resume/Resume";

const blurb = `Growing up as an Air Force kid, I moved all around the world and called places like England, Japan, France, and the United States home. I've lived Alabama, Texas, California. I've lived in nice houses and motorhomes and I’ve learned that adaptability is key to thriving in any environment.\n\nThis idea has driven me in everything I do, including my journey into computer science. When I started at Rice University, I had never written a single line of code, but I dove in headfirst, striving to improve every day. Over those four years of struggle and growth and love of computers, science, math, and programming was born.\n\nToday, I am committed to continuous improvement, actively learning new languages and technologies to become a versatile and well-rounded professional in the tech industry. I constantly put my skill to the test with tutoring and freelance work.`;

const About = () => {
  return (
    <Container maxWidth="1200px" p={4} centerContent>
      <Box bg="gray.300" mx={10} position="relative">
        <Flex as="header" justify="space-between" align="center">
          <Heading fontSize="72px" mt={5} color="gray.900">
            My story.
          </Heading>
          <HStack>
            <LinkedInLink />
            <GithubLink />
          </HStack>
        </Flex>
        <Text fontSize="xl" mb={2}>
          “If a man does not master his circumstances, then he is bound to be
          mastered by them.”
        </Text>
        <Text fontSize="md" mb={6}>
          — Amor Towles,{" "}
          <Text as="span" fontStyle="italic">
            A Gentleman in Moscow
          </Text>
        </Text>
        <Text whiteSpace="pre-wrap" mb={8} color="gray.700">
          {blurb}
        </Text>
        <CustomDivider />
        <TimelineKey />
        <Timeline />
        <CustomDivider />
        <Resume />
      </Box>
    </Container>
  );
};

export default About;
