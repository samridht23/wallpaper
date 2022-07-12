import { Box, Flex, Image, useColorModeValue } from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";

const baseurl =
  "https://api.unsplsh.com/photos/?client_id=QiEe2pR0aGPwvYAkj8wOolp3LJOCggwxETxwuwb1rcg";

const data = {
  isNew: true,
  imageURL:
    "https://images.unsplash.com/photo-1657564793579-9d49d4d7257b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  name: "Wayfarer Classic",
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};
const Body = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      axios
        .get(baseurl)
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
    <div>
      <Box bg={"white"} lineHeight={0} columnGap={"0px"} columnCount={5}>
        <DesktopCard />
        <DesktopCard />
        <DesktopCard />
        <DesktopCard />
      </Box>
    </div>
  );
};
const DesktopCard = () => {
  return (
    <Flex p={5} alignItems="center" justifyContent="center">
      <Image
        w={"100%"}
        h={"auto"}
        src={data.imageURL}
        alt={`Picture of ${data.name}`}
        rounded="sm"
      />
    </Flex>
  );
};

export default Body;
