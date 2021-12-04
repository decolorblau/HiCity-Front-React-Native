import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { userRegisterThunk } from "../redux/thunks/userThunks";

export const useUser = () => {
  const dispatch = useDispatch();

  const registerUser = useCallback(
    (user) => {
      dispatch(userRegisterThunk(user));
    },
    [dispatch]
  );

  return {
    registerUser,
  };
};
