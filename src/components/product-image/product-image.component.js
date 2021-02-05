import LoadingSpinner from "../loading-spinner/loading-spinner.component";
import "./product-image.styles.scss";

const ProductImage = ({ product }) => {
  return (
    <div className="product-image-container">
      <img src={product.imageUrl} alt="product image"></img>
    </div>
  );
};
export default LoadingSpinner(ProductImage);
