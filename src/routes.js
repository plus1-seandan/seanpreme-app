import { Switch, Route, Redirect } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import LoginRegisterPage from "./pages/login-register/login-register.components";
import { selectCurrentUser } from "./redux/user/user.selectors";
import CheckoutPage from "./pages/checkout/checkout.component";

class Routes extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/collection" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/sign-in"
            render={() =>
              this.props.currUser ? <Redirect to="/" /> : <LoginRegisterPage />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currUser: selectCurrentUser(state),
});
export default connect(mapStateToProps)(Routes);
