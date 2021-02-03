import MenuIcon from "@material-ui/icons/Menu";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { withRouter, Link } from "react-router-dom";

import "./header.styles.scss";

const Header = () => {
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
          <div className="header__main__logo">Logo </div>
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
            <div className="header__main__icon">
              <PersonOutlineIcon fontSize="large" />
            </div>
          </Link>
          <div className="header__main__icon">
            <LocalMallIcon fontSize="large" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Header);
