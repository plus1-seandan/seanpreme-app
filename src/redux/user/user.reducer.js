import { UserActionTypes } from "./user.types";

const INIT_STATE = {
  currUser: null,
};

const userReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURR_USER:
      return {
        ...state,
        currUser: action.payload,
      };
    case UserActionTypes.LOGOUT_CURR_USER:
      state = INIT_STATE;
      return state;
    default:
      return state;
  }
};

export default userReducer;
