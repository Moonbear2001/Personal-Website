import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Tutoring from "./pages/Tutoring";
import About from "./pages/About";
import Freelance from "./pages/Freelance";
import BookReviews from "./pages/BookReviews";
import BookReviewEntry from "./pages/BookReviewEntry";
import Login from "./pages/Login"

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
      <Route
        path={`/${import.meta.env.VITE_REVIEW_ENTRY_PATH}`}
        element={<BookReviewEntry />}
      />
      <Route path={`/${import.meta.env.VITE_LOGIN_PATH}`} element={<Login />} />
    </Routes>
  );
}

export default App;
