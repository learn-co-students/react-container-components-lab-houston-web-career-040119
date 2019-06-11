import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import testReviews from './test-reviews.js'

const NYT_API_KEY = 'GMow0ZdZaMIrgMj27zUpSvgwcRjK9A7o';
const URL = (searchTerm) => 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query='
            + `${searchTerm}&api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super()
        this.state = {
            reviews: [],
            searchTerm: ''
        }
    }

    input = (e) => {
        this.setState({
            searchTerm:e.target[0].value
        })
    }

    search = (e) => {
        e.preventDefault()
        fetch(URL(this.state.searchTerm))
        .then(res => res.json())
        .then(data => {
            this.setState({
                reviews: data.results
            })
        })
    }

    render() {
        return(
            <div className='searchable-movie-reviews'>
                <form onSubmit={(e) => this.search(e)}>
                    <input onChange={this.input}type='text'/>
                    <input type='submit'/>
                </form>
                <div>
                    {this.state.reviews.map(review =>
                        <div className='review' key={review.display_title}>
                            <p>{review.display_title}</p>
                            <p>{review.summary_short}</p>
                        </div>)}
                </div>
            </div>       
        )
    }
}
