import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "remote-redux-devtools";
import { rootReducer } from "../reducers";

export default (initialState?: any) => {
  const composeEnhancers = composeWithDevTools({
    realtime: true,
    hostname: "localhost",
    port: 19000,
  });
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
};
