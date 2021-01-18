import React from "react";

import { mount } from "enzyme";
import { AuthContext } from "../../../auth/AuthContext";
import { Navbar } from "../../../components/ui/Navbar";
import { Router, MemoryRouter } from "react-router-dom";
import { types } from "../../../types/types";

describe("Tests on <Navbar />", () => {
  const historyMock = {
    push: jest.fn(),
    replace: jest.fn(),
    location: {},
    listen: jest.fn(),
    createHref: jest.fn(),
  };

  const contextValues = {
    dispatch: jest.fn(),
    user: {
      logged: true,
      name: "John Doe",
    },
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  const wrapper = mount(
    <AuthContext.Provider value={contextValues}>
      <MemoryRouter>
        <Router history={historyMock}>
          <Navbar />
        </Router>
      </MemoryRouter>
    </AuthContext.Provider>
  );

  test("should show the component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should show the name provided when logged", () => {
    expect(wrapper.find(".text-info").text().trim()).toBe("John Doe");
  });

  test("should call logout and use history", () => {
    wrapper.find("button").simulate("click");
    expect(contextValues.dispatch).toHaveBeenCalledWith({
      type: types.logout,
    });

    expect(historyMock.replace).toHaveBeenCalledWith("/login");
  });
});
