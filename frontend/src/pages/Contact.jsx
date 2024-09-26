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
  Text
} from '@chakra-ui/react';

const ContactReasons = Object.freeze({
  TUTORING: "Tutoring",
  JOB_OPPORTUNITY: "Job Opportunity",
  OTHER: "Other",
});

const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [customReason, setCustomReason ] = useState("");
  const [message, setMessage] = useState("");

  const toast = useToast();


  const handleSubmit = async (event) => {
    event.preventDefault();

    const submission = { name, email, reason, customReason, message };
    console.log(name);
    console.log(email);
    console.log(reason);
    console.log(customReason);
    console.log(message);

    try {
      const response = await fetch("/api/v1/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submission),
      });
      
      // if (!response.ok) {
      //   console.log("response not ok");
      //   throw new Error("Network response was not ok.");
      // }

      const result = await response.json();
      console.log(result.message);

      toast({
        title: "Thanks!",
        description: "I will get back you as soon as possible.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setName("");
      setEmail("");
      setReason("");
      setCustomReason("");
      setMessage("");
    } 
    catch (error) {
      toast({
        title: "Yikes!",
        // description: "An error occurred...try again later.",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      console.log(error);
    }

  };

  return (
    <Box maxW="lg" mx="auto" mt="10">

      <Text maxW="600px" mb={8} color="gray.700">
        Why contact me?
      </Text>

      <Text maxW="600px" mb={8} color="gray.700">
        I offer a range of services including freelance web development and various types of tutoring.
      </Text>
      <Text maxW="600px" mb={8} color="gray.700">
        Please specify the reason for contacting me and let me know how I can best help you.
      </Text>
      <Text maxW="600px" mb={8} color="gray.700">
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
          />
        </FormControl>

        <Button mt="4" colorScheme="gray.500" type="submit">
          Send Message
        </Button>
      </Box>

    </Box>
  );
}

export default Contact;