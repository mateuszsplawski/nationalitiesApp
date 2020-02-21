import React from "react";
import { Route, Switch } from "./../node_modules/react-router-dom";
import NationalitiesApp from "./Components/NationalitiesApp";
import DetailedFlagInfo from "./Components/DetailedFlagInfo/DetailedFlagInfo";
import "./App.css";

const App = () => {
  return (
    <Switch>
      <Route path={"/"} exact component={NationalitiesApp} />
      <Route
        path="/NationalitiesApp/:country"
        render={props => <DetailedFlagInfo {...props} />}
      />
    </Switch>
  );
};

export default App;
