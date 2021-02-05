import { UserActionTypes } from "./user.types";

export const setCurrUser = (user) => ({
  type: UserActionTypes.SET_CURR_USER,
  payload: user,
});

export const logoutUser = () => ({
  type: UserActionTypes.LOGOUT_CURR_USER,
});
