// Code MovieReviews Here
import React from 'react'

const Review = (review) => {
  return(
    <div className='review'>
      <h1>{review.display_title}</h1>
      <img src={review.multimedia.src} alt={review.multimedia.src} />
      <p>{review.summary_short}</p>
    </div>
  )
}

const MovieReviews = (props) => {
  return (
    <div className='review-list'>
      {props.reviews.map(Review)}
    </div>
  )
}

export default MovieReviews
