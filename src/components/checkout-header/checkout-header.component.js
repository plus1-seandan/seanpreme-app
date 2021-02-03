import "./checkout-header.styles.scss";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const CheckoutHeader = () => {
  return (
    <div className="checkout-header">
      <span className="title">SHOPPING BAG</span>
      <div className="continue-shopping">
        <ArrowBackIosIcon fontSize="small" />
        <span>Continue shopping</span>
      </div>
    </div>
  );
};
export default CheckoutHeader;
