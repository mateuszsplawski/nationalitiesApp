import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "./../node_modules/react-router-dom";
import { Provider } from "react-redux";
import { theme } from "./theme/theme";
import { GlobalStyles } from "./theme/GlobalStyles";
import { ThemeProvider } from "styled-components";
import NationalitiesApp from "./Components/NationalitiesApp";
import { store } from "./store/store";
import "./theme/fonts.css";

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <Router>
        <NationalitiesApp />
      </Router>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
