import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Tutoring from "./pages/Tutoring";
import About from "./pages/About";
import Freelance from "./pages/Freelance";
import BookReviews from "./pages/BookReviews";
import BookReviewEntry from "./pages/BookReviewEntry";
import Login from "./pages/Login";
import { Box } from "@chakra-ui/react";
import TerminalBar from "./components/terminal/TerminalBar";
import { ChakraProvider } from "@chakra-ui/react";

// Import theming
import theme from "./styles/theme";

function App() {
  const [isTerminalVisible, setTerminalVisible] = useState(false);

  // Toggle terminal visibility
  const handleKeyDown = (e) => {
    if (e.ctrlKey && e.key === ",") {
      e.preventDefault();
      setTerminalVisible((prev) => !prev);
    }
  };

  // Attach global keydown listener for terminal
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tutoring" element={<Tutoring />} />
        <Route path="/freelance" element={<Freelance />} />
        <Route path="/bookReviews" element={<BookReviews />} />
        <Route
          path={`/${import.meta.env.VITE_REVIEW_ENTRY_PATH}`}
          element={<BookReviewEntry />}
        />
        <Route
          path={`/${import.meta.env.VITE_LOGIN_PATH}`}
          element={<Login />}
        />
      </Routes>
      <Box p={4}>
        <TerminalBar isVisible={isTerminalVisible} />
      </Box>
    </ChakraProvider>
  );
}

export default App;
