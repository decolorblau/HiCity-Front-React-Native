import landmarkActionTypes from "./landmarkActionTypes";
import {
  loadLandmarksAction,
  createLandmarkAction,
  updateLandmarkAction,
  deleteLandmarkAction,
} from "./landmarkActionCreator";
import {
  getRandomLandmarks,
  getRandomLandmark,
} from "../../factories/landmarksFactory";
import ILandmark from "../../types/landmarkInterface";

describe("Given a loadLandmarkAction Creator", () => {
  describe("When it receives a list of Landmarks", () => {
    test("Then it should return a load type action with the Landmarks received", () => {
      const landmarksList = getRandomLandmarks() as Array<ILandmark>;
      const expectedAction = {
        type: landmarkActionTypes.loadLandmarks,
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
        type: landmarkActionTypes.createLandmark,
        landmark: newLandmark,
      };

      const actionResult = createLandmarkAction(newLandmark);

      expect(actionResult).toEqual(expectedAction);
    });
  });
});
describe("Given a updateLandmarkAction Creator", () => {
  describe("When it receives a landmark", () => {
    test("Then it should return a update type action with the landmark received", () => {
      const updateLandmark = getRandomLandmark() as ILandmark;
      const expectedAction = {
        type: landmarkActionTypes.updateLandmark,
        landmark: updateLandmark,
      };

      const actionResult = updateLandmarkAction(updateLandmark);

      expect(actionResult).toEqual(expectedAction);
    });
  });
});
describe("Given a deleteLandmarkAction Creator", () => {
  describe("When it receives a id landmark", () => {
    test("Then it should return a delete type action with the id landmark received", () => {
      const landmark = getRandomLandmark() as ILandmark;
      const idLandmark: string = landmark.id as string;
      const expectedAction = {
        type: landmarkActionTypes.deleteLandmark,
        id: idLandmark,
      };

      const actionResult = deleteLandmarkAction(idLandmark);

      expect(actionResult).toEqual(expectedAction);
    });
  });
});
