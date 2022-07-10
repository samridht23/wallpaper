import React from "react";
import { Input, InputGroup, InputLeftElement, Text } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import "./style.scss";

const Navbar = () => {
  return (
    <>
      <div class="navbar">
        <div class="navbar-left">
          <div class="navbar-left-logo">
            <a href="">
              <Text fontSize={"xl"}>Wallhaven</Text>
            </a>
          </div>
          <div class="navbar-left-search-bar">
            <InputGroup>
              <InputLeftElement
                pointerEvent="none"
                children={<SearchIcon color="gray.800" />}
              />
              <Input variant="filled" placeholder="Search" />
            </InputGroup>
          </div>
        </div>
        <div class="navbar-right">hi</div>
      </div>
    </>
  );
};

export default Navbar;
