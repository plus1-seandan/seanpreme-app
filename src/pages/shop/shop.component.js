import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./shop.styles.scss";
import Collection from "../../components/collection/collection.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import CollectionFilter from "../../components/collection-filter/collection-filter.component";
import ScrollToTopButton from "../../components/scroll-to-top-button/scroll-to-top.component";

const INIT_STATE = {
  collection: null,
  items: [],
};

const ShopPage = () => {
  const { collectionId } = useParams();
  const [collection, setCollection] = useState(INIT_STATE);
  const [isLoading, setLoading] = useState(true);
  //setting tha initial page
  const [page, setPage] = useState(0);
  //we need to know if there is more data
  const [HasMore, setHasMore] = useState(true);

  useEffect(() => {
    setCollection(INIT_STATE);
    setPage(0);
    setHasMore(true);
  }, [collectionId]);

  useEffect(() => {
    if (collection.items.length === 0) {
      loadMoreItems();
    }
  }, [collection]);

  async function loadMoreItems() {
    setLoading(true);
    setTimeout(async () => {
      const { data } = await axios({
        method: "GET",
        url: `http://localhost:5000/collections?id=${collectionId}`,
        params: { _page: page, _limit: 12, _collectionId: collectionId },
      });
      setCollection({
        collection: data.collection,
        items: [...collection.items, ...data.items.items],
      });
      setPage((prevPageNumber) => prevPageNumber + 1);
      setHasMore(data.items.items.length > 0);
      setLoading(false);
    }, 1000);
  }

  return (
    <div className="shop-page">
      <div className="shop-page-body">
        <div className="collection-filter">
          <CollectionFilter />
        </div>
        <div className="collection-main">
          <Collection isLoading={isLoading} collection={collection} />
          {!isLoading && HasMore && (
            <div className="load-more-button">
              <CustomButton onClick={loadMoreItems}>Load more</CustomButton>
            </div>
          )}
          <div className="scroll-to-top-button">
            <ScrollToTopButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
