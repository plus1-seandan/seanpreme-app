import { useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { connect } from "react-redux";

import { addItem, toggleCartHidden } from "../../redux/cart/cart.actions";
import CustomButton from "../custom-button/custom-button.component";

import "./add-bag-popover.styles.scss";

const AddBagPopover = ({
  item,
  setShowPopover,
  show,
  addItem,
  toggleCartHidden,
}) => {
  const [size, setSize] = useState();
  const toast = useToast();

  const handleAddToBag = () => {
    if (!size) {
      toast({
        title: "An error occurred.",
        description: "Please choose a size",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    addItem({ ...item, size });
    setShowPopover(!show);
    toggleCartHidden();
    toast({
      title: `Added item "${item.itemName}" to cart`,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <div className="collection-item">
      {show && (
        <div className="add-bag-popover">
          <span>select size</span>
          <button
            class="add-bag-button"
            value="s"
            onClick={(e) => setSize(e.target.value)}
          >
            S
          </button>
          <button
            class="add-bag-button"
            value="m"
            onClick={(e) => setSize(e.target.value)}
          >
            M
          </button>
          <button
            class="add-bag-button"
            value="l"
            onClick={(e) => setSize(e.target.value)}
          >
            L
          </button>
          <button
            class="add-bag-button"
            value="xl"
            onClick={(e) => setSize(e.target.value)}
          >
            XL
          </button>
          <CustomButton onClick={handleAddToBag}>ADD TO BAG</CustomButton>
        </div>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(AddBagPopover);
