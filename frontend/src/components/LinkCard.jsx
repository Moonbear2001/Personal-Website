import { Divider, Link, LinkBox, Heading, Text, LinkOverlay } from '@chakra-ui/react';

const LinkCard = ({ title, description, link }) => {
  return (
    <LinkBox 
      bg="gray.100"
      maxW="md" 
      p="5"
      borderWidth="2px"
      borderColor="black"
      rounded="md"
      height="100%"
      display="flex"
      flexDirection="column"
      _hover={{ shadow: "lg" }}
    >
      <LinkOverlay as={Link} href={link}>
        <Heading size="md" mb={2} color="gray.700">
          {title}
        </Heading>
        
      </LinkOverlay>
      <Divider/>
      <Text mt={2} fontSize="sm" color="gray.700">
        {description}
      </Text>
    </LinkBox>
    
  );
}

export default LinkCard;
