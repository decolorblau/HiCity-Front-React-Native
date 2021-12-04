import axios from "axios";
import { Dispatch } from "redux";
import { userRegisterAction } from "../actions/userActionCreator";
import { API_USER_REGISTER } from "@env";

const registerApi: string = API_USER_REGISTER as string;

export const userRegisterThunk = (user: object) => {
  return async (dispatch: Dispatch) => {
    try {
      const { data: newUser } = await axios.post(registerApi, user);
      dispatch(userRegisterAction(newUser));
    } catch (error) {
      return "User not register";
    }
  };
};
