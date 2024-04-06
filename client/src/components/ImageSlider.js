import React, { useState, useEffect } from "react";
import "./ImageSlider.css";
import ImageSliderNavButton from "./ImageSliderNavButton";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function ImageSlider({ placeList, setActivePlace }) {
  const [placeIndex, setPlaceIndex] = useState(0);
  setActivePlace(placeList[placeIndex]);

  const incrementPlaceIndex = () => {
    setPlaceIndex((prevIndex) => (prevIndex + 1) % placeList.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      incrementPlaceIndex();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const sliderImgStyles = {
    height: "100%",
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: `url(${placeList[placeIndex]?.images?.link1})`,
  };

  const handleNavButtonClick = (index) => {
    setPlaceIndex(index);
  };
  const leftArrowStyles={
      postiton:'absolute',
      top:"50%",
      trasform: "translate(0,-50%)",
      left:"32px",
      fontSize:'45px',
      color:"#fff",
      zIndex:1,
      cursor:"pointer",

  };
  const RightArrowStyles={
    postiton:'absolute',
    top:"50%",
    trasform: "translate(0,-50%)",
    right:"32px",
    fontSize:'45px',
    color:"#fff",
    zIndex:1,
    cursor:"pointer",
  }
  return (
    <Box className="container">
      <Link
        key={placeIndex}
        to={{
          pathname: `/place-details/${placeList[placeIndex]._id}`,
          state: { place: placeList[placeIndex] },
        }}
      >
        <Box height="500px" width="700px">
          <Box
            className="sliderImg"
            borderRadius="20px"
            style={sliderImgStyles}
          >
            <Box style={leftArrowStyles}>
              
            </Box>
            <Box style={RightArrowStyles}>
              
            </Box>
          </Box>
          
          <Box
            mt="-100px"
            height="100px"
            borderRadius="10px"
            style={{
              background:
                "linear-gradient(to right, #383E56F2, #383E56CC, #383E5600)",
            }}
          >
            <Heading pl="2" color="#FB743E">
              {placeList[placeIndex]?.name}
            </Heading>
            <Text pl="2" fontWeight="400" fontStyle="italic" color="#fff">
              {placeList[placeIndex].category}
            </Text>
          </Box>
        </Box>
      </Link>

      <Flex flexDirection="column">
        {placeList.map((place, index) => (
          <Box
            key={index}
            padding="2"
            onClick={() => handleNavButtonClick(index)}
          >
            <ImageSliderNavButton place={place} />
          </Box>
        ))}
      </Flex>
    </Box>
  );
}

export default ImageSlider;
