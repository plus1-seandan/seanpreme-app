import { addItemToCart, removeCartItem } from "../../utils/cart";
import { CartActionTypes } from "./cart.types";

const INIT_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case CartActionTypes.CLEAR_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeCartItem(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
