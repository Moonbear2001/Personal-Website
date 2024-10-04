import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Button,
  Input,
  FormControl,
  FormLabel,
  VStack,
  Heading,
} from "@chakra-ui/react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/v1/login", {
        username,
        password,
      });
      const token = response.data.token;

      // Store the token in localStorage
      localStorage.setItem("token", token);

      // Redirect or perform further actions
      navigate(`/${import.meta.env.VITE_REVIEW_ENTRY_PATH}`);
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <VStack
        as="form"
        onSubmit={handleLogin}
        width="300px"
        spacing="4"
        p="8"
        borderRadius="8px"
        boxShadow="lg"
        bg="white"
      >
        <Heading size="lg">Login</Heading>
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </FormControl>
        <Button type="submit" colorScheme="teal" width="full">
          Login
        </Button>
      </VStack>
    </Box>
  );
};

export default Login;
