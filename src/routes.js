import { Switch, Route, Redirect } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import LoginRegisterPage from "./pages/login-register/login-register.components";

class Routes extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/collection" component={ShopPage} />
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

const mapStateToProps = ({ user }) => ({
  currUser: user.currUser,
});
export default connect(mapStateToProps)(Routes);
