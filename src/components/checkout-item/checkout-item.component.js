import React from "react";
import { connect } from "react-redux";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

import { addItem, clearItem, removeItem } from "../../redux/cart/cart.actions";
import ProductInfo from "../product-info/product-info.component";
import ProductImage from "../product-image/product-image.component";

import "./checkout-item.styles.scss";

const EditCartItemModal = ({ item, isOpen, onClose, initSize }) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalCloseButton />
      <ModalBody>
        <div className="checkout-item-modal-container">
          <div>
            <ProductImage product={item} />
          </div>
          <div>
            <ProductInfo product={item} edit={true} initSize={initSize} />
          </div>
        </div>
      </ModalBody>

      <ModalFooter>
        <Button colorScheme="blue" mr={3} onClick={onClose}>
          Close
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
);

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { itemName, imageUrl, price, quantity, size } = cartItem;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <div className="name-edit">
        <span className="name">{itemName}</span>
        <div className="size">
          <span className="size">{size}</span>
        </div>
        <button className="edit" onClick={onOpen}>
          Edit
        </button>
        <EditCartItemModal
          item={cartItem}
          isOpen={isOpen}
          onClose={onClose}
          initSize={size}
        />
      </div>
      <div className="quantity-remove">
        <span className="quantity">
          <div
            className="arrow"
            onClick={() => removeItem({ ...cartItem, size })}
          >
            &#10094;
          </div>
          {quantity}
          <div className="arrow" onClick={() => addItem({ ...cartItem, size })}>
            &#10095;
          </div>
        </span>
        <button
          className="remove"
          onClick={() => clearItem({ ...cartItem, size })}
        >
          Remove
        </button>
      </div>
      <div className="price">
        <span className="price">${price * quantity}</span>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItem(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
