import MenuIcon from "@material-ui/icons/Menu";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";

import "./header.styles.scss";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = ({ currUser, hidden }) => {
  return (
    <div className="header">
      <div className="header__tab">
        <a href="/#">WOMEN</a>
        <a href="/#">CURVE</a>
        <a href="/#">MEN</a>
        <a href="/#">KIDS</a>
        <a href="/#">BEAUTY</a>
      </div>
      <div className="header__main">
        <div className="header__main__left">
          <div className="header__main__menu">
            <MenuIcon fontSize="large" />
          </div>
          <Link to="/">
            <div className="header__main__logo">Logo </div>
          </Link>
        </div>
        <div className="header__main__center">
          <div className="header__main__search">Search</div>
        </div>
        <div className="header__main__right">
          <div className="header__main__icon">
            <VisibilityIcon fontSize="large" />
          </div>
          <div className="header__main__icon">
            <FavoriteBorderIcon fontSize="large" />
          </div>
          <Link to="/sign-in">
            {currUser ? (
              <div className="header__main__icon">{currUser.firstName}</div>
            ) : (
              <div className="header__main__icon">
                <PersonOutlineIcon fontSize="large" />
              </div>
            )}
          </Link>
          <div className="header__main__icon">
            <CartIcon />
          </div>
        </div>
        {!hidden && <CartDropdown />}
      </div>
    </div>
  );
};

const mapStateToProps = ({ user: { currUser }, cart: { hidden } }) => {
  return {
    currUser,
    hidden,
  };
};

export default connect(mapStateToProps)(withRouter(Header));
