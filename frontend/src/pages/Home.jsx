import { Image, Grid, GridItem, HStack, Flex, Text, Box, Heading } from '@chakra-ui/react';
import LinkedInLink from '../components/LinkedInLink';
import GithubLink from '../components/GithubLink';
import LinkCard from '../components/LinkCard';


function HomePage() {
  return (
    <Box bg="gray.300" mx={10}>
      <Flex
        as="header"
        justify="space-between"
        align="center"
      >
        <Heading fontSize="72px" mt={10} color="gray.900">Welcome.</Heading>
        <HStack>
          <LinkedInLink/>
          <GithubLink/>
        </HStack>

      </Flex>
      
      <Text maxW="600px" mb={8} color="gray.700">I’m <Text as="span" fontWeight="bold">Desmond Roberts</Text>, a recent Rice University Computer Science graduate and jack of all trades programmer offering tutoring and freelancing services.</Text>
      
      <Grid templateColumns='repeat(2, 5fr)' gap={6}>
        <GridItem>
          <LinkCard 
            title="About Me"
            infoBody="My life story."
            link="/about"
          />
        </GridItem>
        <GridItem>
          <LinkCard 
            title="Portfolio"
            infoBody="A collection of my work that I'm most proud of."
            link="/portfolio"
          />
        </GridItem>
        <GridItem>
          <LinkCard 
            title="Tutoring"
            infoBody="What I can teach and my experience doing it."
            link="/tutoring"
          />
        </GridItem>
        <GridItem>
          <LinkCard 
            title="Contact Me"
            infoBody="(Please I need a job)"
            link="/contact"
          />
        </GridItem>
        <GridItem>
          <LinkCard 
            title="My Interests"
            infoBody="Learn about what books, video games, sports, TV shows, and movies I’m passionate about."
            link="/"
          />
        </GridItem>
      </Grid>

      <Image></Image>
      
    </Box>
  );
}

export default HomePage;
