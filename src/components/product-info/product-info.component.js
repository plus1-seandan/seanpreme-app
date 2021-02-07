import { Box, Center, useToast, Wrap, WrapItem } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { connect } from "react-redux";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import CustomButton from "../custom-button/custom-button.component";
import LoadingSpinner from "../loading-spinner/loading-spinner.component";
import { useState } from "react";
import {
  addItem,
  editItem,
  toggleCartHidden,
} from "../../redux/cart/cart.actions";
import "./product-info.styles.scss";
import { isAuthenticated } from "../../utils/auth";
import axios from "axios";

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

const Sizes = ({ size, setSize }) => {
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

const ProductInfo = ({
  product,
  addItem,
  editItem,
  toggleCartHidden,
  edit,
  initSize,
}) => {
  //size is null unless it's being edited from cart
  const [size, setSize] = useState(initSize?.toUpperCase());
  const toast = useToast();

  const handleAddToCart = () => {
    if (size === null) {
      toast({
        title: "An error occurred.",
        description: "Please choose a size",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    addItem({ ...product, size });
    toggleCartHidden();
    setSize(null);
  };

  const handleEditCart = () => {
    //size hasn't changed
    if (initSize === size) {
      return;
    }
    editItem({
      oldItem: { ...product, size: initSize.toUpperCase() },
      newItem: { ...product, size: size.toUpperCase() },
    });
  };
  const handleAddToFavorites = async () => {
    try {
      const isAuth = await isAuthenticated();
      if (!isAuth) {
        toast({
          title: "Please log in to add to favorites",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
        return;
      }
      await axios.post(
        `http://localhost:5000/products/favorites`,
        {
          productId: product.id,
        },
        { withCredentials: "include" }
      );
      toast({
        title: `Added "${product.itemName}" to your favorites`,
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      return;
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="product-info-container">
      <h1 className="product-name">{product.itemName}</h1>
      <div className="product-rating">
        <Rating stars={4} />
      </div>
      <h2 className="product-price">${product.price} USD</h2>
      <div className="product-size">
        <Sizes size={size} setSize={setSize} />
      </div>
      <div className="product-buttons">
        {edit ? (
          <CustomButton onClick={handleEditCart}>Edit Cart</CustomButton>
        ) : (
          <CustomButton onClick={handleAddToCart}>ADD TO BAG</CustomButton>
        )}
        <CustomButton
          onClick={handleAddToFavorites}
          inverted
          className="favorite-button"
        >
          <FavoriteBorderIcon className="favorite-icon" fontSize="large" />
        </CustomButton>
      </div>
      <div className="product-details">
        <h2>PRODUCT DETAILS</h2>
        <p className="product-details-text">{product.description}</p>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  editItem: (item) => dispatch(editItem(item)),
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(LoadingSpinner(ProductInfo));
