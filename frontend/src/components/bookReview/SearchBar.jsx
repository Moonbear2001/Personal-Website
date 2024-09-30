import { useState } from "react";
import PropTypes from "prop-types";

import { Input, Button, HStack } from "@chakra-ui/react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const search = () => {
    console.log("in on search");
    onSearch(searchTerm);
  };

  return (
    <HStack mb={4}>
      <Input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        borderWidth="2px"
        borderColor="black"
        bg="gray.100"
        _hover={{
          borderColor: "gray.500",
        }}
        _focus={{
          borderColor: "blue.500",
        }}
      />
      <Button
        onClick={search}
        bg="gray.900"
        type="submit"
        borderWidth="2px"
        borderColor="black"
      >
        Search
      </Button>
    </HStack>
  );
};

SearchBar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default SearchBar;
