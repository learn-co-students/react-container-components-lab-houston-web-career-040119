// Code MovieReviews Here
import React from 'react'
import testReviews from './test-reviews.js'

const MovieReviews = () => {
    return(
        <div className='review-list'>
            {testReviews.map(review => 
            <div className='review' key={review.display_title}>
                <p>{review.display_title}</p>
                <p>{review.summary_short}</p>
            </div>)}
        </div>   
    )
}

export default MovieReviews