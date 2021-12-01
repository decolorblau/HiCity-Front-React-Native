import { ILoadLandmarksAction } from "../../types/actionsInterfaces";
import ILandmark from "../../types/landmarkInterface";
import actionTypes from "../actions/actionTypes";

const landmarksReducer = (
  landmarks: Array<ILandmark> = [],
  action: ILoadLandmarksAction
) => {
  let newLandmarks;

  switch (action.type) {
    case actionTypes.loadLandmarks:
      newLandmarks = [...action.landmarks];
      break;

    case actionTypes.createLandmark:
      newLandmarks = [...landmarks, action.landmark];
      break;
    default:
      newLandmarks = landmarks;
  }
  return newLandmarks;
};

export default landmarksReducer;
