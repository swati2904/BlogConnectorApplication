import { ADD_TOAST, REMOVE_TOAST } from "../actions/types";

export default function toastReducer(state = [], action) {
  const { payload, type } = action;

  switch (type) {
    case ADD_TOAST:
      return [...state, payload];
    case REMOVE_TOAST:
      return state.filter((toast) => toast.id !== payload);
    default:
      return state;
  }
}
