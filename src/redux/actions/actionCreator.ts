import actionTypes from "./actionTypes";
import ILandmark from "../../types/landmarkInterface";
import IUser from "../../types/userInterfaces";

export const loadLandmarksAction: object = (landmarks: Array<ILandmark>) => ({
  type: actionTypes.loadLandmarks,
  landmarks,
});

export const createLandmarkAction = (landmark: ILandmark) => ({
  type: actionTypes.createLandmark,
  landmark,
});

export const userLoginAction = (user: IUser) => ({
  type: actionTypes.loginUser,
  user,
});

export const userLogoutAction = () => ({
  type: actionTypes.logoutUser,
});
