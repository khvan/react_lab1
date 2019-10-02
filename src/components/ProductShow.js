import React from 'react';
import product from './ProductsProps';
import ProductDetails from './ProductDetails';
import ProductReview from './ProductReview';




class ProductShow extends React.Component {
  render () {
    return (
      <div class="ui container">
        <ProductDetails product={product} />
        <ProductReview product={product} />
      </div>
    );
  }
}

export default ProductShow;
