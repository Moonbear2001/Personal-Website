import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Tutoring from "./pages/Tutoring";
import About from "./pages/About";
import Freelance from "./pages/Freelance";
import Interests from "./pages/Interests";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/tutoring" element={<Tutoring />} />
      <Route path="/freelance" element={<Freelance />} />
      <Route path="/interests" element={<Interests />} />
    </Routes>
  );
}

export default App;
