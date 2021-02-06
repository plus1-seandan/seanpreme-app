import { RecentlyViewedTypes } from "./recent.types";

export const addRecentlyViewedItem = (item) => ({
  type: RecentlyViewedTypes.ADD_RECENTLY_VIEWED_ITEM,
  payload: item,
});

export const clearRecentlyViewedItems = () => ({
  type: RecentlyViewedTypes.CLEAR_RECENTLY_VIEWED_ITEMS,
});
