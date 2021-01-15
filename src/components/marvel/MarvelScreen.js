import React from "react";
import HeroList from "../login/HeroList";

const MarvelScreen = () => {
  return (
    <div>
      <h1>Marvel Screen</h1>
      <hr />
      <HeroList publisher="Marvel Comics" />
    </div>
  );
};

export default MarvelScreen;
