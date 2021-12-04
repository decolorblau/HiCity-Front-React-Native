import { API_LANDMARKS, API_LANDMARKS_CREATE } from "@env";
import axios from "axios";
import { Dispatch } from "redux";
import ILandmark from "../../types/landmarkInterface";
import {
  loadLandmarksAction,
  loadByIdLoadmarkAction,
  createLandmarkAction,
} from "../actions/actionCreator";

const landmarksApi: string = API_LANDMARKS as string;
const landmarksApiCreate: string = API_LANDMARKS_CREATE as string;

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

export const createLandmarkThunk = (landmark: ILandmark) => {
  return async (dispatch: Dispatch) => {
    const { data: newLandmark } = await axios.post(
      landmarksApiCreate,
      landmark
    );
    dispatch(createLandmarkAction(newLandmark));
  };
};
