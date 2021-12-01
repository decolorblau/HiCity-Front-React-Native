import actionTypes from "./actionTypes";
import { loadLandmarksAction } from "./actionCreator";
import { getRandomLandmarks } from "../../factories/landmarksFactory";
import ILandmark from "../../types/landmarkInterface";

describe("Given a loadLandmarkAction Creator", () => {
  describe("When it receives a list of Landmarks", () => {
    test("Then it should return a load type action with the Landmarks received", () => {
      const landmarksList = getRandomLandmarks(5) as Array<ILandmark>;
      const expectedAction = {
        type: actionTypes.loadLandmarks,
        landmarks: landmarksList,
      };

      const actionResult = loadLandmarksAction(landmarksList);

      expect(actionResult).toEqual(expectedAction);
    });
  });
});
