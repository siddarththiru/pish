import React, { useState } from "react";
import "./ImageSlider.css";
import ImageSliderNavButton from "./ImageSliderNavButton";
import { Box, Flex } from "@chakra-ui/react";

function ImageSlider(props) {
  const [placeIndex, setPlaceIndex] = useState(0);
  const placeList = props.placeList;

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

  return (
    <div className="container">
      <div className="sliderArea">
        <div className="sliderImg" style={sliderImgStyles}></div>
      </div>
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
    </div>
  );
}

export default ImageSlider;
