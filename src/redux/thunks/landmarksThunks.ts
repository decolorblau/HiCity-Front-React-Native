import { API_LANDMARKS, API_LANDMARKS_CREATE, LOCALSTORAGE } from "@env";
import axios from "axios";
import { Dispatch } from "redux";
import {
  loadLandmarksAction,
  loadByIdLandmarkAction,
  createLandmarkAction,
  deleteLandmarkAction,
  updateLandmarkAction,
} from "../actions/landmarkActionCreator";
import { getDataObject } from "../../storage/asyncStorage";
import ILandmark from "../../types/landmarkInterface";

const landmarksApi: string = API_LANDMARKS as string;
const landmarksApiCreate: string = API_LANDMARKS_CREATE as string;
const userLocal: string = LOCALSTORAGE as string;

export const loadLandmarksThunk = () => {
  return async (dispatch: Dispatch) => {
    const { data: landmarks } = await axios.get(landmarksApi);
    dispatch(loadLandmarksAction(landmarks));
  };
};

export const loadLandmarkByIdThunk = (id: string) => {
  return async (dispatch: Dispatch) => {
    const { data: landmark } = await axios.get(`${landmarksApi}/${id}`);
    dispatch(loadByIdLandmarkAction(landmark));
  };
};

export const createLandmarkThunk =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (landmark: any) => async (dispatch: Dispatch) => {
    try {
      const { token } = await getDataObject(userLocal);
      const { data: newLandmark } = await axios.post(
        landmarksApiCreate,
        landmark,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      dispatch(createLandmarkAction(newLandmark));
    } catch (error) {
      return error;
    }
  };

export const deleteLandmarkThunk =
  (id: string) => async (dispatch: Dispatch) => {
    try {
      const { token } = await getDataObject(userLocal);

      const response = await axios.delete(`${landmarksApi}/delete/${id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      if (response.status === 200) {
        dispatch(deleteLandmarkAction(id));
      }
    } catch (error) {
      return error;
    }
  };

export const updateLandmarkThunk =
  (landmark: ILandmark, id: string) => async (dispatch: Dispatch) => {
    try {
      const { token } = await getDataObject(userLocal);

      const response = await axios.put(`${landmarksApi}/${id}`, landmark, {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status === 200) {
        const newLandmark = response.data;
        dispatch(updateLandmarkAction(newLandmark));
      }
    } catch (error) {
      return error;
    }
  };
