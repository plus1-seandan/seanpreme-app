import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import ClearIcon from "@material-ui/icons/Clear";

import { addRecentlyViewedItem } from "../../redux/recently-viewed/recent.actions";
import { useClickOutside } from "../../utils/clickOutside";
import AddBagPopover from "../add-bag-popover/add-bag-popover.component";
import CustomButton from "../custom-button/custom-button.component";
import "./collection-item.styles.scss";
import { Button } from "@chakra-ui/react";
import axios from "axios";

const CollectionItemWrapper = (WrappedComponent) => {
  const collectionItem = ({ hasDelete, item, ...otherProps }) => {
    const handleRemoveItem = async () => {
      await axios({
        method: "delete",
        url: `http://localhost:5000/products/favorites`,
        data: item,
        withCredentials: "include",
      });
    };
    if (hasDelete) {
      return (
        <div className="collection-item-delete-container">
          <Button
            className="collection-item-deelte-button"
            onClick={handleRemoveItem}
          >
            <ClearIcon />
          </Button>
          <WrappedComponent item={item} {...otherProps} />
        </div>
      );
    }
    return <WrappedComponent item={item} {...otherProps} />;
  };
  return collectionItem;
};

const CollectionItem = ({ item, addRecentItem }) => {
  const { imageUrl, itemName, price } = item;
  const [showPopover, setShowPopover] = useState(false);
  const history = useHistory();

  console.log({ item });

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
        {/* <div className="favorite-button-container">
          <button className="favorite-button">
            <FavoriteBorderIcon />
          </button>
        </div> */}
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

export default CollectionItemWrapper(
  connect(null, mapDispatchToProps)(CollectionItem)
);
