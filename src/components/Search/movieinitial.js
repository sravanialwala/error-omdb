import './movieintial.css';
import React, { Component } from 'react';
import {APIKey} from '../main/APIKey'
import axios from 'axios';
import MovieCard from './EachMovieStyle';
class MovieInitial extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      search:'',
      result:[],
     }
  }
  onClick = (e) =>
  {
      const Url = `http://www.omdbapi.com/?apikey=${APIKey}&s=${this.state.search}`
      axios.get(Url)
      .then(response =>
        {
          this.setState({
            result:response.data
          })
        })
          .catch(err => console.log("err"))
  }
  onChange = (e)=>
  {
    console.log(this.state.search)
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  render() { 
    console.log(this.state.result)
    const {result} = this.state.result
    let content = ''
    content =
    this.state.result.Response === 'True'
        ? this.state.result.Search.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))
        : null;
    return ( 
      <div className  ='App'>
        <p> My APIKey is:  {APIKey}</p>
        <input type='text' placeholder='search here.....' name ='search'onChange={this.onChange}/>
        <button onClick={this.onClick}>Click me</button>
        <br/>
        <br/><br/><br/> 
        <div className='custom'>
        {content}
        </div>
      </div>

     );
  }
}
 
export default MovieInitial;


