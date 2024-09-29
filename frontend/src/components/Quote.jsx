import { Box, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

const Quote = ({ author, quote, source }) => {
  return (
    <Box>
      <Text fontSize="xl" mb={2}>
        &quot;{quote}&quot;
      </Text>
      <Text fontSize="md" mb={6} paddingLeft="10">
        - {author},{" "}
        <Text as="span" fontStyle="italic">
          {source}
        </Text>
      </Text>
    </Box>
  );
};

Quote.propTypes = {
  author: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
};

export default Quote;
