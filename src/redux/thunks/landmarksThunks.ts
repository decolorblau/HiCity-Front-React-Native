/* import { API_LANDMARKS } from "@env";*/
import axios from "axios";
import { Dispatch } from "redux";
import { loadLandmarksAction } from "../actions/actionCreator";

const landmarksApi: string =
  "https://proyecto-final-claudia-back.herokuapp.com/landmark" as string;

const loadLandmarksThunk = () => {
  return async (dispatch: Dispatch) => {
    const { data: landmarks } = await axios.get(landmarksApi + "/");
    dispatch(loadLandmarksAction(landmarks));
  };
};

export default loadLandmarksThunk;
