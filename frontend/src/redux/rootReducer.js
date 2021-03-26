import { combineReducers } from "redux";
import { userLoginReducer } from "./user/userReducer";

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
});

export default rootReducer;
