import actionTypes from "../actions/actionTypes";

const landmarksReducer = (landmarks: any = [], action: any) => {
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
