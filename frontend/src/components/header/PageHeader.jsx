import { Box, Flex, HStack } from "@chakra-ui/react";
import PropTypes from "prop-types";
import LinkedInLink from "./LinkedInLink";
import GithubLink from "./GithubLink";
import CustomHeading from "./CustomHeading";
import CustomBreadcrumb from "../breadcrumb/CustomBreadcrumb";
import Quote from "./Quote";
import { getRandomQuote } from "../../services/quoteService";
import { useState, useEffect } from "react";

const PageHeader = ({ text, showQuote, randomQuote, comingSoon, quote }) => {
  const comingSoonQuote = {
    author: "me",
    quote: "this page is coming soon",
    source: "i swear bro just trust me",
  };

  const [randomQuoteObj, setRandomQuoteObj] = useState(null); // State to store fetched data
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch data after the component has mounted
  useEffect(() => {
    if (showQuote && randomQuote) {
      getRandomQuote().then((randomQuoteData) => {
        console.log("Random quote data: ", randomQuoteData);
        setRandomQuoteObj(randomQuoteData);
        console.log("Random quote obj: ", randomQuoteObj);
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return null;
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
      {showQuote && comingSoon && (
        <Quote
          author={comingSoonQuote.author}
          quote={comingSoonQuote.quote}
          source={comingSoonQuote.source}
        />
      )}
      {showQuote && randomQuote && (
        <Quote
          comingSoon={false}
          author={randomQuoteObj.author}
          quote={randomQuoteObj.quote}
          source={randomQuoteObj.source}
        />
      )}
      {showQuote && !randomQuote && !comingSoon && (
        <Quote
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
  randomQuote: PropTypes.bool.isRequired,
  quote: PropTypes.shape({
    author: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
  }),
};

export default PageHeader;
