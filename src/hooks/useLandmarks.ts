import { useDispatch, useSelector } from "react-redux";
import loadLandmarksThunk from "../redux/thunks/landmarksThunks";
import { useCallback } from "react";

const useLandmarks = () => {
  const landmarks = useSelector(({ landmarks }) => landmarks);
  const dispatch = useDispatch();

  const loadLandmarks = useCallback(() => {
    dispatch(loadLandmarksThunk());
  }, [dispatch]);

  return {
    landmarks,
    loadLandmarks,
  };
};

export default useLandmarks;
