import React from "react";
import { mount } from "enzyme";
import { MemoryRouter, Route } from "react-router-dom";
import SearchScreen from "../../components/search/SearchScreen";
describe("Tests on <SearchScreen />", () => {
  test("should render the component with default values", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search"]}>
        <Route path="/search" component={SearchScreen}></Route>
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".alert-info").text().trim()).toBe("Search a hero...");
  });

  test("should show the hero and input value to be the value of query string", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search?q=batman"]}>
        <Route path="/search" component={SearchScreen}></Route>
      </MemoryRouter>
    );

    expect(wrapper.find("input").prop("value")).toBe("batman");
    expect(wrapper).toMatchSnapshot();
  });

  test("should show error if hero is not found", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search?q=batman123"]}>
        <Route path="/search" component={SearchScreen}></Route>
      </MemoryRouter>
    );

    expect(wrapper.find(".alert-danger").exists()).toBe(true);
  });

  test("should call push method in history", () => {
    const history = {
      push: jest.fn(),
    };

    const wrapper = mount(
      <MemoryRouter initialEntries={["/search?q=batman123"]}>
        <Route
          path="/search"
          component={() => <SearchScreen history={history} />}
        ></Route>
      </MemoryRouter>
    );

    wrapper.find("input").simulate("change", {
      target: {
        name: "searchText",
        value: "batman",
      },
    });

    wrapper.find("form").prop("onSubmit")({
      preventDefault() {},
    });

    expect(history.push).toHaveBeenCalledWith(`?q=batman`);
  });
});
