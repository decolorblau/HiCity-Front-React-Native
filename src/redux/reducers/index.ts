import { combineReducers } from "redux";
import landmarksReducer from "./landmarksReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  landmarks: landmarksReducer,
  user: userReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
