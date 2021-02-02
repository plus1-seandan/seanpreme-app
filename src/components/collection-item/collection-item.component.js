import React from "react";

import "./collection-item.styles.scss";

const CollectionItem = ({ id, imageUrl, name, price }) => {
  return (
    <div className="collection__item">
      <div className="collection__item__image">
        <img src={imageUrl} />
      </div>
      <div className="collection__item__footer">
        <span className="name">{name}</span>
        <span className="price">${price} USD</span>
        <span className="add">ADD TO BAG</span>
      </div>
    </div>
  );
};

export default CollectionItem;
