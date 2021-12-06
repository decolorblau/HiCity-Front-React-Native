import { ILandmarksAction } from "../../types/actionsInterfaces";
import ILandmark from "../../types/landmarkInterface";
import landmarkActionTypes from "../actions/landmarkActionTypes";

const landmarksReducer = (
  landmarks: Array<ILandmark> = [],
  action: ILandmarksAction
) => {
  let newLandmarks;

  switch (action.type) {
    case landmarkActionTypes.loadLandmarks:
      newLandmarks = [...action.landmarks];
      break;

    case landmarkActionTypes.createLandmark:
      newLandmarks = [...landmarks, action.landmark];
      break;

    case landmarkActionTypes.loadByIdLandmark:
      newLandmarks = landmarks.filter((landmark) => landmark.id === action.id);
      console.log(newLandmarks);
      break;
    default:
      newLandmarks = landmarks;
  }
  return newLandmarks;
};

export default landmarksReducer;
