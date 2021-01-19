import React from "react";
import HeroList from "../heroes/HeroList";

const MarvelScreen = () => {
  return (
    <div className="heropage-wrapper">
      <h1 className="red-background">Marvel Heroes</h1>
      <HeroList publisher="Marvel Comics" />
    </div>
  );
};

export default MarvelScreen;
