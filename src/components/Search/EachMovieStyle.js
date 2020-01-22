import React, { Component } from 'react';
import { BrowserRouter,  Redirect, Route, Link } from 'react-router-dom'
import {APIKey} from '../main/APIKey'
import axios from 'axios'
export class MovieCard extends Component {
      constructor(props)
      {
        super(props)
        this.state={
        }
      }

  render() {
    console.log(this.state)
    const { movie } = this.props;
    console.log("props")
    console.log(this.props.movie)
    console.log("Movie details")
    console.log(movie)
    return (
        <div className='EachMovie bg-dark px-0' style={{width:'50%',height:'20%',borderLeft:'3px solid rgb(232, 233, 230)',borderRight:'3px solid rgb(232, 233, 230)',borderTop:'1px solid rgb(232, 233, 230)'}}>
          <img className="mb-2" src={movie.Poster} width='80px' height='100%' alt="Movie poster" /><span className='text-white'> <BrowserRouter><Link   to={{ pathname :'./movies/'+movie.imdbID}}><a>{movie.Title}</a></Link> </BrowserRouter>{movie.Year}</span>
        </div>

    );
  } 
}

export default MovieCard;
