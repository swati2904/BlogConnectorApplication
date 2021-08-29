import api from "../utils/api";
import { addToast } from "./toast";
import {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  USER_LOADED,
  AUTH_FAILED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "./types";

// Load user
export const loadUser = () => async (dispatch) => {
  try {
    const res = await api.get("/auth");
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_FAILED,
    });
  }
};

// user signup

export const signup = (formInput) => async (dispatch) => {
  try {
    const res = await api.post("/users", formInput);

    dispatch({
      type: SIGNUP_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(addToast(error.msg, "danger")));
    }
    dispatch({
      type: SIGNUP_FAIL,
    });
  }
};

// user login

export const login = (email, password) => async (dispatch) => {
  const body = { email, password };

  try {
    const res = await api.post("/auth", body);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(addToast(error.msg, "danger")));
    }
    dispatch({
      type: LOGIN_FAIL,
    });
    //   if(err.response.data && err.response.data.message){
    //     // todo
    //  }else if(err.response.data && err.response.data.errors){
    //     // todo
    //  }
  }
};

// Logout
export const logout = () => ({ type: LOGOUT });
