import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";
const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    const lastPath = localStorage.getItem("lastPath") || "/";
    dispatch({
      type: types.login,
      payload: {
        name: "David",
      },
    });
    history.replace(lastPath);
  };

  return (
    <div className="container login-container">
      <h1>Login</h1>

      <button className="red-background" onClick={handleLogin}>
        Go!
      </button>
    </div>
  );
};

export default LoginScreen;
