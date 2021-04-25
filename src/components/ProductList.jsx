import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../actions";

import ProductBox from "./ProductBox";

class ProductList extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    return (
      <section className='app__products'>
        <ProductBox />
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return { products: state.products };
};

export default connect(mapStateToProps, { fetchProducts })(ProductList);
