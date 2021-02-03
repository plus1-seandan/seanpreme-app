import React, { useState } from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";
import CustomButton from "../custom-button/custom-button.component";

import "./add-bag-popover.styles.scss";

const AddBagPopover = ({ item, setShowPopover, show, addItem }) => {
  const [size, setSize] = useState();

  const handleAddToBag = () => {
    addItem(item);
    setShowPopover(!show);
  };
  return (
    <div className="collection-item">
      {show && (
        <div className="add-bag-popover">
          <span>select size</span>
          <button
            class="add-bag-button"
            value="s"
            onChange={(e) => setSize(e.target.value)}
          >
            S
          </button>
          <button
            class="add-bag-button"
            value="m"
            onChange={(e) => setSize(e.target.value)}
          >
            M
          </button>
          <button
            class="add-bag-button"
            value="l"
            onChange={(e) => setSize(e.target.value)}
          >
            L
          </button>
          <button
            class="add-bag-button"
            value="xl"
            onChange={(e) => setSize(e.target.value)}
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
});

export default connect(null, mapDispatchToProps)(AddBagPopover);
