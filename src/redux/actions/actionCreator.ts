import actionTypes from "./actionTypes";

export const loadLandmarksAction = (landmarks: any) => ({
  type: actionTypes.loadLandmarks,
  landmarks,
});

export const createLandmarkAction = (landmark: any) => ({
  type: actionTypes.createLandmark,
  landmark,
});

export const userLoginAction = (user: any) => ({
  type: actionTypes.loginUser,
  user,
});

export const userLogoutAction = () => ({
  type: actionTypes.logoutUser,
});
