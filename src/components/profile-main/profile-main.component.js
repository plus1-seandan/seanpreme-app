import { connect } from "react-redux";
import axios from "axios";
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td } from "@chakra-ui/react";
import { withRouter } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import { logoutUser } from "../../redux/user/user.actions";
import { clearCart } from "../../redux/cart/cart.actions";
import "./profile-main.styles.scss";

const ProfileMain = ({ user, logoutUser, history, clearCart }) => {
  const handleLogout = async () => {
    try {
      history.push("/");
      logoutUser();
      clearCart();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="profile-main">
      <h1 className="greeting">Hello, {user.firstName}</h1>
      <CustomButton onClick={handleLogout}>Logout</CustomButton>
      <p className="description">
        From your dashboard you have the ability to view a snapshot of your
        recent account activity and update your account information. Select a
        link below to view or edit information.
      </p>
      <div className="account-address-info">
        <div className="account-information">
          <h2>ACCOUNT INFORMATION</h2>
          <h3>Contact Information</h3>
          <span>
            Name: {user.firstName} {user.lastName}
          </span>
          <span>Email: {user.email}</span>
        </div>
        <div className="address-book">
          <h2>ADDRESS BOOK</h2>
          <h3>Addresses</h3>
        </div>
      </div>
      <div className="my-orders">
        <h2>My Orders</h2>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Order</Th>
              <Th>Date</Th>
              <Th>Payment Status</Th>
              <Th>Fullfillment Status</Th>
              <Th>Total</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>#61919214</Td>
              <Td>November 3, 2020</Td>
              <Td>Paid</Td>
              <Td>Fullfilled</Td>
              <Td>$85.46 USD</Td>
            </Tr>
          </Tbody>
          <Tfoot></Tfoot>
        </Table>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logoutUser()),
  clearCart: () => dispatch(clearCart()),
});

export default withRouter(connect(null, mapDispatchToProps)(ProfileMain));
