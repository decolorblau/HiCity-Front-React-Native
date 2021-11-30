import axios from "axios";
import { loadLandmarksAction } from "../actions/actionCreator";

const urlApi = "https://proyecto-final-claudia-back.herokuapp.com/landmark";
const loadLandmarksThunk = () => {
  return async (dispatch: any) => {
    const { data: landmarks } = await axios.get(urlApi + "/");
    dispatch(loadLandmarksAction(landmarks));
  };
};

export default loadLandmarksThunk;
