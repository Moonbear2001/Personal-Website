import { useState } from "react";
import { Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  slidesToShow: 2,
  speed: 1000,
};

const highlights = [
  {
    url: "/bookHighlights/neuromancer/neuromancer-cover-narrow.jpg",
    link: "/bookReviews/neuromancer",
  },
  {
    url: "/bookHighlights/hyperion/hyperion-modern-cover-narrow.jpg",
    link: "/bookReviews/hyperion",
  },
  {
    url: "/bookHighlights/theGunSlinger/gunslinger-cover-narrow.jpg",
    link: "/bookReviews/gunslinger",
  },
];

function CenterMode() {
  return (
    <Box height="300px" display="block" width="90%">
      <Slider {...settings}>
        {highlights.map((highlight, index) => (
          <Link key={index} to={highlight.link}>
            <Image
              src={highlight.url}
              alt="Example Image"
              objectFit="contain"
              height="300px"
              width="inherit"
            />
          </Link>
        ))}
      </Slider>
    </Box>
  );
}

export default CenterMode;
