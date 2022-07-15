import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Body from "./components/body/Body";
import Box from "@chakra-ui/react";

const App = () => {
  return (
    <Box>
      <Navbar />
      <Hero />
      <Body />
    </Box>
  );
};

export default App;
