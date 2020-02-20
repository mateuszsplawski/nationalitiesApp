import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DisplaySection from "./sections/DisplaySection/DisplaySection";
import FilterSection from "./sections/FilterSection/FilterSection";
import { connect } from "react-redux";

const StyledWrapper = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  background-color: whitesmoke;
`;

const NationalitiesApp = ({ countries, fetchData }) => {
  const [nationsArray, setNationsArray] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredNationsArray, setFilteredNationsArray] = useState([]);
  const nationsRegions = new Set(
    nationsArray.map(nation => nation.region).filter(nation => nation !== "")
  );

  const regionSearchHandler = e => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    if (searchValue === "All") {
      setFilteredNationsArray(nationsArray);
    } else {
      setFilteredNationsArray(
        nationsArray.filter(nation => nation.region === searchValue)
      );
    }
  }, [searchValue]);

  useEffect(() => {
    const API = "https://restcountries.eu/rest/v2/all";
    fetch(API)
      .then(response => response.json())
      .then(data =>
        setNationsArray([...data], setFilteredNationsArray([...data]))
      )
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <StyledWrapper>
        <FilterSection
          nations={nationsArray}
          nationsRegions={nationsRegions}
          regionSearchHandler={regionSearchHandler}
          searchValue={searchValue}
        />
        <DisplaySection nations={filteredNationsArray} />
      </StyledWrapper>
    </>
  );
};

const mapStateToProps = state => {
  return {
    countries: state.countries
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => {
      const API = "https://restcountries.eu/rest/v2/all";
      fetch(API)
        .then(response => response.json())
        .then(data => dispatch({ type: "FETCH_DATA", data: [...data] }))
        .catch(err => console.log(err));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NationalitiesApp);
