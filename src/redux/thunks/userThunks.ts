import axios from "axios";
import { Dispatch } from "redux";
import {
  userRegisterAction,
  userLoginAction,
} from "../actions/userActionCreator";
import { API_USER_REGISTER, API_USER_LOGIN, LOCALSTORAGE } from "@env";
import jwtDecode from "jwt-decode";
import IUser from "../../types/userInterfaces";
import { tokenStorage } from "../../storage/asyncStorage";

const userLocal: string = LOCALSTORAGE;

const registerApi: string = API_USER_REGISTER;
const loginApi: string = API_USER_LOGIN;

export const userRegisterThunk = (user: IUser | undefined) => {
  return async (dispatch: Dispatch) => {
    try {
      const { data: newUser } = await axios.post(registerApi, user);
      dispatch(userRegisterAction(newUser));
    } catch (error) {
      return "User not register";
    }
  };
};

export const userLoginThunk = (user: IUser) => async (dispatch: Dispatch) => {
  // eslint-disable-next-line no-console
  console.log(loginApi);
  const response = await axios.post(loginApi, user);

  if (response.status === 200) {
    const token = response.data.token;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const userToken: any = jwtDecode(token);
    dispatch(userLoginAction(userToken));

    await tokenStorage(userLocal, { token: token });
  }
};
