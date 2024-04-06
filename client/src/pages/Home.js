import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import Navbar from "../components/Navbar";
import ImageSlider from "../components/ImageSlider";
import SuggestedPlaces from "../components/SuggestedPlaces";
import {useLocation,useNavigate} from 'react-router-dom';
function Home() {
  const [placeList, setPlaceList] = useState([{}]);
  const location=useLocation()
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
