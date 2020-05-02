import React, { useEffect } from "react";
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

const NationalitiesApp = ({
  countries,
  fetchData,
  filterValue,
  filterNations,
  regions,
}) => {
  useEffect(() => {
    filterNations(filterValue, countries);
  }, [filterValue, regions]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <StyledWrapper>
        <FilterSection />
        <DisplaySection />
      </StyledWrapper>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    countries: state.countries,
    filterValue: state.filterValue,
    filteredCountries: state.filteredCountries,
    regions: state.regions,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => {
      const API = "https://restcountries.eu/rest/v2/all";
      fetch(API)
        .then((response) => response.json())
        .then((data) => dispatch({ type: "FETCH_DATA", data: [...data] }))
        .catch((err) => console.log(err));
    },
    filterNations: (filterValue, countries) => {
      if (filterValue === "All") {
        dispatch({ type: "FILTER_COUNTRIES", data: countries });
      } else {
        const data =
          countries &&
          countries.filter((country) => country.region === filterValue);
        dispatch({ type: "FILTER_COUNTRIES", data: data });
      }
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NationalitiesApp);
