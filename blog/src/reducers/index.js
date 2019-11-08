import { combineReducers } from "redux";
import postsReducers from "./postsReducer";

export default combineReducers({
  post: postsReducers
});
