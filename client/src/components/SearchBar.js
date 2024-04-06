import { Flex, Input } from "@chakra-ui/react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar({ placeList, setResults }) {
  const [input, setInput] = useState("");
  const handleSearch = (value) => {
    setInput(value);
    const results = placeList.filter((place) => {
      return (
        place &&
        place.name &&
        //bug fix uppercase input was not showing anything
        place.name.toLowerCase().includes(value.toLowerCase())
      );
    });
    setResults(results);
  };
  return (
    <Flex
      color="#383E56"
      backgroundColor="#C5D7BD"
      width="100%"
      borderRadius="10px"
      height="50px"
      padding="0 15px"
      boxShadow="0px 0px 8px #9FB8AD"
      alignItems="center"
    >
      <FaSearch color="#383E56" />
      <Input
        variant="unstyled"
        placeholder="Type to Search..."
        backgroundColor="transparent"
        border="none"
        height="100%"
        fontSize="20px"
        width="100%"
        marginLeft="10px"
        value={input}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </Flex>
  );
}

export default SearchBar;
