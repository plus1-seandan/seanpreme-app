import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./shop.styles.scss";
import Collection from "../../components/collection/collection.component";

const ShopPage = () => {
  const { collectionId } = useParams();
  const [collection, setCollection] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      axios
        .get(`http://localhost:5000/collections?id=${collectionId}`)
        .then(function (response) {
          // handle success
          setCollection(response.data[0]);
          setLoading(false);
        })
        .catch(function (error) {
          console.log(error);
          setLoading(false);
        });
    }, 1000);
  }, [collectionId]);

  return (
    <div className="shop-page">
      <div className="shop-page-body">
        <div className="collection-filter">COLLECTION FILTER</div>
        <div className="collection-main">
          <Collection isLoading={isLoading} collection={collection} />
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
