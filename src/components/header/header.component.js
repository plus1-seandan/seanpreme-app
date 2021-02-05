import MenuIcon from "@material-ui/icons/Menu";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import SearchIcon from "@material-ui/icons/Search";

import "./header.styles.scss";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import Logo from "../../assets/logo.png";

const Header = ({ currUser, hidden }) => {
  return (
    <div className="header">
      <div className="header__tab">
        <Link to="/collections/1">HATS</Link>
        <Link to="/collections/2">SNEAKERS</Link>
        <Link to="/collections/3">JACKETS</Link>
        <Link to="/collections/4">TOPS</Link>
      </div>
      <div className="header__main">
        <div className="header__main__left">
          <div className="header__main__menu">
            <MenuIcon fontSize="large" />
          </div>
          <Link to="/">
            <div className="header__main__logo">
              <h1 className="logo">SeanPreme</h1>
            </div>
          </Link>
        </div>
        <div className="header__main__center">
          {/* <div className="header__main__search">Search</div> */}
          <form action="#" class="search">
            <input type="text" class="search__input" placeholder="Search..." />
            <button class="search__button">
              <SearchIcon class="search__icon" />
            </button>
          </form>
        </div>
        <div className="header__main__right">
          <div className="header__main__icon">
            <VisibilityIcon fontSize="large" />
          </div>
          <div className="header__main__icon">
            <FavoriteBorderIcon fontSize="large" />
          </div>
          <Link to="/profile">
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

const mapStateToProps = (state) =>
  createStructuredSelector({
    currUser: selectCurrentUser,
    hidden: selectCartHidden,
  });

export default connect(mapStateToProps)(withRouter(Header));
