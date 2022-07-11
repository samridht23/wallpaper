import { Box } from "@chakra-ui/react";
import axios, { Axios } from "axios";
import { useState, useEffect } from "react";

const baseurl =
  "https://api.unsplash.com/photos/?client_id=QiEe2pR0aGPwvYAkj8wOolp3LJOCggwxETxwuwb1rcg";
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
      <Box></Box>
    </div>
  );
};
export default Body;
