import PropTypes from "prop-types";
import { Box } from "@chakra-ui/react";

const TimelineBar = ({ width, color, onClick, left, top, opacity }) => {
  return (
    <Box
      left={left}
      top={top}
      w={width}
      h="20px"
      bg={color}
      m="5px 0"
      opacity={opacity}
      transition="all 0.2s ease"
      _hover={{ opacity: 0.8, transform: "scale(1.05)" }}
      _active={{ opacity: 0.6, transform: "scale(1)" }}
      onClick={onClick}
    />
  );
};

TimelineBar.propTypes = {
  width: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  left: PropTypes.string.isRequired,
  top: PropTypes.string.isRequired,
  opacity: PropTypes.number.isRequired,
};

export default TimelineBar;
