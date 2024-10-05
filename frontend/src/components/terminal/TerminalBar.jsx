import { useEffect, useRef, useState } from "react";
import { Box, Input, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const TerminalBar = ({ isVisible }) => {
  const [command, setCommand] = useState("");
  const [showHelp, setShowHelp] = useState(false); // State to control help visibility
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // Evaluate command
  const evaluateCommand = (command) => {
    const pages = [
      "..",
      "home",
      "about",
      "contact",
      "portfolio",
      "bookReviews",
    ];
    const tokens = command.toLowerCase().split(" ");

    if (tokens[0] === "cd") {
      if (pages.includes(tokens[1])) {
        if (tokens[1] === "home" || tokens[1] === "..") {
          navigate("/");
        } else {
          navigate(`/${tokens[1]}`);
        }
      }
    } else if (tokens[0] === "help") {
      setShowHelp(true); // Show the help popup
    } else {
      setShowHelp(false); // Hide help if any other command is typed
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      evaluateCommand(command);
      setCommand("");
    }
  };

  useEffect(() => {
    if (inputRef.current && isVisible) {
      inputRef.current.focus();
    }
    // Hide help popup when terminal is closed
    if (!isVisible) {
      setShowHelp(false);
    }
  }, [isVisible]);

  return (
    <>
      {isVisible && (
        <Box
          position="fixed"
          top="0"
          left="0"
          width="100%"
          height="100%"
          bg="rgba(0, 0, 0, 0.5)" // Dimmed background
          zIndex="999" // Behind the terminal
        />
      )}
      {isVisible && (
        <Box
          position="fixed"
          top="10px"
          left="50%"
          transform="translateX(-50%)"
          zIndex="1000"
          bg="gray.900"
          boxShadow="lg"
          width="900px"
          borderRadius="md"
          p={4} // Added padding for better spacing
        >
          <Input
            ref={inputRef}
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Enter 'help' for a list of commands..."
            size="lg"
            height="50px"
            width="100%"
            color="white"
            bg="gray.800"
          />
          {/* Help popup appears below the terminal */}
          {showHelp && (
            <Box
              mt={2}
              p={4}
              bg="gray.700"
              color="white"
              borderRadius="md"
              boxShadow="md"
            >
              <Text fontWeight="bold">NAME</Text>
              <Text ml={4}>cd - change the current page</Text>

              <Text fontWeight="bold" mt={2}>
                SYNOPSIS
              </Text>
              <Text ml={4}>cd [OPTION]... [PAGE]</Text>

              <Text fontWeight="bold" mt={2}>
                DESCRIPTION
              </Text>
              <Text ml={4}>
                The cd command is used to navigate between different pages of
                the website.
              </Text>

              <Text ml={4} mt={2}>
                Available pages:
              </Text>
              <Text ml={6}>home - Navigate to the homepage</Text>
              <Text ml={6}>about - Navigate to the about page</Text>
              <Text ml={6}>contact - Navigate to the contact page</Text>
              <Text ml={6}>portfolio - Navigate to the portfolio page</Text>
              <Text ml={6}>
                bookReviews - Navigate to the book reviews page
              </Text>
            </Box>
          )}
        </Box>
      )}
    </>
  );
};

TerminalBar.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

export default TerminalBar;
