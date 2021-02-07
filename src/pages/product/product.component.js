import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import ProductImage from "../../components/product-image/product-image.component";
import ProductInfo from "../../components/product-info/product-info.component";
import { scrollToTop } from "../../utils/scrollToTop";
import "./product.styles.scss";

const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const asyncFunc = async () => {
      const { data } = await axios({
        method: "GET",
        url: `http://localhost:5000/products?id=${productId}`,
      });
      setProduct(data);
      setIsLoading(false);
      scrollToTop();
    };
    asyncFunc();
  }, [productId]);

  if (!product) {
  }
  return (
    <div className="product-page">
      <div className="product-image">
        <ProductImage isLoading={isLoading} product={product} />
      </div>
      <div className="product-info">
        <ProductInfo isLoading={isLoading} product={product} />
      </div>
    </div>
  );
};

export default ProductPage;
