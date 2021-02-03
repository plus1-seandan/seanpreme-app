import React from "react";
import CheckoutHeader from "../../components/checkout-header/checkout-header.component";
import CheckoutItems from "../../components/checkout-items/checkout-items.component";
import CheckoutPayment from "../../components/checkout-payment/checkout-payment.component";

import "./checkout.styles.scss";

const CheckoutPage = () => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <CheckoutHeader />
      </div>
      <div className="checkout-body">
        <div className="checkout-items">
          <CheckoutItems />
        </div>
        <div className="checkout-payment">
          <CheckoutPayment />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
