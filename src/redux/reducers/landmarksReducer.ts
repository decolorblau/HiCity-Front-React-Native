import { ILandmarksAction } from "../../types/actionsInterfaces";
import ILandmark from "../../types/landmarkInterface";
import actionTypes from "../actions/actionTypes";

const landmarksReducer = (
  landmarks: Array<ILandmark> = [],
  action: ILandmarksAction
) => {
  let newLandmarks;

  switch (action.type) {
    case actionTypes.loadLandmarks:
      newLandmarks = [...action.landmarks];
      break;

    case actionTypes.createLandmark:
      newLandmarks = [...landmarks, action.landmark];
      break;

    case actionTypes.loadByIdLandmark:
      newLandmarks = landmarks.filter((landmark) => landmark.id === action.id);
      break;
    default:
      newLandmarks = landmarks;
  }
  return newLandmarks;
};

export default landmarksReducer;
