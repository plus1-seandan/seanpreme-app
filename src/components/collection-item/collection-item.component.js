import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";

import { addRecentlyViewedItem } from "../../redux/recently-viewed/recent.actions";
import { useClickOutside } from "../../utils/clickOutside";
import AddBagPopover from "../add-bag-popover/add-bag-popover.component";
import CustomButton from "../custom-button/custom-button.component";
import "./collection-item.styles.scss";

const CollectionItem = ({ item, addRecentItem }) => {
  const { imageUrl, itemName, price } = item;
  const [showPopover, setShowPopover] = useState(false);
  const history = useHistory();

  let domNode = useClickOutside(() => {
    setShowPopover(false);
  });

  const handleClick = () => {
    addRecentItem(item);
    history.push(`/products/${item.id}`);
  };
  return (
    <div className="collection__item" ref={domNode}>
      <div className="collection__item__image">
        <button onClick={handleClick}>
          <img src={imageUrl} alt={item.itemName} />
        </button>
      </div>
      <div className="collection__item__footer">
        <span className="name">{itemName}</span>
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

const mapDispatchToProps = (dispatch) => ({
  addRecentItem: (item) => dispatch(addRecentlyViewedItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
