import React from "react";
import { heroes } from "../../data/heroes";
import HeroCard from "../heroes/HeroCard";
import useForm from "../../hooks/useForm";
const SearchScreen = () => {
  const filteredHeroes = heroes;

  const [values, handleInputChange] = useForm({
    searchText: "",
  });

  const { searchText } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h1>Search Screen</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Find your hero"
              className="form-control"
              name="searchText"
              value={searchText}
              autoComplete="off"
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="btn btn-block mt-2 btn-outline-primary"
            >
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {filteredHeroes.map((hero) => (
            <HeroCard {...hero} key={hero.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
