import { createSelector } from "reselect";

const selectFavs = (state) => state.favorites;

export const selectIsFavoritesFetching = createSelector(
  [selectFavs],
  (favorites) => favorites.isFetching
);

export const selectFavorites = createSelector(
  [selectFavs],
  (favorites) => favorites.favorites
);
