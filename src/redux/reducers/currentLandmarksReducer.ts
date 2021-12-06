import { ILandmarksAction } from "../../types/actionsInterfaces";
import ILandmark from "../../types/landmarkInterface";
import landmarkActionTypes from "../actions/landmarkActionTypes";

const currentLandmarksReducer = (
  landmark: ILandmark = {},
  action: ILandmarksAction
) => {
  let newLandmark;

  switch (action.type) {
    case landmarkActionTypes.loadByIdLandmark:
      newLandmark = action.id;
      console.log(newLandmark);
      break;
    default:
      newLandmark = landmark;
  }
  return newLandmark;
};

export default currentLandmarksReducer;
