import { useState } from "react";
import PropTypes from "prop-types";

import { Input, Button, HStack } from "@chakra-ui/react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const search = (e) => {
    if (e.key === "Enter") {
      onSearch(searchTerm);
    }
  };

  return (
    <HStack mb={4}>
      <Input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={search}
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
        textColor={"white"}
      >
        Search
      </Button>
    </HStack>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
