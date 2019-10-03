import React from 'react';


class ProductDetails extends React.Component {
  render () {
    console.log("THIS IS THE PROPS ==>", this.props.product.reviews)
    // const {
    //   product: { id, title, description, seller, average_rating, created_at },
    // } = this.props.product;

    const { id, title, description, seller, average_rating, created_at } = this.props.product

    console.log("THIS IS THE ID ==>", id, title)
    
    return (
      <div class="ui card">
        <div class="content">
          <div class="header">{title}</div>
          <div class="meta">
            <span>{created_at} </span>
            <a>{seller.full_name}</a>
            <a>{`ID ${id}`}</a>
          </div>
          <p class="body">
              {description}
          </p>
        </div>
      </div>
    );
  }
}
export default ProductDetails;
