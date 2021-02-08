import { Link } from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import Collection from "../../components/collection/collection.component";
import ScrollToTopButton from "../../components/scroll-to-top-button/scroll-to-top.component";
import { fetchFavoritesStartAsync } from "../../redux/favorites/favorites.actions";
import {
  selectIsFavoritesFetching,
  selectFavorites,
} from "../../redux/favorites/favorites.selectors";
import { isAuthenticated } from "../../utils/auth";
import "./favorites.styles.scss";
import { selectCurrentUser } from "../../redux/user/user.selectors";

const FavoritesPage = ({
  isFavoritesFetching,
  fetchFavorites,
  favorites,
  currUser,
}) => {
  useEffect(() => {
    const asyncFunc = async () => {
      fetchFavorites();
    };
    asyncFunc();
  }, []);

  if (isFavoritesFetching) {
    return <div>...loading</div>;
  }
  console.log({ favorites });
  return (
    <div className="favorites-page">
      <h1>MY FAVORITES</h1>
      {currUser?.token ? (
        <div className="favorites-main">
          <div className="shop-page">
            <div className="shop-page-body">
              <div className="collection-main">
                {favorites.length === 0 ? (
                  <h1 className="no-fav-items-msg">No Favorite Items</h1>
                ) : (
                  <Collection
                    isLoading={false}
                    collection={{
                      collection: "recently-viewed-items",
                      items: favorites,
                    }}
                    hasDelete
                  />
                )}
                <div className="scroll-to-top-button">
                  <ScrollToTopButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="please-login">
          <p>
            Please{" "}
            <Link color="tomato" href="/sign-in">
              {" "}
              Log In{" "}
            </Link>
            or
            <Link color="tomato" href="/sign-in">
              {" "}
              Create an Account{" "}
            </Link>
            to see or share your favorites
          </p>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isFavoritesFetching: selectIsFavoritesFetching,
  favorites: selectFavorites,
  currUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  fetchFavorites: () => dispatch(fetchFavoritesStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);
