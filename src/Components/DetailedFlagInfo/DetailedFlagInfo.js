import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyledWrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const H1 = styled.h1`
  display: flex;
  flex-direction: column;
  text-align: center;

  span {
    font-size: 1rem;
  }
`;

const Img = styled.img`
  width: 120px;
  height: 70px;
  object-fit: cover;
`;

const DetailedFlagInfo = ({ match }) => {
  const country = match.params.country;
  const [countryData, setCountryData] = useState({});
  const [renderResults, setRenderResults] = useState(false);

  useEffect(() => {
    const API = `https://restcountries.eu/rest/v2/name/`;
    fetch(API + country)
      .then(response => response.json())
      .then(data => setCountryData(...data))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    (Object.keys(countryData).length === 0 &&
      countryData.constructor === Object) === false
      ? setRenderResults(true)
      : setRenderResults(false);
  }, [countryData]);
  return (
    <StyledWrapper>
      <H1>
        {countryData.name}
        <span>{countryData.nativeName}</span>
      </H1>
      <Img src={countryData.flag} />
      <ul>
        <li>
          Stolica: <strong>{countryData.capital}</strong>
        </li>
        <li>
          Region: <strong>{countryData.region}</strong>
        </li>
        <li>
          Podregion: <strong>{countryData.subregion}</strong>
        </li>
        <li>
          Populacja: <strong>{countryData.population}</strong> osób
        </li>
        <li>
          Powierzchnia: <strong>{countryData.area}</strong> m²
        </li>
        <li>
          Waluta:{" "}
          <strong>
            {renderResults && countryData.currencies[0].name} /{" "}
            {renderResults && countryData.currencies[0].code}
          </strong>
        </li>
        <li>
          Język:{" "}
          <strong>
            {renderResults && countryData.languages[0].name} /{" "}
            {renderResults && countryData.languages[0].nativeName}
          </strong>
        </li>
      </ul>
    </StyledWrapper>
  );
};

export default DetailedFlagInfo;
