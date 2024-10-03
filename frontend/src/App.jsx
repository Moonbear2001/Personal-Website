import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Tutoring from "./pages/Tutoring";
import About from "./pages/About";
import Freelance from "./pages/Freelance";
import BookReviews from "./pages/BookReviews";
import BookReviewEntry from "./pages/BookReviewEntry";
import Neuromancer from "./pages/bookHighlightPages/Neuromancer";
import Gunslinger from "./pages/bookHighlightPages/Gunslinger";
import Hyperion from "./pages/bookHighlightPages/Hyperion";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/tutoring" element={<Tutoring />} />
      <Route path="/freelance" element={<Freelance />} />
      <Route path="/bookReviews" element={<BookReviews />} />
      <Route path="/bookReviews/neuromancer" element={<Neuromancer />} />
      <Route path="/bookReviews/gunslinger" element={<Gunslinger />} />
      <Route path="/bookReviews/hyperion" element={<Hyperion />} />
      <Route path="/bookReviewEntry" element={<BookReviewEntry />} />
    </Routes>
  );
}

export default App;
