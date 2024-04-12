import React from "react";
import { Flex, Box, Text, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function SuggestedPlaces({ placeList, setActivePlace }) {
  return (
    <Flex color="white" flexDir="column" padding="30px">
      <Heading>Suggested Places</Heading>
      <Flex flexDir="row" flexWrap="wrap" padding="5px" justifyContent="center">
        {placeList.map((place, index) => (
          <Link
            to={{
              pathname: `/place-details/${place._id}`,
            }}
          >
            <Flex
              key={index}
              height="100%"
              margin="5px"
              flexDir="column"
              onClick={() => {
                setActivePlace(place);
              }}
              _hover={{
                backgroundColor: "#",
              }}
            >
              {/*Bug fix*/}
              {place.images && place.images.link1 && (
                <Image
                  width="250px"
                  height="200px"
                  objectFit="cover"
                  borderRadius="10px"
                  src={place.images.link1}
                />
              )}
              <Flex
                padding="5px"
                borderRadius="10px"
                style={{
                  background:
                    "linear-gradient(to right, #383E56F2, #383E56CC, #383E5600)",
                }}
              >
                <Text>{place.name}</Text>
              </Flex>
            </Flex>
          </Link>
        ))}
      </Flex>
    </Flex>
  );
}

export default SuggestedPlaces;
