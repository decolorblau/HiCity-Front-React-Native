import { combineReducers } from "redux";
import landmarksReducer from "./landmarksReducer";

const rootReducer = combineReducers({
  landmarks: landmarksReducer,
});

export default rootReducer;
