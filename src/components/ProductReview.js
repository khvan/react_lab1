import React from 'react';
import StarRating from './StarRating'

const ProductReview = props => {

  const allReviews = props.product.reviews.map (review => {
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
        <StarRating max={5} current={review.rating}/>
      </div>
    );
  });


  return (
    <div className="ui relaxed divided list">
      {allReviews}
    </div>
  );
};

export default ProductReview;
