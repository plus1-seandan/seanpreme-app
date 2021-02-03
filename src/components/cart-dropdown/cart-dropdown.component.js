import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { useClickOutside } from "../../utils/clickOutside";
import { selectCartItems } from "../../redux/cart/cart.selectors";

const Cart = ({ cartItems, toggleCartHidden, history, dispatch }) => {
  let domNode = useClickOutside(() => {
    toggleCartHidden();
  });

  return (
    <div className="cart-dropdown" ref={domNode}>
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          toggleCartHidden();
          history.push("/checkout");
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart));
