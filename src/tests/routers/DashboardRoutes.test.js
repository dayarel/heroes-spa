import React from "react";
import { mount } from "enzyme";
import { AuthContext } from "../../auth/AuthContext";
import DashboardRoutes from "../../routers/DashboardRoutes";
import { MemoryRouter } from "react-router-dom";

describe("Tests on <DashboardRoutes />", () => {
  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: true,
      name: "John Doe",
    },
  };
  test("should render the component correctly", () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".text-info").text().trim()).toBe("John Doe");
  });
});
