import { combineReducers } from "redux";
import toast from "./toast";
import auth from "./auth";
import profile from "./profile";
import post from "./post";

export default combineReducers({
  toast,
  auth,
  profile,
  post,
});
