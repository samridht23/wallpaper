import {
  Grid,
  Button,
  List,
  Icon,
  Box,
  Avatar,
  Text,
  Flex,
  Image,
  useColorModeValue,
  useBreakpointValue,
  filter,
} from "@chakra-ui/react";
import { BiArrowToBottom } from "react-icons/bi";
import "./style.scss";
import axios from "axios";
import { useState, useEffect } from "react";

const baseUrl =
  " https://api.unsplash.com/photos/?client_id=QiEe2pR0aGPwvYAkj8wOolp3LJOCggwxETxwuwb1rcg";

const Body = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      axios
        .get(baseUrl)
        .then((res) => {
          console.log(res.data);
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Box
      mx={useBreakpointValue({ base: 1, md: "5em", lg: "10em", xl: "18em" })}
    >
      <div id="image-body">
        <DesktopCard walldata={data} />
      </div>
    </Box>
  );
};
const DesktopCard = (props) => {
  const data = props.walldata;
  return (
    <Box>
      {data.map((res) => (
        <Box paddingY={2} paddingX={2} w={"100%"} position={"relative"}>
          <Image
            w={"100%"}
            rounded={"none"}
            src={res.urls.regular}
            key={res.id}
          />
          <Box
            position={"absolute"}
            right={0}
            bottom={0}
            w={"100%"}
            h={"100%"}
            transition={"0.2s ease-in"}
            opacity={0}
            _hover={{ opacity: 1 }}
            borderWidth={0}
            display={"flex"}
          >
            <Box
              position={"absolute"}
              bottom={"1.5rem"}
              left={"1.5rem"}
              display={"flex"}
              textAlign={"center"}
              alignItems={"center"}
              w={"85%"}
              justifyContent={"space-between"}
            >
              <Box display={"flex"} alignItems={"center"}>
                <Avatar size={"sm"} src="https://i.pravatar.cc/300" />
                <Box ml={1}>
                  <Text fontSize={"sm"} color={"white"}>
                    Username{" "}
                  </Text>
                </Box>
              </Box>
              <Box>
                <Button variant={"solid"} w={10} h={9}>
                  <Icon as={BiArrowToBottom} w={9} />
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Body;
