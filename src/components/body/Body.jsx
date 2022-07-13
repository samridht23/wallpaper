import {
  Grid,
  List,
  Box,
  Text,
  Flex,
  Image,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
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
        <Box paddingY={2} paddingX={2}>
          <Image w={"100%"} rounded={"none"} src={res.urls.full} key={res.id} />
        </Box>
      ))}
    </Box>
  );
};

export default Body;
