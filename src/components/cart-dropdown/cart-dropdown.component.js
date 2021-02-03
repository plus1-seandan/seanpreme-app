import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";

import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { useClickOutside } from "../../utils/clickOutside";
import { selectCartItems } from "../../redux/cart/cart.selectors";

const Cart = ({ cartItems, toggleCartHidden }) => {
  let domNode = useClickOutside(() => {
    toggleCartHidden();
  });

  return (
    <div className="cart-dropdown" ref={domNode}>
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
