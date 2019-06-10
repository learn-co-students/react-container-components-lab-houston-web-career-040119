import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'Ky5csY8FNocfGiD7URm0luhzvnLPphlq';

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  textInput = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  search = (e) => {
    e.preventDefault()
    let URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}&api-key=${NYT_API_KEY}`
    fetch(URL)
      .then(res=>res.json())
      .then(data=> {
        this.setState({
          reviews: data.results
        })
      })
  }

  renderSearched = () => {
    return (this.state.reviews === [] ? "No Movies Match this Query" : this.state.reviews.map((movie) => {return <MovieReviews movie={movie} />}) )
  }

  render(){
    return(
      <div className='searchable-movie-reviews'>
        <form onSubmit={(e) => this.search(e)}>
          <input type='text' onChange={(e) => this.textInput(e)} />
          <input type='submit' value='Search' />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
