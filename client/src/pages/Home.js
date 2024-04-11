import React from "react";
import Navbar from "../components/Navbar";
import ImageSlider from "../components/ImageSlider";
import SuggestedPlaces from "../components/SuggestedPlaces";
import Footer from "../components/footer";

function Home({ setActivePlace, placeList }) {
  return (
    <>
      <Navbar />
      <ImageSlider
        placeList={placeList.slice(0, 6)}
        setActivePlace={setActivePlace}
      />
      <SuggestedPlaces
        placeList={placeList.slice(7)}
        setActivePlace={setActivePlace}
      />
      <Footer />
    </>
  );
}

export default Home;
