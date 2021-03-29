import { combineReducers } from "redux";
import { userLoginReducer } from "./user/userReducer";
import { postReducer } from "./post/postReducer";

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  post: postReducer,
});

export default rootReducer;
