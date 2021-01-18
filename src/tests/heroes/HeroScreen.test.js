import React from "react";
import { mount } from "enzyme";
import HeroScreen from "../../components/heroes/HeroScreen";
import { MemoryRouter, Route } from "react-router-dom";
describe("Tests on <HeroScreen />", () => {
  test("should show the component redirect if there's no arguments in the url", () => {
    const historyMock = {
      length: 10,
      push: jest.fn(),
      goBack: jest.fn(),
    };
    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero"]}>
        <HeroScreen history={historyMock} />
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("Redirect").exists()).toBe(true);
  });

  test("should show a hero if the url param exists", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero/dc-martian"]}>
        <Route path="/hero/:heroeid" component={HeroScreen} />
      </MemoryRouter>
    );

    expect(wrapper.find(".row").exists()).toBe(true);
  });

  test("should go to initial page with push", () => {
    const historyMock = {
      length: 1,
      push: jest.fn(),
      goBack: jest.fn(),
    };

    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero/dc-martian"]}>
        <Route
          path="/hero/:heroeid"
          component={(props) => <HeroScreen history={historyMock} />}
        />
      </MemoryRouter>
    );

    wrapper.find("button").simulate("click");

    expect(historyMock.push).toHaveBeenCalled();
    expect(historyMock.goBack).not.toHaveBeenCalled();
  });

  test("should go back to previous page with push", () => {
    const historyMock = {
      length: 3,
      push: jest.fn(),
      goBack: jest.fn(),
    };

    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero/dc-martian"]}>
        <Route
          path="/hero/:heroeid"
          component={(props) => <HeroScreen history={historyMock} />}
        />
      </MemoryRouter>
    );

    wrapper.find("button").simulate("click");

    expect(historyMock.goBack).toHaveBeenCalled();
    expect(historyMock.push).not.toHaveBeenCalled();
  });

  test("should call redirect if heroe does not exist", () => {
    const historyMock = {
      length: 3,
      push: jest.fn(),
      goBack: jest.fn(),
    };
    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero/dc-martian1234567"]}>
        <Route
          path="/hero/:heroeid"
          component={(props) => <HeroScreen history={historyMock} />}
        />
      </MemoryRouter>
    );

    expect(wrapper.text()).toBe("");
  });
});
