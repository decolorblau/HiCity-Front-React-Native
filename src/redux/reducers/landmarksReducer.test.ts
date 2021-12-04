import {
  getRandomLandmark,
  getRandomLandmarks,
} from "../../factories/landmarksFactory";
import landmarkActionTypes from "../actions/landmarkActionTypes";
import landmarksReducer from "./landmarksReducer";
import ILandmark from "../../types/landmarkInterface";
import { ILandmarksAction } from "../../types/actionsInterfaces";

describe("Given landmarkReducer reducer", () => {
  describe("When it receives an empty landmarks list and a load action with five landmarks", () => {
    test("Then it should return a new landmarks list with the five landmarks received", () => {
      const initialLandmarksList: Array<ILandmark> = [];
      const landmarksList: Array<ILandmark> = getRandomLandmarks(
        5
      ) as Array<ILandmark>;
      const action: ILandmarksAction = {
        type: landmarkActionTypes.loadLandmarks,
        landmarks: landmarksList,
      };

      const newLandmarks = landmarksReducer(initialLandmarksList, action);

      expect(newLandmarks).toEqual(landmarksList);
    });
  });
  describe("When it receives a landmark list and a create action with a new landmark", () => {
    test("Then it should return a new landmark list including the new landmark", () => {
      const initialLandmarksList: Array<ILandmark> = getRandomLandmarks(
        3
      ) as Array<ILandmark>;
      const newLandmark: ILandmark = getRandomLandmark() as ILandmark;
      const action: ILandmarksAction = {
        type: landmarkActionTypes.createLandmark,
        landmark: newLandmark,
      };

      const newList = landmarksReducer(initialLandmarksList, action);

      expect(newList).toContainEqual(newLandmark);
    });
  });
  describe("When it receives a landmark list and a load by id action with a id landmark", () => {
    test("Then it should return a new landmark list only with the landmark found", () => {
      const initialLandmarksList: Array<ILandmark> =
        getRandomLandmarks() as Array<ILandmark>;
      const idLandmark: string | undefined = initialLandmarksList[0].id;
      const action: ILandmarksAction = {
        type: landmarkActionTypes.loadByIdLandmark,
        id: idLandmark,
      };

      const [landmarkFound] = landmarksReducer(initialLandmarksList, action);

      expect(landmarkFound).toEqual(initialLandmarksList[0]);
    });
  });
  describe("when it receives a landmark list with five landmarks an unknown action", () => {
    test("Then it should return the receives landmarks list", () => {
      const initialLandmarksList: Array<ILandmark> = getRandomLandmarks(
        5
      ) as Array<ILandmark>;
      const action: ILandmarksAction = {
        type: "unknown action",
      };

      const newLandmarksList = landmarksReducer(initialLandmarksList, action);

      expect(newLandmarksList).toEqual(initialLandmarksList);
    });
  });
});
