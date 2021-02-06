import { addRecentlyViewedItem } from "../../utils/recently-viewed";
import { RecentlyViewedTypes } from "./recent.types";

const INIT_STATE = {
  recentItems: [],
};

const recentlyViewedReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case RecentlyViewedTypes.ADD_RECENTLY_VIEWED_ITEM:
      return {
        ...state,
        recentItems: addRecentlyViewedItem(state.recentItems, action.payload),
      };
    case RecentlyViewedTypes.CLEAR_RECENTLY_VIEWED_ITEMS:
      state = INIT_STATE;
      return state;

    default:
      return state;
  }
};

export default recentlyViewedReducer;
