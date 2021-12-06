import { useDispatch, useSelector } from "react-redux";
import {
  loadLandmarksThunk,
  loadLandmarkByIdThunk,
  createLandmarkThunk,
  deleteLandmarkThunk,
  updateLandmarkThunk,
} from "../redux/thunks/landmarksThunks";
import { useCallback } from "react";

interface IStateProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  landmarks?: any;
  landmark?: any;
}

const useLandmarks = () => {
  const landmark = useSelector(({ landmark }: IStateProps) => landmark);
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

  const createLandmark = useCallback(
    (landmark) => {
      dispatch(createLandmarkThunk(landmark));
    },
    [dispatch]
  );
  const deleteLandmark = useCallback(
    (id) => {
      dispatch(deleteLandmarkThunk(id));
    },
    [dispatch]
  );

  const updateLandmark = useCallback(
    (landmark) => {
      dispatch(updateLandmarkThunk(landmark));
    },
    [dispatch]
  );

  return {
    landmark,
    landmarks,
    loadLandmarks,
    loadByIdLandmark,
    createLandmark,
    deleteLandmark,
    updateLandmark,
  };
};

export default useLandmarks;
