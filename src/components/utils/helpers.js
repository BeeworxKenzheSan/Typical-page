import { ACTION_TYPES } from "./constanst";

export const passwordReducer = (state, action) => {
  if (action.type === ACTION_TYPES.PASSWORD_IS_VALID) {
    return {
      ...state,
      password: action.payload,
    };
  }
  if (action.type === ACTION_TYPES.PASSWORD_IS_VALID) {
    return {
      ...state,
      passwordIsValid: state.password.trim().length > 6,
    };
  }
  return state;
};

export const emailReducer = (state, action) => {
  if (action.type === ACTION_TYPES.EMAIL_VALUE_HANDLE) {
    return {
      ...state,
      email: action.payload,
    };
  }
  if (action.type === ACTION_TYPES.EMAIL_IS_VALID) {
    return {
      ...state,
      emailIsValid: state.email.includes("@"),
    };
  }
  return state;
};
