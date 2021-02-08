import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useHistory } from "react-router-dom";

import { selectCartTotal } from "../../redux/cart/cart.selectors";
import CheckoutForm from "../checkout-form/checkout-form.component";
import CustomButton from "../custom-button/custom-button.component";
import "./checkout-payment.styles.scss";

const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_PUB_KEY}`);

const SuccessMessage = ({ handleClick }) => (
  <div className="success-message">
    <div className="success-message-top">
      <h1>Awesome!</h1>
      <p>We have successfully received your payment</p>
      <p>Please check your email for confirmation</p>
    </div>
    <div className="success-message-bottom">
      <CustomButton onClick={handleClick}>Continue Shopping</CustomButton>
    </div>
  </div>
);

const ErrorMessage = ({ handleClick }) => (
  <div className="error-message">
    <div className="error-message-top">
      <h1>Oops!</h1>
      <p>Something went wrong...</p>
      <p>Please try again. We are sorry for the inconvenience</p>
    </div>
    <div className="error-message-bottom">
      <CustomButton onClick={handleClick}>Try Again</CustomButton>
    </div>
  </div>
);

const StripeCheckout = ({ total }) => {
  const [status, setStatus] = useState("ready");
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };

  if (status === "success") {
    return (
      <div className="payment-success">
        <SuccessMessage handleClick={handleClick} />
      </div>
    );
  }
  if (status === "fail") {
    return <ErrorMessage handleClick={() => setStatus("ready")} />;
  }

  return (
    <div className="checkout-form-body">
      <div className="checkout-total">
        <div className="checkout-total-header">
          <div className="total">
            <h1>Total</h1> <span>${total}</span>
          </div>
          <div className="notes">
            <p>*** Card #: 4242 4242 4242 4242 MM/YY: 12/21 ZIP: 12345 ***</p>
          </div>
        </div>
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
