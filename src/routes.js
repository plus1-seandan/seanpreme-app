import { Switch, Route } from "react-router-dom";
import React from "react";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import LoginRegisterPage from "./pages/login-register/login-register.components";

class Routes extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/collection" component={ShopPage} />
          <Route exact path="/sign-in" component={LoginRegisterPage} />
        </Switch>
      </div>
    );
  }
}

export default Routes;
