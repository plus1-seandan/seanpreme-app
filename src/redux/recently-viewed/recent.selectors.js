import { createSelector } from "reselect";

const selectRecent = (state) => state.recent;

export const selectRecentItems = createSelector(
  [selectRecent],
  (recent) => recent.recentItems
);
