import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyledWrapper = styled.main`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 0 30px -20px #121212;
    background: whitesmoke;
    padding: 20px;

    h1 {
      display: flex;
      flex-direction: column;
      text-align: center;
      font-size: 25px;

      span {
        font-size: 20px;
      }
    }

    img {
      width: 400px;
      height: 200px;
      object-fit: scale-down;
    }

    ul {
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      width: 500px;
      justify-content: space-around;
      align-items: center;
      position: relative;

      li {
        width: 250px;
        padding: 20px;
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        font-weight: lighter;

        strong {
          font-size: 20px;
        }
      }
    }
    @media (max-width: 500px) {
      img {
        width: 300px;
      }
      ul {
        width: 300px;
      }
    }
  }
`;

const DetailedFlagInfo = ({ match }) => {
  const country = match.params.country;
  const [countryData, setCountryData] = useState(undefined);

  useEffect(() => {
    const API = `https://restcountries.eu/rest/v2/name/`;
    fetch(API + country)
      .then(response => response.json())
      .then(data => setCountryData(...data))
      .catch(err => console.log(err));
  }, []);
  return (
    <StyledWrapper>
      {countryData && (
        <section>
          <h1>
            {countryData.name}
            <span>{countryData.nativeName}</span>
          </h1>
          <img src={countryData.flag} alt={countryData.name + " flag"} />
          <ul>
            <li>
              Stolica<strong>{countryData.capital}</strong>
            </li>
            <li>
              Region<strong>{countryData.region}</strong>
            </li>
            <li>
              Podregion<strong>{countryData.subregion}</strong>
            </li>
            <li>
              Populacja<strong>{countryData.population} osób</strong>
            </li>
            <li>
              Powierzchnia<strong>{countryData.area} m²</strong>
            </li>
            <li>
              Waluta
              <strong>
                {countryData.currencies[0].name} /{" "}
                {countryData.currencies[0].code}
              </strong>
            </li>
            <li>
              Język:{" "}
              <strong>
                {countryData.languages[0].name} /{" "}
                {countryData.languages[0].nativeName}
              </strong>
            </li>
          </ul>
        </section>
      )}
    </StyledWrapper>
  );
};

export default DetailedFlagInfo;
