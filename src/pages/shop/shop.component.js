import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./shop.styles.scss";
import Collection from "../../components/collection/collection.component";

const ShopPage = () => {
  const { collectionId } = useParams();
  const [collection, setCollection] = useState([]);
  const [isLoading, setLoading] = useState(true);
  //setting tha initial page
  const [page, setPage] = useState(0);
  //we need to know if there is more data
  const [HasMore, setHasMore] = useState(true);

  useEffect(() => {
    setCollection([]);
    setPage(0);
    setHasMore(true);
  }, [collectionId]);

  useEffect(() => {
    if (collection.length === 0) {
      loadMoreItems();
    }
  }, [collection]);

  async function loadMoreItems() {
    setLoading(true);
    const { data } = await axios({
      method: "GET",
      url: `http://localhost:5000/collections?id=${collectionId}`,
      params: { _page: page, _limit: 12, _collectionId: collectionId },
    });
    // console.log(res.data);
    // setCollection([...collection, ...data.response.items]);
    setCollection([...collection, ...data.response.items]);

    // setCollection((prevItems) => {
    //   return [...new Set([...prevItems, ...res.data.map((b) => b.title)])];
    // });
    // console.log(res);
    setPage((prevPageNumber) => prevPageNumber + 1);
    setHasMore(data.response.items.length > 0);
    setLoading(false);
  }

  return (
    <div className="shop-page">
      <div className="shop-page-body">
        <div className="collection-filter">COLLECTION FILTER</div>
        <div className="collection-main">
          <Collection isLoading={isLoading} collection={collection} />
          {!isLoading && HasMore && (
            <button onClick={loadMoreItems}>Load more</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
