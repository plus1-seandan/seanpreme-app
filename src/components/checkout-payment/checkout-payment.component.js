import axios from "axios";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import dotenv from "dotenv";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { useRef, useState } from "react";
import "./checkout-payment.styles.scss";
import StripeCheckout from "../stripe-checkout/stripe-checkout.component";

const INIT_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  address1: "",
  address2: "",
  city: "",
  country: "",
  state: "",
  zip: "",
  phone: "",
};

const CheckoutPayment = ({ total, cartItems }) => {
  const [address, setAddresss] = useState(INIT_STATE);
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef();
  const finalRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddresss({ ...address, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // onOpen();
  };
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
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="checkout-payment">
      <StripeCheckout />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  total: selectCartTotal,
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CheckoutPayment);

// <div className="checkout-info">
//   <span className="email"></span>
//   <form onSubmit={handleSubmit}>
//     <div className="shipping-info">
//       <h2 className="email-title">Contact Information</h2>
//       <div className="email-container">
//         <FormInput
//           name="email"
//           type="email"
//           value={address.email}
//           require
//           label="email"
//           handleChange={handleChange}
//         />
//       </div>
//       <h2 className="shipping-title">Shipping Address</h2>
//       <div className="name-container">
//         <FormInput
//           name="firstName"
//           type="text"
//           value={address.firstName}
//           require
//           label="first name"
//           handleChange={handleChange}
//         />
//         <FormInput
//           name="lastName"
//           type="text"
//           value={address.lastName}
//           require
//           label="last name"
//           handleChange={handleChange}
//         />
//       </div>
//       <div className="city-addresss-container">
//         <FormInput
//           name="address1"
//           type="text"
//           value={address.address1}
//           require
//           label="Address 1"
//           handleChange={handleChange}
//         />
//         <FormInput
//           name="address2"
//           type="text"
//           value={address.address2}
//           require
//           label="Address 2"
//           handleChange={handleChange}
//         />
//         <FormInput
//           name="city"
//           type="text"
//           value={address.city}
//           require
//           label="City"
//           handleChange={handleChange}
//         />
//       </div>
//       <div className="city-country-zip-container">
//         <FormInput
//           name="country"
//           type="text"
//           value={address.country}
//           require
//           label="Country"
//           handleChange={handleChange}
//         />
//         <FormInput
//           name="state"
//           type="text"
//           value={address.state}
//           require
//           label="State"
//           handleChange={handleChange}
//         />
//         <FormInput
//           name="zip"
//           type="text"
//           value={address.zip}
//           require
//           label="Zipcode"
//           handleChange={handleChange}
//         />
//       </div>
//       <div className="phone-container">
//         <FormInput
//           name="phone"
//           type="text"
//           value={address.phone}
//           require={true}
//           label="Phone"
//           handleChange={handleChange}
//         />
//       </div>
//       <div className="payment-button">
//         <StripeCheckout
//           stripeKey={process.env.REACT_APP_STRIPE_PUB_KEY}
//           token={makePayment}
//           name="Buy Now"
//           amount={total}
//         >
//           <CustomButton>Buy Now</CustomButton>
//         </StripeCheckout>
//       </div>
//     </div>
//   </form>
// </div>;
