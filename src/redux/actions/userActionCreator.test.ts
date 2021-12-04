import userActionTypes from "./userActionTypes";
import {
  userLoginAction,
  userLogoutAction,
  userRegisterAction,
} from "./userActionCreator";
import { getRandomUser } from "../../factories/userFactory";
import IUser from "../../types/userInterfaces";

describe("Given a userRegisterAction Creator", () => {
  describe("When it receives a user", () => {
    test("Then it should return a login type action with the user received", () => {
      const newUser = getRandomUser() as IUser;
      const expectedAction = {
        type: userActionTypes.registerUser,
        user: newUser,
      };

      const actionResult = userRegisterAction(newUser);

      expect(actionResult).toEqual(expectedAction);
    });
  });
});
describe("Given a userLoginAction Creator", () => {
  describe("When it receives a user", () => {
    test("Then it should return a login type action with the user received", () => {
      const newUser = getRandomUser() as IUser;
      const expectedAction = {
        type: userActionTypes.loginUser,
        user: newUser,
      };

      const actionResult = userLoginAction(newUser);

      expect(actionResult).toEqual(expectedAction);
    });
  });
});

describe("Given a userLogoutAction Creator", () => {
  describe("When it receives nothing", () => {
    test("Then it should return a logout type action", () => {
      const expectedAction = {
        type: userActionTypes.logoutUser,
      };

      const actionResult = userLogoutAction();

      expect(actionResult).toEqual(expectedAction);
    });
  });
});
