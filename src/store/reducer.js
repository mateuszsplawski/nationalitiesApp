import * as action from "./actions";

const initialState = {
  countries: undefined
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        countries: action.data
      };
    default:
      return state;
  }
};

export default reducer;
