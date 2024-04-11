import React from "react";
import Navbar from "../components/Navbar";
import ImageSlider from "../components/ImageSlider";
import { useLocation, useNavigate } from "react-router-dom";
import SuggestedPlaces from "../components/SuggestedPlaces";
import Footer from "../components/footer";

function Home({ setActivePlace, placeList }) {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <ImageSlider
        placeList={placeList.slice(0, 6)}
        setActivePlace={setActivePlace}
      />
      <SuggestedPlaces placeList={placeList.slice(0)} />
      <Footer/>
    </>
  );
}

export default Home;
