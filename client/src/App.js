import "./App.css";
import ImageSlider from "./components/ImageSlider";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import Axios from "axios";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  const [placeList, setPlaceList] = useState([{}]);

  useEffect(() => {
    Axios.get("http://localhost:3001/getPlaces").then((response) => {
      setPlaceList(response.data);
    });
  }, []);

  return (
    <ChakraProvider>
      <div className="App">
        <Navbar />
        <ImageSlider placeList={placeList.slice(0, 6)} />
      </div>
    </ChakraProvider>
  );
}

export default App;
