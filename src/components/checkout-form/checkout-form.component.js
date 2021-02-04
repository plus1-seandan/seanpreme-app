import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

import "./checkout-form.styles.scss";
import { Button } from "@chakra-ui/react";
import { clearCart } from "../../redux/cart/cart.actions";

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

const INIT_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  address1: "",
  address2: "",
  city: "",
  state: "",
  zipcode: "",
};

const CheckoutForm = ({ status, setStatus, total, clearCart }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [customerInfo, setCustomerInfo] = useState(INIT_STATE);
  const history = useHistory();

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
          amount: total,
          customer: customerInfo,
        });
        setStatus("success");
        clearCart();
        //clear cart and redirect to home page
        setTimeout(() => {
          history.push("/");
        }, 2000);
      } catch (error) {
        console.log(error);
        setStatus("fail");
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
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email"
              required
              onChange={(e) =>
                setCustomerInfo({ ...customerInfo, email: e.target.value })
              }
            />
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
              onChange={(e) =>
                setCustomerInfo({ ...customerInfo, firstName: e.target.value })
              }
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
              onChange={(e) =>
                setCustomerInfo({ ...customerInfo, lastName: e.target.value })
              }
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
              required
              onChange={(e) =>
                setCustomerInfo({ ...customerInfo, address1: e.target.value })
              }
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
              onChange={(e) =>
                setCustomerInfo({ ...customerInfo, address2: e.target.value })
              }
            />
            <label for="address2">Address 2</label>
          </div>
        </div>
        <div className="FormRow">
          <div className="input-field">
            <input
              type="text"
              id="city"
              name="city"
              placeholder="City"
              required
              onChange={(e) =>
                setCustomerInfo({ ...customerInfo, city: e.target.value })
              }
            />
            <label for="city">City</label>
          </div>
        </div>
        <div className="FormRow">
          <div className="input-field">
            <input
              type="text"
              id="state"
              name="state"
              placeholder="State"
              required
              onChange={(e) =>
                setCustomerInfo({ ...customerInfo, state: e.target.value })
              }
            />
            <label for="state">State</label>
          </div>
          <div className="input-field">
            <input
              type="text"
              id="zip"
              name="zip"
              placeholder="Zipcode"
              required
              onChange={(e) =>
                setCustomerInfo({ ...customerInfo, zipcode: e.target.value })
              }
            />
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

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart()),
});

export default connect(null, mapDispatchToProps)(CheckoutForm);
