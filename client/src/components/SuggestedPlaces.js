import React from "react";
import { Flex, Box, Text, Heading, Image } from "@chakra-ui/react";

function SuggestedPlaces({ placeList }) {
  return (
    <Flex color="white" flexDir="column" padding="30px 100px">
      <Heading>Suggested Places</Heading>
      <Flex flexDir="row" flexWrap="wrap" padding="20px">
        {placeList.map((place, index) => (
          <Flex key={index} height="100%" paddingRight="20px" flexDir="column">
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
        ))}
      </Flex>
    </Flex>
  );
}

export default SuggestedPlaces;
