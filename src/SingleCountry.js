import React from "react";

const SingleCountry = ({ countryData, classN }) => {
  console.log(countryData, classN);

  const currency = Object.values(countryData[0].currencies)[0].name;
  const flag = countryData[0].flags.svg;
  const coat = countryData[0].coatOfArms.svg;
  const name = countryData[0].name.common;
  const region = countryData[0].region;
  const population = (+countryData[0].population / 1000000).toFixed(1);
  const language = Object.values(countryData[0].languages);
  const area = countryData[0].area;
  console.log(countryData);

  return (
    <article className={`country ${classN}`}>
      <img className="country__img" src={flag} alt="name" />
      <img className="country__flagcoat" src={coat} alt="name" />

      <div className="country__data">
        <h3 className="country__name">{name}</h3>
        <h4 className="country__region">{region}</h4>
        <p className="country__row">
          <span>👫</span>
          {population} mln people
        </p>
        <p className="country__row">
          <span>🗺</span>
          {area} km<sup>2</sup>
        </p>
        <p className="country__row">
          <span>🗣️</span>
          {language}
        </p>
        <p class="country__row">
          <span>💰</span>
          {currency}
        </p>
      </div>
      <h1>{countryData[0].region}</h1>
    </article>
  );
};

export default SingleCountry;
