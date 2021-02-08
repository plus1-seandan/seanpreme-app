import axios from "axios";

import FavoritesActionTypes from "./favorites.types";

export const removeFavItem = (item) => ({
  type: FavoritesActionTypes.REMOVE_FAV_ITEM,
  payload: item,
});

export const fetchFavoritesStart = () => ({
  type: FavoritesActionTypes.FETCH_FAVORITES_START,
});
export const fetchFavoritesSuccess = (favorites) => ({
  type: FavoritesActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: favorites,
});

export const fetchFavoritesFailure = (errMsg) => ({
  type: FavoritesActionTypes.fetchFavoritesFailure,
  payload: errMsg,
});

export const fetchFavoritesStartAsync = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchFavoritesStart);
      const { data } = await axios({
        method: "get", //you can set what request you want to be
        url: `${process.env.REACT_APP_SERVER_URL}/products/favorites`,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      // const { data } = await axios.get(
      //   "http://localhost:5000/products/favorites",
      //   {
      //     withCredentials: "include",
      //   }
      // );
      dispatch(fetchFavoritesSuccess(data));
    } catch (e) {
      console.log(e);
      dispatch(fetchFavoritesFailure(e.message));
    }
  };
};
