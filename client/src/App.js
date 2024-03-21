import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ChakraProvider>
  );
}

export default App;
