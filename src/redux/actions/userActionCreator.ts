import userActionTypes from "./userActionTypes";
import IUser from "../../types/userInterfaces";

export const userRegisterAction = (user: IUser) => ({
  type: userActionTypes.registerUser,
  user,
});

export const userLoginAction = (user: IUser) => ({
  type: userActionTypes.loginUser,
  user,
});

export const userLogoutAction = () => ({
  type: userActionTypes.logoutUser,
});
