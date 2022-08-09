import { combineReducers } from "redux";
import counterReducer from "../reducers/index";

const reducers = combineReducers({
  counter: counterReducer,
});

export default reducers;
