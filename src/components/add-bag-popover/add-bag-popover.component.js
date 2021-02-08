import { useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { connect } from "react-redux";

import { addItem, toggleCartHidden } from "../../redux/cart/cart.actions";
import { SizeTypes } from "../../utils/size";
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
    setSize(null);
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
            className="add-bag-button"
            value={SizeTypes.S}
            onClick={(e) => setSize(e.target.value)}
          >
            S
          </button>
          <button
            className="add-bag-button"
            value={SizeTypes.M}
            onClick={(e) => setSize(e.target.value)}
          >
            M
          </button>
          <button
            className="add-bag-button"
            value={SizeTypes.L}
            onClick={(e) => setSize(e.target.value)}
          >
            L
          </button>
          <button
            className="add-bag-button"
            value={SizeTypes.XL}
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
