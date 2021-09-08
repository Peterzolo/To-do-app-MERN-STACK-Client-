import { createStore } from "redux";
import { applyMiddleware } from "redux";
import allReducers from "../reducers/rootReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  allReducers, composeWithDevTools(applyMiddleware(thunk))
  
);

export default store;
