import { HStack, BreadcrumbItem, BreadcrumbLink, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";

const CustomBreadcrumbItem = ({ text, to }) => {
  return (
    <HStack>
      <BreadcrumbItem
        bg="gray.100"
        borderWidth="1px"
        borderColor="black"
        rounded="lg"
      >
        <BreadcrumbLink as={RouterLink} to={to} p={1}>
          {text}
        </BreadcrumbLink>
      </BreadcrumbItem>
      <Text pr={2}> / </Text>
    </HStack>
  );
};

CustomBreadcrumbItem.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default CustomBreadcrumbItem;
