import { Box, Text } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CenterMode() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <Box height="300px" overflow="hidden" display="block">
      <div className="slick-slider">
        <Slider {...settings}>
          <Box>
            <Text>1</Text>
          </Box>
          <Box>
            <Text>2</Text>
          </Box>
          <Box>
            <Text>3</Text>
          </Box>
        </Slider>
      </div>
    </Box>
  );
}

export default CenterMode;
