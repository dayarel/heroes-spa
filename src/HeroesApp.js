import React, { useReducer, useEffect } from "react";
import { AuthContext } from "./auth/AuthContext";
import AppRouter from "./routers/AppRouter";
import { authReducer } from "./auth/authReducer";
import "./styles/styles.scss";

const init = () => {
  return (
    JSON.parse(localStorage.getItem("user")) || {
      logged: false,
    }
  );
};

const HeroesApp = () => {
  const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <AppRouter />
    </AuthContext.Provider>
  );
};

export default HeroesApp;
