import * as action from "./actions";

const initialState = {
  countries: undefined,
  filterValue: "All",
  filteredCountries: undefined,
  regions: undefined
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        countries: action.data
      };
    case "SET_FILTER_VALUE":
      return {
        ...state,
        filterValue: action.value
      };
    case "FILTER_COUNTRIES":
      return {
        ...state,
        filteredCountries: action.data
      };

    case "SET_REGIONS":
      return {
        ...state,
        regions: action.data
      };
    default:
      return state;
  }
};

export default reducer;
