import "./App.css";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import AddPlaces from "./pages/AddPlaces";
import PlaceDetails from "./pages/PlaceDetails";
import Login from "./components/Login"
import Register from "./components/Register"

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/add-places" element={<AddPlaces />} />
            <Route path="/place-details/:id" element={<PlaceDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ChakraProvider>
  );
}

export default App;
