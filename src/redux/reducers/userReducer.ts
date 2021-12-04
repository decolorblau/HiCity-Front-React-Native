import { IUserAction } from "../../types/actionsInterfaces";
import IUser from "../../types/userInterfaces";
import userActionTypes from "../actions/userActionTypes";

export const userReducer = (
  user = { isAuthenticated: false as boolean, user: {} as IUser },
  action: IUserAction
) => {
  let newUser;
  switch (action.type) {
    case userActionTypes.registerUser:
      newUser = { ...user, isAuthenticated: false, user: action.user };
      break;
    case userActionTypes.loginUser:
      newUser = {
        isAuthenticated: true,
        user: { ...action.user },
      };
      break;
    case userActionTypes.logoutUser:
      newUser = {
        isAuthenticated: false,
        user: {},
      };
      break;

    default:
      newUser = user;
      break;
  }

  return newUser;
};
