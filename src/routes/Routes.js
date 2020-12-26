import React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import HomePage from "../pages/HomePage/HomePage"
const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route exact path="/home" component={HomePage} />

    </Switch>
  </Router>
);

export default Routes;
