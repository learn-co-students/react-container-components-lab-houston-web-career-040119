import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'GMow0ZdZaMIrgMj27zUpSvgwcRjK9A7o';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'+`api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {
    constructor() {
        super()
        this.state = {
            reviews: []
        }
    }

    componentDidMount() {
        fetch(URL)
        .then(res => res.json())
        .then(data => {
            this.setState({
                reviews: data.results
            })
        })
    }

    render() {
        return(
            <div className='latest-movie-reviews'>
                {this.state.reviews.map(review =>
                    <div className='review' key={review.display_title}>
                        <p>{review.display_title}</p>
                        <p>{review.summary_short}</p>
                    </div>     
                )}
            </div>
        )
    }
}