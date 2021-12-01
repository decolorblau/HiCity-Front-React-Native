import axios from "axios";
import { Dispatch } from "redux";
import { loadLandmarksAction } from "../actions/actionCreator";

const landmarksApi: string = process.env.REACT_APP_LANDMARKS_API as string;
const loadLandmarksThunk = () => {
  return async (dispatch: Dispatch) => {
    const { data: landmarks } = await axios.get(landmarksApi + "/");
    dispatch(loadLandmarksAction(landmarks));
  };
};

export default loadLandmarksThunk;
