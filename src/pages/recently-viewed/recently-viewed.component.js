import React from "react";
import { connect } from "react-redux";

import Collection from "../../components/collection/collection.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import ScrollToTopButton from "../../components/scroll-to-top-button/scroll-to-top.component";
import { selectRecentItems } from "../../redux/recently-viewed/recent.selectors";
import { clearRecentlyViewedItems } from "../../redux/recently-viewed/recent.actions";

import "./recently-viewed.styles.scss";

const RecentlyViewedPage = ({ recentItems, clearRecentItems }) => {
  return (
    <div className="shop-page">
      <div className="shop-page-header">
        <h1 className="collection__title">Recently Viewed</h1>
        <div className="clear-button">
          <CustomButton onClick={clearRecentItems}>Clear All</CustomButton>
        </div>
      </div>
      <div className="shop-page-body">
        <div className="collection-main">
          {recentItems.length === 0 ? (
            <h1 className="no-recent-items-msg">No Recently Viewed Items</h1>
          ) : (
            <Collection
              isLoading={false}
              collection={{
                collection: "recently-viewed-items",
                items: recentItems,
              }}
            />
          )}
          <div className="scroll-to-top-button">
            <ScrollToTopButton />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  recentItems: selectRecentItems(state),
});

const mapDispatchToProps = (dispatch) => ({
  clearRecentItems: () => dispatch(clearRecentlyViewedItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecentlyViewedPage);
