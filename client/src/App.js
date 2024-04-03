import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import AddPlaces from "./pages/AddPlaces";
import PlaceDetails from "./pages/PlaceDetails";
import { useState } from "react";

function App() {
  const [activePlace, setActivePlace] = useState([{}]);
  return (
    <ChakraProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home setActivePlace={setActivePlace} />} />
            <Route path="/search" element={<Search />} />
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
