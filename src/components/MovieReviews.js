// Code MovieReviews Here
import React from 'react';
import LatestMovieReviewsContainer from './LatestMovieReviewsContainer';
import SearchableMovieReviewsContainer from './SearchableMovieReviewsContainer';

let MovieReviews = function(props) {
  return (
    <div className={"review-list"}>
      <div className="review"></div>

<div className="review"></div>
<div className="review"></div>
      <LatestMovieReviewsContainer reviews={props.reviews} />
      <SearchableMovieReviewsContainer reviews={props.reviews} />

    </div>
  );
}

export default MovieReviews;
