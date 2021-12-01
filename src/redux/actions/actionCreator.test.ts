import actionTypes from "./actionTypes";
import {
  loadLandmarksAction,
  createLandmarkAction,
  userLoginAction,
  userLogoutAction,
} from "./actionCreator";
import {
  getRandomLandmarks,
  getRandomLandmark,
} from "../../factories/landmarksFactory";
import ILandmark from "../../types/landmarkInterface";
import { getRandomUser } from "../../factories/userFactory";
import IUser from "../../types/userInterfaces";

describe("Given a loadLandmarkAction Creator", () => {
  describe("When it receives a list of Landmarks", () => {
    test("Then it should return a load type action with the Landmarks received", () => {
      const landmarksList = getRandomLandmarks() as Array<ILandmark>;
      const expectedAction = {
        type: actionTypes.loadLandmarks,
        landmarks: landmarksList,
      };

      const actionResult = loadLandmarksAction(landmarksList);

      expect(actionResult).toEqual(expectedAction);
    });
  });
});

describe("Given a createLandmarkAction Creator", () => {
  describe("When it receives a landmark", () => {
    test("Then it should return a create type action with the landmark received", () => {
      const newLandmark = getRandomLandmark() as ILandmark;
      const expectedAction = {
        type: actionTypes.createLandmark,
        landmark: newLandmark,
      };

      const actionResult = createLandmarkAction(newLandmark);

      expect(actionResult).toEqual(expectedAction);
    });
  });
});

describe("Given a userLoginAction Creator", () => {
  describe("When it receives a user", () => {
    test("Then it should return a login type action with the user received", () => {
      const newUser = getRandomUser() as IUser;
      const expectedAction = {
        type: actionTypes.loginUser,
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
        type: actionTypes.logoutUser,
      };

      const actionResult = userLogoutAction();

      expect(actionResult).toEqual(expectedAction);
    });
  });
});
