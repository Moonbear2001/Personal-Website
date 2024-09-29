import { Heading } from "@chakra-ui/react";
import PropTypes from "prop-types";

const CustomHeading = ({ text }) => {
  return (
    <Heading fontSize="72px" mt={5} color="gray.900">
      {text}
    </Heading>
  );
};

CustomHeading.propTypes = {
  text: PropTypes.string.isRequired,
};

export default CustomHeading;
