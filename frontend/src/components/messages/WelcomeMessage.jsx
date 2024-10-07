import { useEffect, useState } from "react";
import { Box, Text, Slide } from "@chakra-ui/react";

const WelcomeMessage = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const hasSeenMessage = localStorage.getItem("hasSeenMessage");

    if (!hasSeenMessage) {
      setShowMessage(true);

      setTimeout(() => {
        setShowMessage(false);
        localStorage.setItem("hasSeenMessage", "true");
      }, 10000);
    }
  }, []);

  return (
    <Slide direction="bottom" in={showMessage} style={{ zIndex: 10 }}>
      <Box
        p={4}
        bg="blue.500"
        color="white"
        textAlign="center"
        rounded="md"
        boxShadow="md"
      >
        <Text>
          Tip: You can toggle access the command-line utility by using{" "}
          <strong>Ctrl + ,</strong>.
        </Text>
      </Box>
    </Slide>
  );
};

export default WelcomeMessage;
