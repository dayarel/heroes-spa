import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import MarvelScreen from "../components/marvel/MarvelScreen";
import { Navbar } from "../components/ui/Navbar";
import HeroeScreen from "../components/heroes/HeroScreen";
import DCScreen from "../components/dc/DCScreen";
const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen} />
          <Route exact path="/hero/:heroeid" component={HeroeScreen} />
          <Route exact path="/dc" component={DCScreen} />
          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
};

export default DashboardRoutes;
