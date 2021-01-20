import React, { useMemo } from "react";
import { useParams, Redirect } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";
const HeroScreen = ({ history }) => {
  const { heroeid } = useParams();

  const hero = useMemo(() => getHeroById(heroeid), [heroeid]);

  if (!hero) {
    return <Redirect to="/" />;
  }

  const handleReturn = () => {
    if (history.length <= 2) {
      history.push("/");
    } else {
      history.goBack();
    }
  };

  const {
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters,
    publisher,
  } = hero;

  return (
    <div className="hero-info">
      <div className="hero-info-image">
        <img
          src={`../assets/heroes/${id}.jpg`}
          className="animate__animated animate__fadeInLeft"
          alt={superhero}
        />
      </div>
      <div className="hero-info-body">
        <h3>{superhero}</h3>
        <ul>
          <li>
            <b>Alter ego: </b>
            {alter_ego}
          </li>
          <li>
            <b>Publisher: </b>
            {publisher}
          </li>
          <li>
            <b>First appearance: </b>
            {first_appearance}
          </li>
        </ul>

        <h5 className="mt-5">CHARACTERS</h5>
        <p className="mt-2">{characters}</p>
        <button className="red-background mt-5" onClick={handleReturn}>
          Return
        </button>
      </div>
    </div>
  );
};

export default HeroScreen;
