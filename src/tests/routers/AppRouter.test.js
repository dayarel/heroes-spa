import React from "react";

import { mount } from "enzyme";
import AppRouter from "../../routers/AppRouter";
import { AuthContext } from "../../auth/AuthContext";
describe("Testing <AppRouter />", () => {
  test("should show login component if authenticated", () => {
    const contextValue = {
      dispatch: jest.fn(),
      user: {
        logged: false,
      },
    };

    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect(wrapper.find(".container").exists()).toBe(true);
  });

  test("should show Marvel component if authenticated", () => {
    const contextValue = {
      dispatch: jest.fn(),
      user: {
        logged: true,
        name: "John Doe",
      },
    };

    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect(wrapper.find(".navbar").exists()).toBe(true);
  });
});
