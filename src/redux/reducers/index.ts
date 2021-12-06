import { combineReducers } from "redux";
import currentLandmarksReducer from "./currentLandmarksReducer";
import landmarksReducer from "./landmarksReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  landmarks: landmarksReducer,
  landmark: currentLandmarksReducer,
  user: userReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
