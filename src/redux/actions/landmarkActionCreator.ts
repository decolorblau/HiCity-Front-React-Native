import landmarkActionTypes from "./landmarkActionTypes";
import ILandmark from "../../types/landmarkInterface";

export const loadLandmarksAction = (landmarks: Array<ILandmark>) => ({
  type: landmarkActionTypes.loadLandmarks,
  landmarks,
});

export const loadByIdLandmarkAction = (id: string) => ({
  type: landmarkActionTypes.loadByIdLandmark,
  id,
});

export const createLandmarkAction = (landmark: ILandmark) => ({
  type: landmarkActionTypes.createLandmark,
  landmark,
});
