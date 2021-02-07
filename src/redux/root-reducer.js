import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //localstorage

import cartReducer from "./cart/cart.reducer";
import userReducer from "./user/user.reducer";
import recentlyViewedReducer from "./recently-viewed/recent.reducer";
import favoritesReducer from "./favorites/favorites.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "user", "recent", "favorites"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  recent: recentlyViewedReducer,
  favorites: favoritesReducer,
});

export default persistReducer(persistConfig, rootReducer);
