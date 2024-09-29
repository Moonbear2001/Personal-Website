import { Box, Flex, HStack } from "@chakra-ui/react";
import PropTypes from "prop-types";
import LinkedInLink from "./LinkedInLink";
import GithubLink from "./GithubLink";
import CustomHeading from "./CustomHeading";
import CustomBreadcrumb from "./breadcrumb/CustomBreadcrumb";

const PageHeader = ({ text }) => {
  return (
    <Box mb={10}>
      <Flex as="header" justify="space-between" align="center">
        <CustomHeading text={text} />
        <HStack>
          <LinkedInLink />
          <GithubLink />
        </HStack>
      </Flex>
      <CustomBreadcrumb />
    </Box>
  );
};

PageHeader.propTypes = {
  text: PropTypes.string.isRequired,
};

export default PageHeader;
