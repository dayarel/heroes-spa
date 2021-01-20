import React, { useMemo } from "react";
import queryString from "query-string";
import HeroCard from "../heroes/HeroCard";
import useForm from "../../hooks/useForm";
import { useLocation } from "react-router-dom";
import { getHeroesByName } from "../../selectors/getHeroesByName";

const SearchScreen = ({ history }) => {
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);

  const [values, handleInputChange] = useForm({
    searchText: q,
  });
  const { searchText } = values;
  const filteredHeroes = useMemo(() => getHeroesByName(q), [q]);

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`?q=${searchText}`);
  };
  return (
    <div className="search-section">
      <h1 className="red-background">Search A Hero</h1>
      <div className="search-wrapper">
        <div className="mt-5 search-field">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Find your hero"
              name="searchText"
              value={searchText}
              autoComplete="off"
              onChange={handleInputChange}
            />
            <button type="submit" className="red-background">
              Search
            </button>
          </form>
        </div>
        <div className="search-body">
          {q === "" && <div className="alert alert-info">Search a hero...</div>}

          {q !== "" && filteredHeroes.length === 0 && (
            <div className="alert alert-danger">
              No heroes found with the name ${searchText}. Please try with
              another name
            </div>
          )}
          {filteredHeroes.map((hero) => (
            <HeroCard {...hero} key={hero.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
