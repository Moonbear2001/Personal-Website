import { Box, Image } from "@chakra-ui/react";
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
  },
  {
    url: "/bookHighlights/hyperion/hyperion-modern-cover-narrow.jpg",
  },
  {
    url: "/bookHighlights/theGunSlinger/gunslinger-cover-narrow.jpg",
  },
];

function CenterMode() {
  return (
    <Box height="300px" display="block" width="90%">
      <Slider {...settings}>
        {highlights.map((highlight, index) => (
          <Image
            key={index}
            src={highlight.url}
            alt="Example Image"
            objectFit="contain"
            height="300px"
            width="inherit"
          />
        ))}
      </Slider>
    </Box>
  );
}

export default CenterMode;
