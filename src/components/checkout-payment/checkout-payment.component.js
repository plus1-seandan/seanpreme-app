import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import dotenv from "dotenv";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import CustomButton from "../custom-button/custom-button.component";
const CheckoutPayment = ({ total, cartItems }) => {
  console.log({ key: process.env.REACT_APP_STRIPE_PUB_KEY });
  const makePayment = async (token) => {
    try {
      const body = {
        token,
        items: cartItems,
        total,
      };
      const headers = {
        "Content-Type": "application/json",
      };
      const res = await fetch(`http://localhost:5000/payments`, {
        method: "POST",
        headers,
        body: JSON.stringify(body),
      });
      console.log(res);
      console.log({ status: res.status });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <StripeCheckout
        stripeKey={process.env.REACT_APP_STRIPE_PUB_KEY}
        token={makePayment}
        name="Buy Now"
        amount={total}
      >
        <CustomButton>Buy Now</CustomButton>
      </StripeCheckout>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  total: selectCartTotal,
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CheckoutPayment);
