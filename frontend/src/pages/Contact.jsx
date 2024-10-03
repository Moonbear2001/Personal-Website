import { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Textarea,
  useToast,
  Text,
  Container,
} from "@chakra-ui/react";
import PageHeader from "../components/header/PageHeader";

const ContactReasons = Object.freeze({
  TUTORING: "Tutoring",
  JOB_OPPORTUNITY: "Job Opportunity",
  OTHER: "Other",
});

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [customReason, setCustomReason] = useState("N/A");
  const [message, setMessage] = useState("");

  const toast = useToast();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const submission = { name, email, reason, customReason, message };

    try {
      const response = await fetch("/api/v1/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submission),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const result = await response.json();

      toast({
        title: "Thanks!",
        description: "I will get back you as soon as possible.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Yikes!",
        description: "An error occurred...try again later.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
    setName("");
    setEmail("");
    setReason("");
    setCustomReason("");
    setMessage("");
  };

  return (
    <Container maxWidth="1200px" p={4} centerContent>
      <Box bg="gray.300" mx={10} position="relative">
        <PageHeader
          text="Reach out."
          showQuote={false}
          randomQuote={false}
          comingSoon={false}
        />

        <Text maxW="600px" pt={4} pb={2} color="gray.700">
          Why contact me?
        </Text>

        <Text maxW="600px" py={2} color="gray.700">
          I offer a range of services including freelance web development and
          various types of tutoring. Please specify the reason for contacting me
          and let me know how I can best help you. I will get back to you as
          soon as possible.
        </Text>
        <Text maxW="600px" pt={2} pb={10} color="gray.700">
          Thanks!
        </Text>

        <Box as="form" onSubmit={handleSubmit}>
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              borderWidth="2px"
              borderColor="black"
              bg="gray.100"
              _hover={{
                borderColor: "gray.500",
              }}
              _focus={{
                borderColor: "blue.500",
              }}
            />
          </FormControl>

          <FormControl isRequired mt="4">
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              borderWidth="2px"
              borderColor="black"
              bg="gray.100"
              _hover={{
                borderColor: "gray.500",
              }}
              _focus={{
                borderColor: "blue.500",
              }}
            />
          </FormControl>

          <FormControl isRequired mt="4">
            <FormLabel>Reason for Contacting</FormLabel>
            <Select
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Select reason"
              borderColor="black"
              borderWidth="2px"
              bg="gray.100"
              _hover={{
                borderColor: "gray.500",
              }}
              _focus={{
                borderColor: "blue.500",
              }}
              sx={{
                option: {
                  backgroundColor: "gray.100", // Dark background for dropdown items
                  color: "black", // Light text color
                  _hover: {
                    backgroundColor: "gray.600", // Lighten on hover
                  },
                  _focus: {
                    backgroundColor: "gray.600", // Light highlight color when focused
                  },
                },
              }}
            >
              {Object.entries(ContactReasons).map(([key, value]) => (
                <option key={key} value={value}>
                  {value}
                </option>
              ))}
            </Select>
          </FormControl>

          {/* Show custom reason input if "Other" is selected */}
          {reason === ContactReasons.OTHER && (
            <FormControl isRequired mt="4">
              <FormLabel>Explain yourself!</FormLabel>
              <Input
                value={customReason}
                onChange={(e) => setCustomReason(e.target.value)}
                placeholder="Please specify your reason"
                _placeholder={{ opacity: 1, color: "gray.900" }}
                borderColor="black"
                borderWidth="2px"
                bg="gray.100"
                _hover={{
                  borderColor: "gray.500",
                }}
                _focus={{
                  borderColor: "blue.500",
                }}
              />
            </FormControl>
          )}

          <FormControl mt="4">
            <FormLabel>Message</FormLabel>
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="What can I help you with? :)"
              borderColor="black"
              borderWidth="2px"
              bg="gray.100"
              _hover={{
                borderColor: "gray.500",
              }}
              _focus={{
                borderColor: "blue.500",
              }}
            />
          </FormControl>

          <Button
            mt="10"
            bg="gray.900"
            type="submit"
            borderWidth="2px"
            borderColor="black"
            textColor={"white"}
          >
            Send Message
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;
