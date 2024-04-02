import React from "react";
import { Flex, Box, Text, Heading, Image } from "@chakra-ui/react";

function SuggestedPlaces({ placeList }) {
  return (
    <Flex color="white" flexDir="column" margin="30px 100px">
      <Heading>Suggested Places</Heading>
      <Flex flexDir="row" padding="20px">
        {placeList.map((place, index) => (
          <Box key={index} height="100px" marginRight="20px">
            {/*Bug fix*/}
            {place.images && place.images.link1 && (
              <Image
                width="350px"
                borderRadius="10px"
                src={place.images.link1}
              />
            )}
            <Box
              padding="5px"
              borderRadius="10px"
              style={{
                background:
                  "linear-gradient(to right, #383E56F2, #383E56CC, #383E5600)",
              }}
            >
              <Text>{place.name}</Text>
            </Box>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
}

export default SuggestedPlaces;
