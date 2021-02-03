import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import CheckoutItem from "../checkout-item/checkout-item.component";

import "./checkout-items.styles.scss";

const CheckoutItems = ({ cartItems, total }) => {
  return (
    <>
      <div className="items-tabs">
        <div className="item">
          <span>Item</span>
        </div>
        <div className="quantity">
          <span>Quantity</span>
        </div>
        <div className="price">
          <span>Price</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  total: selectCartTotal,
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CheckoutItems);
