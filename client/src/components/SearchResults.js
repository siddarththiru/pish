import { Flex } from "@chakra-ui/react";
import React from "react";
import SearchResultItem from "./SearchResultItem";

function SearchResults({ results, setActivePlace }) {
  console.log(typeof setActivePlace);
  return (
    <Flex
      width="100%"
      bgColor="white"
      flexDir="column"
      boxShadow="0px 0px 8px #c6d7bc"
      marginTop="1rem"
      maxHeight="65vh"
      overflowY="scroll"
      borderRadius="10px"
      css={{
        "&::-webkit-scrollbar": {
          display: "none", // Hide the scrollbar for webkit browsers (Chrome, Safari, etc.)
        },
      }}
    >
      {results.map((result, id) => {
        return (
          <SearchResultItem
            result={result}
            key={id}
            setActivePlace={setActivePlace}
          />
        );
      })}
    </Flex>
  );
}

export default SearchResults;
