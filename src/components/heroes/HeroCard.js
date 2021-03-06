import React from "react";
import { Link } from "react-router-dom";
const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <div className="card">
      <div className="card-img">
        <img
          src={`./assets/heroes/${id}.jpg`}
          className="card-img"
          alt={superhero}
        />
      </div>

      <div className="card-body">
        <h5 className="card-title">{superhero}</h5>
        <p className="card-text mt-1">{alter_ego}</p>
        {alter_ego !== characters && <p className="card-text">{characters}</p>}
        <p className="card-text mt-3">
          <small className="text-muted">{first_appearance}</small>
        </p>
        <Link to={`./hero/${id}`} className="red-background mt-3">
          Read More...
        </Link>
      </div>
    </div>
  );
};

export default HeroCard;
