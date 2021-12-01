import { combineReducers } from "redux";
import landmarksReducer from "./landmarksReducer";

export const rootReducer = combineReducers({
  landmarks: landmarksReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
