import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userRegisterThunk, userLoginThunk } from "../redux/thunks/userThunks";
import IUser from "../types/userInterfaces";
import { userLogoutAction } from "../redux/actions/userActionCreator";
interface IStateProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user: any;
}

export const useUser = () => {
  const user = useSelector(({ user }: IStateProps) => user);
  const dispatch = useDispatch();

  const registerUser = useCallback(
    (user: IUser) => {
      dispatch(userRegisterThunk(user));
    },
    [dispatch]
  );
  const login = async (user: IUser) => {
    const responseStatus = dispatch(userLoginThunk(user));
    return responseStatus;
  };
  const logout = () => {
    dispatch(userLogoutAction());
  };

  return {
    user,
    registerUser,
    login,
    logout,
  };
};
