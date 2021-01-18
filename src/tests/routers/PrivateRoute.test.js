import React from "react";

import { mount } from "enzyme";
import PrivateRoute from "../../routers/PrivateRoute";
import { MemoryRouter } from "react-router-dom";

describe("Testing <PrivateRoute />", () => {
  const props = {
    location: {
      pathname: "/marvel",
    },
  };

  Storage.prototype.setItem = jest.fn();

  test("should show the component if isAuthenticated and set localStorage", () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          isAuthenticated={true}
          component={() => <span>Ready!</span>}
          {...props}
        />
      </MemoryRouter>
    );

    expect(wrapper.find("span").exists()).toBe(true);

    expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", "/marvel");
  });

  test("should block the component if not authenticated", () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          isAuthenticated={false}
          component={() => <span>Ready!</span>}
          {...props}
        />
      </MemoryRouter>
    );

    expect(wrapper.find("span").exists()).toBe(false);
  });
});
