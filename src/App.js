import "./App.css";
// import { useGlobalContext } from "./context";
import Countries from "./Countries";
// import SingleCountry from "./SingleCountry";

import Test from "./Test";

function App() {
  // const { country, countryData, neighbours } = useGlobalContext();
  // console.log(neighbours);
  return (
    <>
      {/* <SingleCountry countryData={countryData} classN="neighbour" /> */}
      <Countries />
      {/* <Test /> */}
    </>
  );
}

export default App;
