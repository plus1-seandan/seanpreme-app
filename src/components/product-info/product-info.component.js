import { Box, Center, Wrap, WrapItem } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";
import "./product-info.styles.scss";
import LoadingSpinner from "../loading-spinner/loading-spinner.component";
import { useState } from "react";
import { addItem, toggleCartHidden } from "../../redux/cart/cart.actions";

const Rating = ({ stars }) => (
  <Box d="flex" mt="2" alignItems="center">
    {Array(5)
      .fill("")
      .map((_, i) => (
        <StarIcon key={i} color={i < stars ? "teal.500" : "gray.300"} />
      ))}
    <Box as="span" ml="2" color="gray.600" fontSize="sm">
      30 reviews
    </Box>
  </Box>
);

const SizeButton = ({ selected, size, ...otherProps }) => {
  if (selected) {
    return (
      <span className="size-button-selected" {...otherProps}>
        {size}
      </span>
    );
  } else {
    return <span {...otherProps}>{size}</span>;
  }
};

const Sizes = () => {
  const [size, setSize] = useState();

  return (
    <Wrap className="product-info-sizes">
      <WrapItem>
        <Center w="50px" h="40px">
          <SizeButton
            onClick={() => setSize("S")}
            selected={size === "S"}
            size="S"
          />
        </Center>
      </WrapItem>
      <WrapItem>
        <Center w="50px" h="40px">
          <SizeButton
            onClick={() => setSize("M")}
            selected={size === "M"}
            size="M"
          />
        </Center>
      </WrapItem>
      <WrapItem>
        <Center w="50px" h="40px">
          <SizeButton
            onClick={() => setSize("L")}
            selected={size === "L"}
            size="L"
          />
        </Center>
      </WrapItem>
      <WrapItem>
        <Center w="50px" h="40px">
          <SizeButton
            onClick={() => setSize("XL")}
            selected={size === "XL"}
            size="XL"
          />
        </Center>
      </WrapItem>
    </Wrap>
  );
};

const ProductInfo = ({ product, addItem, toggleCartHidden }) => {
  const handleAddToCart = () => {
    console.log("hit this line");
    addItem(product);
    toggleCartHidden();
  };

  return (
    <div className="product-info-container">
      <h1 className="product-name">{product.itemName}</h1>
      <div className="product-rating">
        <Rating stars={4} />
      </div>
      <h2 className="product-price">${product.price} USD</h2>
      <div className="product-size">
        <Sizes />
      </div>
      <CustomButton onClick={handleAddToCart}>ADD TO BAG</CustomButton>
      <div className="product-details">
        <h2>PRODUCT DETAILS</h2>
        <p className="product-details-text">{product.description}</p>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(LoadingSpinner(ProductInfo));
