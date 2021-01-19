import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import MarvelScreen from "../components/marvel/MarvelScreen";
import { Navbar } from "../components/ui/Navbar";
import HeroeScreen from "../components/heroes/HeroScreen";
import DCScreen from "../components/dc/DCScreen";
import SearchScreen from "../components/search/SearchScreen";
const DashboardRoutes = () => {
  return (
    <main>
      <Navbar />
      <div>
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen} />
          <Route exact path="/hero/:heroeid" component={HeroeScreen} />
          <Route exact path="/dc" component={DCScreen} />
          <Route exact path="/search" component={SearchScreen} />
          <Redirect to="/marvel" />
        </Switch>
      </div>
    </main>
  );
};

export default DashboardRoutes;
