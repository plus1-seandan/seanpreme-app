import { Link } from "@chakra-ui/react";
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import CheckoutItem from "../checkout-item/checkout-item.component";
import CustomButton from "../custom-button/custom-button.component";

import "./checkout-items.styles.scss";

const CheckoutItems = ({ cartItems, total }) => {
  if (cartItems.length === 0) {
    return (
      <div className="success-message">
        <div className="success-message-top">
          <h1>Your shopping bag is empty.</h1>
        </div>
        <div className="success-message-bottom">
          <Link href="/">
            <CustomButton>Continue Shopping</CustomButton>
          </Link>
        </div>
      </div>
    );
  }
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
