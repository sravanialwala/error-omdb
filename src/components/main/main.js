import React, { Component } from 'react';
import NavBar from '../navbar/navbar';
import {APIKey} from './APIKey'
import axios from 'axios';
import MovieCard from '../Search/EachMovieStyle'
import Footer from '../footer/footer';
import poster from '../Home/images/army.png';
import '../Home/home.css'
import plugin from './imdb1.png'
// import poster from './army.png'
import Home from '../Home/home';
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            drop:'All',
            SearchValue : '',
            ShowDetails: 'False',
            result:[],
         }
    }
    select = (e) =>
    {
        this.setState({
                drop:e.target.innerText
        })
    }
    handleInput = (e) =>
    {
      let  type=''
      if(this.state.drop === 'Titles')
      {
          type='&type=movie'
      }
      else if(this.state.drop === 'TV Episodes')
      {
          type='&type=episode'
      }
      else if(this.state.drop === 'Series')
      {
          type='&type=series'
      }
      e.persist();
      if (e.key === "Enter") 
      {
        this.state.SearchValue=e.target.value
        this.setState({
            // SearchValue: e.target.value,
            ShowDetails: "True"
        })
        const Url = `http://www.omdbapi.com/?apikey=${APIKey}${type}&s=${this.state.SearchValue}`
        console.log(Url)
        console.log(this.state)
        axios.get(Url)
        .then(response =>
            {
            this.setState({
                result:response.data
            })
            })
            .catch(err => console.log("err"))
        }
    }
    render() {
        // console.log(this.state)
        console.log(this.state.result)
        const {result} = this.state.result
        let content = ''
        content =
        this.state.result.Response === 'True'
            ? this.state.result.Search.map((movie, index) => (
                <MovieCard key={index} movie={movie} />
            ))
            :null;

        // console.log(this.state)
        return (
            <div>
                <NavBar handleInputProps={this.handleInput} handleSelectProps ={this.select} drop = {this.state.drop}/>
                <span className='Main'  style={{backgroundImage: `url(${plugin})`,width:'100%',backgroundRepeat: 'no-repeat',backgroundSize:'cover'}}>
                {/* style={{backgroundImage: `url(${poster})`,backgroundRepeat: 'no-repeat'}} */}
                    <span className='output-Left'>
                        {content}
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </span>
                    {/* <span className="output-right text-white justify-content-center px-3 py-3">
                        <span className="container px-3 py-5" style={{backgroundColor: '#00b3b3',height:'250px'}}>
                            <center>
                                <h3><font color='#000000'>The Essential tool for industry professionals</font></h3>
                                <h1><font color='#000000'><b>IMDbPro</b></font></h1>
                                <button className='btn btn-warning' ><h5>Start your 30-day free Trail</h5></button>
                            </center>
                        </span> 
                    </span> */}
                </span>
                <Footer/>
            </div>
         );
    }
} 
 
export default Main;