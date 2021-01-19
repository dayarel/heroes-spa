import React, { useContext } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";
import avatar from "../../images/avatar.jpg";
import dc from "../../images/dc.svg";
import marvel from "../../images/marvel.svg";
import glass from "../../images/lupa.svg";
import comicbook from "../../images/comicbook.svg";

export const Navbar = () => {
  const { dispatch, user } = useContext(AuthContext);
  const { replace } = useHistory();

  const handleLogout = () => {
    replace("/login");
    dispatch({
      type: types.logout,
    });
  };
  return (
    <nav className="red-background">
      <div className="user-wrapper">
        <img src={avatar} alt="User Avatar" />
        <h1 className="mt-2">{user.name}</h1>
        <h2 className="mt-1">Free member</h2>

        <button className="mt-5" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="nav-links">
        <h1>Publishers</h1>
        <ul className="mt-5">
          <li>
            <img src={marvel} alt="Shield logo" />
            <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              exact
              to="/marvel"
            >
              Marvel
            </NavLink>
          </li>
          <li className="mt-3">
            <img src={dc} alt="DC Logo" />
            <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              exact
              to="/dc"
            >
              DC
            </NavLink>
          </li>
          <li className="mt-3">
            <img src={glass} alt="Magnifying glass" />
            <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              exact
              to="/search"
            >
              Search
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="premium-badge">
        <h2>Go premium for more heroes!</h2>
        <img src={comicbook} alt="Premium logo" />
      </div>
    </nav>
  );
};
