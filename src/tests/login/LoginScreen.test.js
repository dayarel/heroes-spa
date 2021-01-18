import React from "react";

import { mount } from "enzyme";
import LoginScreen from "../../components/login/LoginScreen";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

describe("Tests on <LoginScreen />", () => {
  const history = {
    replace: jest.fn(),
  };

  const contextValue = {
    dispatch: jest.fn(),
  };

  test("should show componente correctly", () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <LoginScreen history={history} />
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });

  test("should do dispatch and navigation", () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <LoginScreen history={history} />
      </AuthContext.Provider>
    );
    wrapper.find("button").simulate("click");

    expect(contextValue.dispatch).toHaveBeenCalledWith({
      type: types.login,
      payload: {
        name: "David",
      },
    });
    expect(history.replace).toHaveBeenCalled();
  });
});
