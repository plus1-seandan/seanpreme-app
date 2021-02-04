import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import "./checkout-payment.styles.scss";
import CheckoutForm from "../checkout-form/checkout-form.component";

const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_PUB_KEY}`);

const StripeCheckout = () => {
  const [status, setStatus] = useState("ready");

  if (status === "success") {
    return <div>Payment Successful!</div>;
  }

  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm
        status={status}
        setStatus={(status) => {
          setStatus(status);
        }}
      />
    </Elements>
  );
};

export default StripeCheckout;
