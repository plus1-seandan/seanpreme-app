import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

import "./checkout-form.styles.scss";
import { Button } from "@chakra-ui/react";
import { clearCart } from "../../redux/cart/cart.actions";
import FormInput from "../form-input/form-input.component";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#000",
      color: "#000",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#808080" },
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
      <CardElement options={CARD_OPTIONS} />
      <div className="form-rows">
        <FormInput
          name="email"
          type="email"
          value={customerInfo.email}
          require={true}
          label="email"
          handleChange={(e) =>
            setCustomerInfo({ ...customerInfo, email: e.target.value })
          }
        />
        <div className="name-row">
          <FormInput
            name="firstName"
            type="text"
            value={customerInfo.firstName}
            require={true}
            label="John"
            handleChange={(e) =>
              setCustomerInfo({ ...customerInfo, firstName: e.target.value })
            }
          />
          <FormInput
            name="lastName"
            type="text"
            value={customerInfo.lastName}
            require={true}
            label="Doe"
            handleChange={(e) =>
              setCustomerInfo({ ...customerInfo, lastName: e.target.value })
            }
          />
        </div>

        <FormInput
          name="address1"
          type="text"
          value={customerInfo.address1}
          require={true}
          label="Address 1"
          handleChange={(e) =>
            setCustomerInfo({ ...customerInfo, address1: e.target.value })
          }
        />
        <FormInput
          name="address2"
          type="text"
          value={customerInfo.address2}
          require={true}
          label="Address 2 (optional)"
          handleChange={(e) =>
            setCustomerInfo({ ...customerInfo, address2: e.target.value })
          }
        />
        <div className="city-state-zip-row">
          <FormInput
            name="city"
            type="text"
            value={customerInfo.city}
            require={true}
            label="city"
            handleChange={(e) =>
              setCustomerInfo({ ...customerInfo, city: e.target.value })
            }
          />
          <FormInput
            name="state"
            type="text"
            value={customerInfo.state}
            require={true}
            label="state"
            handleChange={(e) =>
              setCustomerInfo({ ...customerInfo, state: e.target.value })
            }
          />
          <FormInput
            name="zipcode"
            type="text"
            value={customerInfo.zipcode}
            require={true}
            label="Zipcode"
            handleChange={(e) =>
              setCustomerInfo({ ...customerInfo, zipcode: e.target.value })
            }
          />
        </div>
      </div>
      <div className="checkout-button">
        <Button
          isLoading={status === "loading"}
          className="submit"
          type="submit"
          disabled={!stripe}
        >
          Pay
        </Button>
      </div>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart()),
});

export default connect(null, mapDispatchToProps)(CheckoutForm);
