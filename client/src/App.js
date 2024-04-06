import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";
import Home from "./pages/Home";
import Search from "./pages/Search";
import AddPlaces from "./pages/AddPlaces";
import PlaceDetails from "./pages/PlaceDetails";

function App() {
  const [placeList, setPlaceList] = useState([{}]);
  const [activePlace, setActivePlace] = useState([{}]);

  useEffect(() => {
    Axios.get("http://localhost:3001/getPlaces").then((response) => {
      setPlaceList(response.data);
    });
  }, []);
  return (
    <ChakraProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route
              index
              element={
                <Home setActivePlace={setActivePlace} placeList={placeList} />
              }
            />
            <Route
              path="/search"
              element={
                <Search placeList={placeList} setActivePlace={setActivePlace} />
              }
            />
            <Route path="/add-places" element={<AddPlaces />} />
            <Route
              path="/place-details/:id"
              element={<PlaceDetails activePlace={activePlace} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </ChakraProvider>
  );
}

export default App;
