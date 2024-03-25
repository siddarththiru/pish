import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/Navbar";
import { FaEnvelope, FaPhone } from "react-icons/fa";

function PlaceDetails(props) {
  let place = props.place;
  place = {
    _id: {
      $oid: "65e0a24febab116997b33273",
    },
    name: "Seven Wonders",
    location: "Excise Walk, International Financial Services Centre, Dublin 1",
    type: "Cafe and breakfast",
    timings: "Monday-Friday: 7am-6pm Saturday & Sunday: 11.30am-4pm",
    phone: "01 672 0212",
    email: "info@sevenwonders.ie",
    discounts: "15% Student discount",
    images: {
      link1: "https://i.imgur.com/Bk4BTKa_d.webp?maxwidth=760&fidelity=grand",
      link2: "https://i.imgur.com/Bk4BTKa_d.webp?maxwidth=760&fidelity=grand",
      link3: "https://i.imgur.com/Bk4BTKa_d.webp?maxwidth=760&fidelity=grand",
    },
    description:
      "Seven Wonders  a perfect spot for a cup of coffee or a healthy smoothie. They offer a variety of wraps and bagels as well which are truly delicious.",
    mealOptions: "Vegan and Vegetarian avaiable",
    diningOptions: "Dine-in or Take away available",
    maps: "https://www.openstreetmap.org/export/embed.html?bbox=-6.24536007642746%2C53.347999156272195%2C-6.242849528789521%2C53.34902388213419&amp;layer=mapnik",
  };

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
            width="500px"
            alt="image of the place"
          />
          <Image
            p="2"
            borderRadius="20px"
            src={place.images.link2}
            width="500px"
            alt="image of the place"
          />
          <Image
            p="2"
            borderRadius="20px"
            src={place.images.link3}
            width="500px"
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
          {place.type}
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
