import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import LoginRegisterPage from "./pages/login-register/login-register.components";
import { selectCurrentUser } from "./redux/user/user.selectors";
import CheckoutPage from "./pages/checkout/checkout.component";
import ProfilePage from "./pages/profile/profile.component";
import Footer from "./components/footer/footer.component";
import ProductPage from "./pages/product/product.component";
import RecentlyViewedPage from "./pages/recently-viewed/recently-viewed.component";
import FavoritesPage from "./pages/favorites/favorites.component";

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (user?.token) {
          return <Component {...rest} {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/sign-in",
              }}
            />
          );
        }
      }}
    />
  );
};

class Routes extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route path="/collections/:collectionId" component={ShopPage} />
          <Route path="/products/:productId" component={ProductPage} />
          <PrivateRoute
            path="/profile"
            exact
            user={this.props.currUser}
            component={ProfilePage}
          />
          <Route exact path="/sign-in" component={LoginRegisterPage} />
          <Route exact path="/recently-viewed" component={RecentlyViewedPage} />
          <Route exact path="/favorites" component={FavoritesPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currUser: selectCurrentUser(state),
});
export default connect(mapStateToProps)(Routes);
