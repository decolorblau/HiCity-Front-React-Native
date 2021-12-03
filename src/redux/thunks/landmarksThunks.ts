import { API_LANDMARKS } from "@env";
import axios from "axios";
import { Dispatch } from "redux";
import {
  loadLandmarksAction,
  loadByIdLoadmarkAction,
} from "../actions/actionCreator";

const landmarksApi: string = API_LANDMARKS as string;

export const loadLandmarksThunk = () => {
  return async (dispatch: Dispatch) => {
    const { data: landmarks } = await axios.get(landmarksApi);
    dispatch(loadLandmarksAction(landmarks));
  };
};

export const loadLandmarkByIdThunk = (id: string) => {
  return async (dispatch: Dispatch) => {
    const { status } = await axios.get(`${landmarksApi}${id}`);
    if (status === 200) {
      dispatch(loadByIdLoadmarkAction(id));
    }
  };
};
