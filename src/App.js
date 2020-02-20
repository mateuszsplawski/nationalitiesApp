import React from "react";
import { Route, Switch } from "./../node_modules/react-router-dom";
import NationalitiesApp from "./Components/NationalitiesApp";
import CountryInfo from "./Components/DetailedFlagInfo/DetailedFlagInfo";
import "./App.css";

const App = () => {
  return (
    <Switch>
      <Route path={"/"} exact component={NationalitiesApp} />
      <Route path="/:country" render={props => <CountryInfo {...props} />} />
    </Switch>
  );
};

export default App;
