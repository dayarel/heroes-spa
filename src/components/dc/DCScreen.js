import React from "react";
import HeroList from "../heroes/HeroList";

const DCScreen = () => {
  return (
    <div className="heropage-wrapper">
      <h1 className="red-background">DC Heroes</h1>
      <HeroList publisher="DC Comics" />
    </div>
  );
};

export default DCScreen;
