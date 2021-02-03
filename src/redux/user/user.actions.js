import { UserActionTypes } from "./user.types";

export const setCurrUser = (user) => ({
  type: UserActionTypes.SET_CURR_USER,
  payload: user,
});
