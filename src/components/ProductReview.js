import React from 'react';
import StarRating from './StarRating';



class ProductReview extends React.Component  {
  deleteReview(id) {
		console.log('id: ', id);
    console.log('this: ', this);
    
		this.setState((reviews, props) => {
			return {
				products: state.products.filter((q) => q.id !== id)
			};
		});
  }
  
  render(){
  const allReviews = this.props.product.reviews.map (review => {
    return (
      <div class="ui card">
        <div class="content">
          <div class="header">{review.reviewer.full_name}</div>
          <div class="meta">
            <span>{review.created_at} </span>
            <a>Place holder</a>
          </div>
          <p class="body">
            {review.body}
          </p>
        </div>
        <div className="ui horizontal list">
          <StarRating max={5} current={review.rating} />
          <div>
            {' '}<button
              className="ui right floated red button"
              onClick = {()=>this.deleteReview(review.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    )
  
  });
  

  return (
    <div className="ui relaxed divided list">
      {allReviews}
    </div>
  );
}};

export default ProductReview;
