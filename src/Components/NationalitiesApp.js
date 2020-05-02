import React from "react";
import { Route, Switch } from "react-router-dom";
import NationalitiesAppMain from "./NationalitiesAppMain";
import DetailedFlagInfo from "./DetailedFlagInfo/DetailedFlagInfo";

const NationalitiesApp = () => {
  return (
    <Switch>
      <Route path={"/"} exact component={NationalitiesAppMain} />
      <Route
        path="/NationalitiesApp/:country"
        render={(props) => <DetailedFlagInfo {...props} />}
      />
    </Switch>
  );
};

export default NationalitiesApp;
