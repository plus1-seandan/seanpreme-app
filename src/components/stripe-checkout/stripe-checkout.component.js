import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";

import "./stripe-checkout.styles.scss";
import { Button } from "@chakra-ui/react";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
  },
};

const CheckoutForm = ({ status, setStatus }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      const { id } = paymentMethod;
      try {
        const { data } = await axios.post("http://localhost:5000/payments", {
          id,
          amount: 1099,
        });
        console.log(data);
        setStatus("success");
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log(error);
      setStatus("fail");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <fieldset className="FormGroup">
        <div className="FormRow">
          <CardElement options={CARD_OPTIONS} />
        </div>
        <div className="FormRow">
          <div className="input-field">
            <input type="email" id="email" name="email" placeholder="email" />
            <label for="email">email</label>
          </div>
        </div>
        <div className="FormRow">
          <div className="input-field">
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
            />
            <label for="firstName">First Name</label>
          </div>
        </div>
        <div className="FormRow">
          <div className="input-field">
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
            />
            <label for="lastName">Last Name</label>
          </div>
        </div>
        <div className="FormRow">
          <div className="input-field">
            <input
              type="text"
              id="address1"
              name="address1"
              placeholder="Address 1"
            />
            <label for="address1">Address 1</label>
          </div>
        </div>
        <div className="FormRow">
          <div className="input-field">
            <input
              type="text"
              id="address2"
              name="address2"
              placeholder="Address 2 (Optional)"
            />
            <label for="address2">Address 2</label>
          </div>
        </div>
        <div className="FormRow">
          <div className="input-field">
            <input type="text" id="city" name="city" placeholder="City" />
            <label for="city">City</label>
          </div>
        </div>
        <div className="FormRow">
          <div className="input-field">
            <input type="text" id="state" name="state" placeholder="State" />
            <label for="state">State</label>
          </div>
          <div className="input-field">
            <input type="text" id="zip" name="zip" placeholder="Zipcode" />
            <label for="zip">Zipcode</label>
          </div>
        </div>
        <Button
          isLoading={status === "loading"}
          className="submit"
          type="submit"
          disabled={!stripe}
        >
          Pay
        </Button>
      </fieldset>
    </form>
  );
};

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
