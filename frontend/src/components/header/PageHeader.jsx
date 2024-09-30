import { Box, Flex, HStack } from "@chakra-ui/react";
import PropTypes from "prop-types";
import LinkedInLink from "./LinkedInLink";
import GithubLink from "./GithubLink";
import CustomHeading from "./CustomHeading";
import CustomBreadcrumb from "../breadcrumb/CustomBreadcrumb";
import Quote from "./Quote";

const PageHeader = ({ text, showQuote, randomQuote, comingSoon, quote }) => {
  // Get a random quote
  if (showQuote && randomQuote) {
    quote = {
      author: "random",
      quote: "random",
      source: "random",
    };
  } else if (comingSoon) {
    quote = {
      author: "me",
      quote: "this page is coming soon",
      source: "i swear bro just trust me",
    };
  }

  return (
    <Box mb={10}>
      <Flex as="header" justify="space-between" align="center">
        <CustomHeading text={text} />
        <HStack>
          <LinkedInLink />
          <GithubLink />
        </HStack>
      </Flex>
      {showQuote && (
        <Quote
          comingSoon={comingSoon}
          author={quote.author}
          quote={quote.quote}
          source={quote.source}
        />
      )}
      <CustomBreadcrumb />
    </Box>
  );
};

PageHeader.propTypes = {
  comingSoon: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  showQuote: PropTypes.bool.isRequired,
  randomQuote: PropTypes.bool,
  quote: PropTypes.shape({
    author: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
  }),
};

export default PageHeader;
