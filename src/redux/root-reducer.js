import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //localstorage

import cartReducer from "./cart/cart.reducer";
import userReducer from "./user/user.reducer";
import recentlyViewedReducer from "./recently-viewed/recent.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "user", "recent"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  recent: recentlyViewedReducer,
});

export default persistReducer(persistConfig, rootReducer);
