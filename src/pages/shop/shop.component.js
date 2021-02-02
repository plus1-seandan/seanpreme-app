import React from "react";

import "./shop.styles.scss";
import Collection from "../../components/collection/collection.component";
import SHOP_DATA from "../../data/shop.data";
import Header from "../../components/header/header.component";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        <Header />
        <div className="shop-page-body">
          <div className="collection-filter">COLLECTION FILTER</div>
          <div className="collection-main">
            <Collection {...collections} />
          </div>
        </div>
      </div>
    );
  }
}

export default ShopPage;
