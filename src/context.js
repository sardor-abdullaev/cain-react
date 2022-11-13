import axios from "axios";
import React, { useCallback, useState, useEffect, useContext } from "react";

const url = "https://restcountries.com/v3.1/";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  //   const [loading, setLoading] = useState(true);
  const [country, setCountry] = useState("uzbekistan");
  const [countryData, setCountryData] = useState([]);
  const [neighbours, setNeighbours] = useState([]);

  const getJSON = async (url) => {
    const { data } = await axios(url);
    return data;
  };

  const fetchCountry = useCallback(async () => {
    try {
      setCountryData(await getJSON(`${url}name/${country}`));
    } catch (error) {
      alert(error);
    }
  }, [country]);

  const fetchNeighbours = useCallback(async () => {
    try {
      const borders = countryData[0].borders;
      const p = borders.map((item) => {
        return getJSON(`${url}alpha/${item}`);
      });

      const data = await Promise.all(p);
      setNeighbours(data);

      //   borders.map((item) => {
      //      await getJSON(`${url}alpha/${item}`)
      //   });
    } catch (error) {
      alert(error);
    }
  }, [countryData]);

  useEffect(() => {
    fetchCountry();
    // console.log(country, neighbours);
  }, [country, fetchCountry]);

  useEffect(() => {
    fetchNeighbours();
  }, [countryData, fetchNeighbours]);

  return (
    <AppContext.Provider value={{ country, countryData, neighbours }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
