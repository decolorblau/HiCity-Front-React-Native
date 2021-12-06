import { ILandmarksAction } from "../../types/actionsInterfaces";
import landmarkActionTypes from "../actions/landmarkActionTypes";

const currentLandmarksReducer = (
  landmark: object = {},
  action: ILandmarksAction
) => {
  let newLandmark;

  switch (action.type) {
    case landmarkActionTypes.loadByIdLandmark:
      newLandmark = action.id;
      break;
    default:
      newLandmark = landmark;
  }
  return newLandmark;
};

export default currentLandmarksReducer;
