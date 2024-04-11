import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/Navbar";
import { FaEnvelope, FaPhone } from "react-icons/fa";

function PlaceDetails({ activePlace }) {
  let place = activePlace;
  return (
    <>
      <Navbar />
      <Flex
        mt="40px"
        ml="100px"
        mr="100px"
        backgroundColor="#9FB8AD30"
        p="3"
        borderRadius="30px"
        flexDir="column"
        color="#C5D7BD"
      >
        <Flex
          overflow="auto"
          sx={{
            "&::-webkit-scrollbar": { display: "none" },
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <Image
            p="2"
            borderRadius="20px"
            src={place.images.link1}
            height="400px"
            alt="image of the place"
          />
          <Image
            p="2"
            borderRadius="20px"
            src={place.images.link2}
            width="400px"
            alt="image of the place"
          />
          <Image
            p="2"
            borderRadius="20px"
            src={place.images.link3}
            width="400px"
            alt="image of the place"
          />
        </Flex>
        <Flex
          justifyContent="space-between"
          flexDir="row"
          alignContent="center"
          mr="20px"
        >
          <Heading color="#FB743E">{place.name}</Heading>
          <Flex alignItems="center">
            <Box p="2" cursor="pointer">
              <FaPhone fontSize="30px" />
            </Box>
            <Box p="2" cursor="pointer">
              <FaEnvelope fontSize="30px" />
            </Box>
          </Flex>
        </Flex>
        <Text fontWeight="400" fontStyle="italic">
          {place.category}
        </Text>
        <Text>{place.description}</Text>
        <Text>{place.diningOptions}</Text>
        <br />
        <Text>Timings: {place.timings}</Text>
        <Text>{place.mealOptions}</Text>
        <br />
        <Box borderRadius="30px">
          <iframe
            id="map-canvas"
            className="map_part"
            width="600"
            height="450"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src={place.maps}
          ></iframe>
        </Box>
        <br />
      </Flex>
      <br />
      <br />
    </>
  );
}

export default PlaceDetails;
