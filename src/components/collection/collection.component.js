import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import CollectionItem from "../collection-item/collection-item.component";
import "./collection.styles.scss";
import { useState } from "react";
import { Select } from "@chakra-ui/react";
import LoadingSpinner from "../loading-spinner/loading-spinner.component";

const Collection = ({ isLoading, collection }) => {
  return (
    <div className="collection">
      <h1 className="collection__title">
        Some dynamic title
        {/* {collection.collectionName.toUpperCase()} */}
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
        {collection
          // .filter((item, idx) => idx < 12)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
        {isLoading ? <div>loading...</div> : null}
      </div>
    </div>
  );
};

export default Collection;
