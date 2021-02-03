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
    default:
      return state;
  }
};

export default userReducer;
