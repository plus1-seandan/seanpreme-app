import React from "react";

import CollectionItem from "../collection-item/collection-item.component";
import "./collection.styles.scss";
import { Select, Spinner } from "@chakra-ui/react";

const Collection = ({ isLoading, collection }) => {
  if (!collection || !collection.collection) {
    return (
      <div className="load-items-spinner">
        <span>loading...</span>
        <Spinner size="xl" />
      </div>
    );
  }
  return (
    <div className="collection">
      <h1 className="collection__title">
        {collection.collection.collectionName.toUpperCase()}
      </h1>
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
        {collection.items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
      {isLoading && (
        <div className="load-more-spinner">
          <Spinner size="xl" />
        </div>
      )}
    </div>
  );
};

export default Collection;
