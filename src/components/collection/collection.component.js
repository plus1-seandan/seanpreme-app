import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import CollectionItem from "../collection-item/collection-item.component";
import "./collection.styles.scss";
import { useState } from "react";

const Collection = () => {
  const { collectionId } = useParams();
  const [items, setItems] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/collections/:${collectionId}`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [collectionId]);

  if (items) {
    console.log({ items });
  }
  return (
    <div className="collection">
      {/* <h1 className="collection__title">{title.toUpperCase()}</h1>
      <div className="collection__header">
        <span>372 results</span>
        <div className="collection__header__filter">
          <Select placeholder="Select option">
            <option value="option1">FEATURED</option>
            <option value="option2">BESTSELLERS</option>
            <option value="option3">NEWEST ARRIVALS</option>
            <option value="option3">PRICE LOW - HIGH</option>
          </Select>
        </div>
      </div>
      <div className="collection__items">
        {items
          .filter((item, idx) => idx < 12)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div> */}
    </div>
  );
};

export default Collection;
