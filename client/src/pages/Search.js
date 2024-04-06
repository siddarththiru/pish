import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import { Flex } from "@chakra-ui/react";
import SearchResults from "../components/SearchResults";

function Search({ placeList, setActivePlace }) {
  const [results, setResults] = useState([]);
  return (
    <>
      <Navbar />
      <Flex
        paddingTop="20px"
        width="40%"
        color="black"
        margin="auto"
        flexDir="column"
        alignItems="center"
        minWidth="200px"
      >
        <SearchBar setResults={setResults} placeList={placeList} />
        <SearchResults results={results} setActivePlace={setActivePlace} />
      </Flex>
    </>
  );
}

export default Search;
