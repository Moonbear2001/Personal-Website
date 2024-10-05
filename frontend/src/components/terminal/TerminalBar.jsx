// TerminalBar.jsx
import { useEffect, useRef, useState } from "react";
import { Box, Input } from "@chakra-ui/react";
import { evaluateCommand } from "./terminalEval";
import PropTypes from "prop-types";

const TerminalBar = ({ isVisible }) => {
  const [command, setCommand] = useState("");
  const inputRef = useRef(null);

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
        </Box>
      )}
    </>
  );
};

TerminalBar.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

export default TerminalBar;
