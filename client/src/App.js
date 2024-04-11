import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";
import Home from "./pages/Home";
import Search from "./pages/Search";
import AddPlaceForm from "./components/AddPlaceForm";
import PlaceDetails from "./pages/PlaceDetails";
import Login from "./components/Login";
import Register from "./components/Register";
import {Toaster} from 'react-hot-toast';
import Newsletter from "./pages/Newsletters";

Axios.defaults.baseURL='http://localhost:3002';

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
        <Toaster position="bottom-right" toastOptions={{duration:2000}}/>
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
            <Route path="/add-places" element={<AddPlaceForm/>} />
            <Route
              path="/place-details/:id"
              element={<PlaceDetails activePlace={activePlace} />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/newsletter" element={<Newsletter/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </ChakraProvider>
  );
}

export default App;
