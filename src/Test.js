import axios from "axios";
import React, { useEffect } from "react";
const url = "https://restcountries.com/v3.1/alpha/";
const borders = ["AFG", "KAZ", "KGZ", "TJK", "TKM"];

const Test = () => {
  const fetchData = async () => {
    // const { data } = await axios(url);
    const neighbours = borders.map((item) => {
      return axios(`${url}${item}`);
    });
    const data = await Promise.all(neighbours);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return <div>Test</div>;
};

export default Test;
