import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import { useClickOutside } from "../../utils/clickOutside";
import AddBagPopover from "../add-bag-popover/add-bag-popover.component";

import CustomButton from "../custom-button/custom-button.component";
import "./collection-item.styles.scss";

const CollectionItem = ({ item, addItem }) => {
  const { imageUrl, name, price } = item;
  const [showPopover, setShowPopover] = useState(false);

  let domNode = useClickOutside(() => {
    setShowPopover(false);
  });

  return (
    <div className="collection__item" ref={domNode}>
      <div className="collection__item__image">
        <img src={imageUrl} alt={item.name} />
      </div>
      <div className="collection__item__footer">
        <span className="name">{name}</span>
        <span className="price">${price} USD</span>
        <CustomButton onClick={() => setShowPopover(!showPopover)}>
          ADD TO BAG
        </CustomButton>
        <AddBagPopover
          show={showPopover}
          setShowPopover={setShowPopover}
          item={item}
        />
      </div>
    </div>
  );
};

export default CollectionItem;
