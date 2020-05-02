import * as actionTypes from "./actionTypes";

const initialState = {
  countries: undefined,
  filterValue: "All",
  filteredCountries: undefined,
  regions: undefined,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DATA:
      return {
        ...state,
        countries: action.data,
      };
    case actionTypes.SET_FILTER_VALUE:
      return {
        ...state,
        filterValue: action.value,
      };
    case actionTypes.FILTER_COUNTRIES:
      return {
        ...state,
        filteredCountries: action.data,
      };

    case actionTypes.SET_REGIONS:
      return {
        ...state,
        regions: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
