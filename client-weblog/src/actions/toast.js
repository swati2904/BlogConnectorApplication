import { v4 as uuidv4 } from "uuid";
import { ADD_TOAST, REMOVE_TOAST } from "./types";

export const addToast = (msg, toastType) => (dispatch) => {
  const id = uuidv4();
  dispatch({
    type: ADD_TOAST,
    payload: { msg, toastType, id },
  });

  setTimeout(() => dispatch({ type: REMOVE_TOAST, payload: id }), 5000);
};
