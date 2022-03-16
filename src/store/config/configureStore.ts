import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import reducers from "../index";
import { composeWithDevTools } from "redux-devtools-extension";

let initialState = {};
const middleware = [thunk];

export const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
