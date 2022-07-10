import React from "react";
import Navbar from "./components/navbar/Navbar";
import { ChakraProvider } from "@chakra-ui/react";

const App = () => {
  return (
    <ChakraProvider>
      <Navbar />
    </ChakraProvider>
  );
};

export default App;
