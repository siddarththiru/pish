import "./App.css";
import ImageSlider from "./components/ImageSlider";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import Axios from "axios";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";


const theme = extendTheme();
function App() {
  const [placeList, setPlaceList] = useState([{}]);

  useEffect(() => {
    Axios.get("http://localhost:3001/getPlaces").then((response) => {
      setPlaceList(response.data);
    });
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <Navbar />
        <ImageSlider placeList={placeList} />
      </div>
    </ChakraProvider>
  );
}

export default App;
