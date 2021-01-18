import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

describe("Testing autoReducer", () => {
  test("should return the default state", () => {
    const state = authReducer({ logged: false }, {});

    expect(state).toEqual({ logged: false });
  });

  test("should authenticate and set the user name", () => {
    const action = {
      type: types.login,
      payload: {
        name: "David",
      },
    };
    const state = authReducer({}, action);
    expect(state).toEqual({ name: "David", logged: true });
  });

  test("delete the user name and return logged in false ", () => {
    const action = {
      type: types.logout,
    };

    const state = authReducer({ logged: true, name: "John Doe" }, action);
    expect(state).toEqual({ logged: false });
  });
});
