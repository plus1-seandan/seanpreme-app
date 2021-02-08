import { removeFavoriteItem } from "../../utils/favorites";
import FavoritesActionTypes from "./favorites.types";

const INITIAL_STATE = {
  favorites: [],
  isFetching: false,
  errorMessage: undefined,
};

const favoritesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FavoritesActionTypes.REMOVE_FAV_ITEM:
      return {
        ...state,
        favorites: removeFavoriteItem(state.favorites, action.payload),
      };

    case FavoritesActionTypes.FETCH_FAVORITES_START:
      return {
        ...state,
        isFetching: true,
      };
    case FavoritesActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        favorites: action.payload,
      };
    case FavoritesActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default favoritesReducer;
