import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function SearchResultItem({ result, setActivePlace }) {
  return (
    <Link to={`/place-details/${result._id}`}>
      <Flex
        padding="10px"
        alignItems="center"
        backgroundColor="#c6d7bc"
        _hover={{ backgroundColor: "#c6d7bc90" }}
        onClick={() => {
          setActivePlace(result);
        }}
      >
        <Image
          width="100px"
          height="50px"
          overflow="hidden"
          src={result.images.link1}
          borderRadius="10px"
          maxWidth="100px"
          objectFit="cover"
        />
        <Text ml="10px">{result.name}</Text>
      </Flex>
    </Link>
  );
}

export default SearchResultItem;
