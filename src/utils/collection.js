import axios from "axios";

export const fetchCollection = async (collection, page) => {
  const { data } = await axios({
    method: "GET",
    url: `${process.env.REACT_APP_SERVER_URL}/collections?id=${collection.collectionId}sort=${collection.sort}`,
    params: {
      _page: page,
      _limit: 12,
      _collectionId: collection.collectionId,
      _sort: collection.sort,
    },
  });
  return data;
};
