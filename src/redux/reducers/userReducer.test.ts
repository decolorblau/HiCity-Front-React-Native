import userActionTypes from "../actions/userActionTypes";
import { userReducer } from "./userReducer";

describe("Given usersReducer reducer", () => {
  describe("When it receives a user and userLogin action", () => {
    test("Then it should return a new user with isAuthenticated: true", () => {
      const initialUser = {
        isAuthenticated: false,
        user: {
          name: "test",
          email: "test@test.com",
          password: "newtest",
        },
      };

      const action = {
        type: userActionTypes.loginUser,
        user: {
          name: "test",
          email: "test@test.com",
          password: "newtest",
        },
      };
      const newUser = userReducer(initialUser, action);

      expect(newUser).toHaveProperty("isAuthenticated", true);
    });
  });
  describe("When it receives a user and logoutUser action", () => {
    test("Then it should return a new user with isAuthenticated: false", () => {
      const initialUser = {
        isAuthenticated: true,
        user: {
          name: "test",
          email: "test@test.com",
          password: "newtest",
        },
      };

      const action = {
        type: userActionTypes.logoutUser,
        user: {
          name: "test",
          email: "test@test.com",
          password: "newtest",
        },
      };
      const newUser = userReducer(initialUser, action);

      expect(newUser).toHaveProperty("isAuthenticated", false);
    });
  });

  describe("When it receives a user and registerUser action", () => {
    test("Then it should return a new user with isAuthenticated: false", () => {
      const initialUser = {
        isAuthenticated: false,
        user: {
          name: "",
          email: "",
          password: "",
        },
      };

      const action = {
        type: userActionTypes.registerUser,
        user: {
          name: "test",
          email: "test@test.com",
          password: "newtest",
        },
      };
      const newUser = userReducer(initialUser, action);

      expect(newUser).toHaveProperty("isAuthenticated", false);
    });
  });
  describe("When it receives a newUser with authenticated true but it not receives any action", () => {
    test("Then it should return the same user with true authenticated", () => {
      const initialUser = {
        isAuthenticated: true,
        user: {
          name: "test",
          email: "test@test.com",
          password: "newtest",
        },
      };
      const action = {
        type: "",
        user: {
          name: "test",
          email: "test@test.com",
          password: "newtest",
        },
      };

      const newUser = userReducer(initialUser, action);

      expect(newUser).toEqual(initialUser);
    });
  });
});
