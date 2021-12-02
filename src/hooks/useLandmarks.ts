import { useDispatch, useSelector } from "react-redux";
import {
  loadLandmarksThunk,
  loadLandmarkByIdThunk,
} from "../redux/thunks/landmarksThunks";
import { useCallback } from "react";
import ILandmark from "../types/landmarkInterface";

interface IStateProps {
  landmarks: any;
}

const useLandmarks = () => {
  const landmarks = useSelector(({ landmarks }: IStateProps) => landmarks);
  const dispatch = useDispatch();

  const loadLandmarks = useCallback(() => {
    dispatch(loadLandmarksThunk());
  }, [dispatch]);

  const loadByIdLandmark = useCallback(
    (id) => {
      dispatch(loadLandmarkByIdThunk(id));
    },
    [dispatch]
  );

  return {
    landmarks,
    loadLandmarks,
    loadByIdLandmark,
  };
};

export default useLandmarks;
