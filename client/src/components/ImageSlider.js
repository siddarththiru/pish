import React from "react";
import "./ImageSlider.css";

function ImageSlider(props) {
  let placeList = props.placeList;
  let sliderImgStyles = {
    height: "100%",
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: `url(${placeList[0]?.images?.link1})`,
  };
  return (
    <div className="container">
      <div className="sliderArea">
        <div className="sliderImg" style={sliderImgStyles}></div>
      </div>
      <div className="sliderNav"></div>
    </div>
  );
}

export default ImageSlider;
