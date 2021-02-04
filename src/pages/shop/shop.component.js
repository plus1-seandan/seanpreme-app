import React from "react";
import { Route } from "react-router-dom";

import "./shop.styles.scss";
import Collection from "../../components/collection/collection.component";
import SHOP_DATA from "../../data/shop.data";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    return (
      <div className="shop-page">
        <div className="shop-page-body">
          <div className="collection-filter">COLLECTION FILTER</div>
          <div className="collection-main">
            <Collection />
            {/* <Route exact path={`${match.path}`} component={Collection} /> */}
            {/* <Route path={`${match.path}/:categoryId`} component={Collection} /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default ShopPage;
