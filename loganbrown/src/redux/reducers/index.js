import { combineReducers } from "redux";
import educationReducer from "./educationReducer";

export default combineReducers({
  education: educationReducer
});
