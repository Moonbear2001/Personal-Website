import { HStack, Box, Text } from "@chakra-ui/react";

const TimelineKey = () => {
  return (
    <HStack mb={8} spacing={4} align="center">
      <HStack>
        <Box bg="blue.500" w="20px" h="20px" borderRadius="md" />
        <Text>Education</Text>
      </HStack>

      <HStack>
        <Box bg="purple.500" w="20px" h="20px" borderRadius="md" />
        <Text>Employment</Text>
      </HStack>

      <HStack>
        <Box bg="green.500" w="20px" h="20px" borderRadius="md" />
        <Text>Internships</Text>
      </HStack>

      <HStack>
        <Box bg="red.500" w="20px" h="20px" borderRadius="md" />
        <Text>Projects</Text>
      </HStack>
    </HStack>
  );
};

export default TimelineKey;
