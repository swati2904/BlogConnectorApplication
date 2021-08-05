import axios from "axios";
import { GET_PROFILE, PROFILE_ERROR } from "./types";
import { addToast } from "./toast";

//get user profile

export const getCurrentProfile = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/profile/me");
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// Create /update profile

export const createProfile = (formInput, history, edit = false) => async (
  dispatch
) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    // const body = JSON.stringify({ formInput, history, edit });

    const res = await axios.post("/api/profile", formInput, config);
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });

    dispatch(addToast(edit ? "profile updated" : "profile created", "success"));

    if (!edit) {
      history.push("/admin-profile");
    }
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(addToast(error.msg, "danger")));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};
