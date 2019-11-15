import { SIGN_IN, SIGN_OUT } from "../actions/types";

export default (state = { isSignedIn: null }, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true };
    case SIGN_OUT:
      return { ...state, isSignedIn: false };
    default:
      return state;
  }
};
