import React from 'react';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';

const ComingSoonPage = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <VStack spacing={4} textAlign="center" >
        <Heading fontSize="4xl">Coming Soon</Heading>
        <Text fontSize="lg" maxW="lg">
          I'm still building this page, but I'm working hard so it'll be here soon :)
        </Text>
      </VStack>
    </Box>
  );
};

export default ComingSoonPage;
