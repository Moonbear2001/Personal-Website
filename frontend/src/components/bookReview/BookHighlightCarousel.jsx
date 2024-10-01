import PropTypes from "prop-types";
import Slider from "react-slick";
import { Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BookHighlightCarousel = ({ books }) => {
  console.log("in highlight carousel, books: ", books);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box>
      {/* <Slider {...settings}>
        {books.map((book) => (
          <Link to={book.link} key={book.id}>
            <Box p={4}>
              <Image src={book.image} alt={book.title} />
            </Box>
          </Link>
        ))}
      </Slider> */}
      <Slider {...settings}>
        <Link to={"/bookReviews/neuromancer"}>
          <Box p={4}>
            <Image
              src={"/bookHighlights/neuromancer/neuromancer-cover-narrow.jpg"}
              alt={"Neuromancer"}
            />
          </Box>
        </Link>
      </Slider>
    </Box>
  );
};

BookHighlightCarousel.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default BookHighlightCarousel;
