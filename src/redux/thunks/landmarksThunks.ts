import { API_LANDMARKS, API_LANDMARKS_CREATE, LOCALSTORAGE } from "@env";
import axios from "axios";
import { Dispatch } from "redux";
import {
  loadLandmarksAction,
  loadByIdLandmarkAction,
  createLandmarkAction,
} from "../actions/landmarkActionCreator";
import { getDataObject } from "../../storage/asyncStorage";

const landmarksApi: string = API_LANDMARKS as string;
const landmarksApiCreate: string = API_LANDMARKS_CREATE as string;
const userLocal: string = LOCALSTORAGE as string;

export const loadLandmarksThunk = () => {
  console.log(landmarksApi);
  return async (dispatch: Dispatch) => {
    const { data: landmarks } = await axios.get(landmarksApi);
    dispatch(loadLandmarksAction(landmarks));
  };
};

export const loadLandmarkByIdThunk = (id: string) => {
  return async (dispatch: Dispatch) => {
    const { status } = await axios.get(`${landmarksApi}${id}`);
    if (status === 200) {
      dispatch(loadByIdLandmarkAction(id));
    }
  };
};

export const createLandmarkThunk =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (landmark: any) => async (dispatch: Dispatch) => {
    try {
      const { token } = await getDataObject(userLocal);
      console.log("eeeeeeeeeeeeeeeeee" + token);

      const { data: newLandmark } = await axios.post(
        landmarksApiCreate,
        landmark,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(newLandmark);
      console.log("holaaaaaaaaaaaaaaaaaaaa");
      console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
      console.log("estoy en el thunk" + newLandmark);
      dispatch(createLandmarkAction(newLandmark));
      console.log("estoy en el thunk dispatch" + newLandmark);
    } catch (error) {
      return error;
    }
  };
