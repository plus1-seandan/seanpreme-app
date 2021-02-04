import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartTotal } from "../../redux/cart/cart.selectors";
import "./checkout-payment.styles.scss";
import CheckoutForm from "../checkout-form/checkout-form.component";

const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_PUB_KEY}`);

const StripeCheckout = ({ total }) => {
  const [status, setStatus] = useState("ready");

  if (status === "success") {
    return <div>Payment Successful! Redirecting to Home</div>;
  }
  if (status === "fail") {
    return <div>Sorry... something went wrong</div>;
  }

  return (
    <div className="checkout-form-body">
      <div className="checkout-total">
        <h1>Total</h1>
        <span>${total}</span>
      </div>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm
            status={status}
            total={total}
            setStatus={(status) => {
              setStatus(status);
            }}
          />
        </Elements>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  total: selectCartTotal,
});

export default connect(mapStateToProps)(StripeCheckout);
