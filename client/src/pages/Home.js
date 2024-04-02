import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import Navbar from "../components/Navbar";
import ImageSlider from "../components/ImageSlider";
import SuggestedPlaces from "../components/SuggestedPlaces";

function Home() {
  const [placeList, setPlaceList] = useState([{}]);

  useEffect(() => {
    Axios.get("http://localhost:3001/getPlaces").then((response) => {
      setPlaceList(response.data);
    });
  }, []);

  return (
    <>
      <Navbar />
      <ImageSlider placeList={placeList.slice(0, 6)} />
      <SuggestedPlaces placeList={placeList.slice(0)} />
    </>
  );
}

export default Home;
