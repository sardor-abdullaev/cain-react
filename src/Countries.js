import React from "react";
import { useGlobalContext } from "./context";
import SingleCountry from "./SingleCountry";

const Countries = () => {
  const { countryData, neighbours } = useGlobalContext();
  // neighbours.map((item) => {
  //   console.log(item);
  // });

  return (
    <div className="countries">
      <SingleCountry countryData={countryData} classN="" />
      {neighbours.map((item) => {
        return <SingleCountry countryData={item} classN="neighbour" />;
      })}
    </div>
  );
};

export default Countries;
