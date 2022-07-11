import {
  Stack,
  Flex,
  Input,
  InputLeftElement,
  InputGroup,
  Text,
  VStack,
  useBreakpointValue,
  Box,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const Hero = () => {
  return (
    <Flex
      w={"full"}
      h={useBreakpointValue({ base: "250px", md: "400px" })}
      backgroundImage={
        "url(https://images.unsplash.com/photo-1657523584117-b024ed6e4e85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)"
      }
      backgroundSize={"cover"}
      backgroundPosition={"center"}
      filter={"grayscale(25%)"}
      display={"flex"}
      flexDir={"column"}
      justifyContent={"center"}
    >
      <VStack
        position={"fixed"}
        w={"full"}
        display={"flex"}
        px={useBreakpointValue({ base: 4, md: 8 })}
      >
        <Stack maxW={"xl"} align={"start"} spacing={4}>
          <Text
            color={"white"}
            fontWeight={600}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "2xl", md: "3xl" })}
          >
            Unsplash
          </Text>
          <Text
            color={"white"}
            fontWeight={100}
            lineHeight={1}
            fontSize={useBreakpointValue({ base: "md", md: "xl" })}
            maxW={useBreakpointValue({ base: "md", lg: "2xl" })}
          >
            The internet’s source of freely-usable images. Powered by creators
            everywhere.
          </Text>
          <Flex
            display={{ base: "none", md: "flex" }}
            w={{ base: "100%", lg: "100%" }}
          >
            <NavSearchBar />
          </Flex>
        </Stack>
      </VStack>
      <Box
        h={"100vh"}
        display={"flex"}
        flexDir={"column"}
        justifyContent={"end"}
        m={4}
      >
        <Text
          color={"white"}
          fontWeight={100}
          lineHeight={1.2}
          fontSize={useBreakpointValue({ base: "13px", md: "13px" })}
        >
          Photo by Alain Gehri
        </Text>
      </Box>
    </Flex>
  );
};
const NavSearchBar = () => {
  return (
    <Box w={"100%"} bgColor={"white"} borderRadius={4}>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.500" />}
          alignItems={"center"}
        />
        <Input
          alignItems={"center"}
          variant="filled"
          borderRadius={4}
          border={"none"}
          placeholder="Search..."
          _placeholder={{ color: "gray.500" }}
        />
      </InputGroup>
    </Box>
  );
};
export default Hero;
