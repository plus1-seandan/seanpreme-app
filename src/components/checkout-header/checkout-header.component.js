import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import "./checkout-header.styles.scss";

const CheckoutHeader = () => {
  return (
    <div className="checkout-header">
      <span className="title">SHOPPING BAG</span>
      <div className="continue-shopping">
        <ArrowBackIosIcon fontSize="small" />
        <Link to="/">
          <span>Continue shopping</span>
        </Link>
      </div>
    </div>
  );
};
export default CheckoutHeader;
