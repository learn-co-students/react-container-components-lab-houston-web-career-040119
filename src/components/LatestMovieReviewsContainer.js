import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

//const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';

const NYT_API_KEY = 'NrGr2GiYzGxxJIrBjluYxHIAUK0Xrowf';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

export default class LatestMovieReviewsContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = { reviews:(props.reviews||[]) };
  }

  componentDidMount() {
    fetch(URL)
    .then(res=>res.json())
    .then( data => {
      this.setState( { reviews: data.results } );//console.log(data.results)
    }).catch(() => {});
  }

  render() {
    return (
      <div className={"latest-movie-reviews"}>
        
        {
           this.state.reviews.map(
             review =>
             (<div className={"review"}>
               <p>Byline: {review.byline}</p>
               <p>Critics pick: {review.critics_pick}</p>
               <p>Date updated: {review["date_updated"]}</p>
               <p>Display title: {review["display_title"]}</p>
               <p>Headline: {review.headline}</p>
               <p>URL: {review.link.url}</p>
               <p>MPAA rating: {review["mpaa_rating"]}</p>
               <p>Opening date: {review["opening_date"]}</p>
               <p>Publication date: {review["publication_date"]}</p>
               <p>Summary: {review["summary_short"]}</p>
             </div>)
           )
        }        
      </div>
    );
  }
}
