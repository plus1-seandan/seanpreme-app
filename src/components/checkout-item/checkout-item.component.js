import React from "react";
import { connect } from "react-redux";
import { addItem, clearItem, removeItem } from "../../redux/cart/cart.actions";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <div className="name-edit">
        <span className="name">{name}</span>
        <button className="edit">Edit</button>
      </div>
      <div className="quantity-remove">
        <span className="quantity">
          <div className="arrow" onClick={() => removeItem(cartItem)}>
            &#10094;
          </div>
          {quantity}
          <div className="arrow" onClick={() => addItem(cartItem)}>
            &#10095;
          </div>
        </span>
        <button className="remove" onClick={() => clearItem(cartItem)}>
          Remove
        </button>
      </div>
      <div className="price">
        <span className="price">${price * quantity}</span>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItem(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
