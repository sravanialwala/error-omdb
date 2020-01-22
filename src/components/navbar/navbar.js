import React, { Component } from 'react';
import imgurl from './images/imdblogo.png'
import './navbar.css'
import search from './images/search.png'
import watchlist from './images/watchlist.png'
import cross from './images/cross.png'
import movie from './images/movie.png'

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
         }
    }
    render() { 
        return ( 
            <>
                <div className="pos-f-t">
                    <div className="collapse" id="navbarToggleExternalContent" style={{backgroundColor:'#131212'}}>
                        <br/>
                    {/* <nav className="conatainer" style={{backgroundColor:'#131212'}}> */}
                        <span className="expanded" style={{backgroundColor:'#131212'}}>
                        <button className="navbar-toggler" style={{borderRadius:'20px'}} type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <img src={cross} alt="imdb img" height='30'/>
                        </button>
                        </span>
                    {/* </nav> */}
                    <br/>
                    <div className='Collapse' style={{backgroundColor:'#131212'}} >
                        <div className='row'>
                                <div className='col'>
                                    <table className='text-white'>
                                        <thead style={{fontSize:"29px"}}>
                                        <tr>
                                        {/* <td><img src={movie} alt="imdb img" height='40'/></td> */}
                                        <td><b>Movies</b></td>
                                        </tr>
                                        </thead>
                                        <tbody style={{fontSize:"19px"}}>
                                        <tr><a className='text-white' href='#'>Showtimes & Tickets</a> </tr>
                                        <tr><a className='text-white' href='#'> Top Rated Movies</a></tr>
                                        <tr><a className='text-white' href='#'> Most Popular Movies</a></tr>
                                        <tr><a className='text-white' href='#'> Browse Movies by Genre</a></tr>
                                        <tr><a className='text-white' href='#'> Top Box Office</a></tr>
                                        <tr><a className='text-white' href='#'> In Theaters</a></tr>
                                        <tr><a className='text-white' href='#'> Coming soon</a></tr>
                                        <tr><a className='text-white' href='#'> DVD & Blu-Ray Releases</a></tr>
                                        <tr><a className='text-white' href='#'> Release Calendar</a></tr>
                                        <tr><a className='text-white' href='#'> Movie News</a></tr>
                                        <tr><a className='text-white' href='#'> India Movie Spotlight</a></tr>

                                        </tbody>
                                    </table>
                                </div>
                                <div className='col'>
                                    <table className='text-white'>
                                        <thead style={{fontSize:"29px"}}>
                                        <tr>
                                        {/* <td><img src={movie} alt="imdb img" height='40'/></td> */}
                                        <td><b>TV Shows</b></td>
                                        </tr>
                                        </thead>
                                        <tbody style={{fontSize:"19px"}}>
                                        <tr><a className='text-white' href='#'> Top Rated Shows</a></tr>
                                        <tr><a className='text-white' href='#'> Most Popular Shows</a></tr>
                                        <tr><a className='text-white' href='#'> Browse Tv shows by Genre</a></tr>
                                        <tr><a className='text-white' href='#'> TV News</a></tr>
                                        <tr><a className='text-white' href='#'> India TV Spotlight</a></tr>

                                        </tbody>
                                    </table>
                            </div>
                            <div className='col'>
                                    <table className='text-white'>
                                        <thead style={{fontSize:"29px"}}>
                                        <tr>
                                        {/* <td><img src={movie} alt="imdb img" height='40'/></td> */}
                                        <td><b>Awards & Events</b></td>
                                        </tr>
                                        </thead>
                                        <tbody style={{fontSize:"19px"}}>
                                        <tr><a className='text-white' href='#'>Oscars</a></tr>
                                        <tr><a className='text-white' href='#'>Best Picture Winners</a></tr>
                                        <tr><a className='text-white' href='#'>Golden Globes</a></tr>
                                        <tr><a className='text-white' href='#'>Emmys</a></tr>
                                        <tr><a className='text-white' href='#'>San Diego Comic-Con</a></tr>
                                        <tr><a className='text-white' href='#'>New York Comic-Con</a></tr>
                                        <tr><a className='text-white' href='#'>Sundance Film Festival</a></tr>
                                        <tr><a className='text-white' href='#'>Toronto Int'l Film Festival</a></tr>
                                        <tr><a className='text-white' href='#'>Awards Central</a></tr>
                                        <tr><a className='text-white' href='#'>All Events</a></tr>



                                        </tbody>
                                    </table>
                            </div>
                            </div>
                            <br/>
                        
                        </div>
                    <div>
                    </div>
                    </div>
                    <nav className="navbar navbar-dark" style={{backgroundColor:'#131212'}}>
                        <div className='row '>
                            <div className="col-px-0">
                                <img src={imgurl} alt="imdb img" height='34'/>
                            </div>
                            <div className="col-px-0">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            </div>
                            <div className="col-px-0">
                            <div className="dropdown" style={{backgroundColor:'#131212'}}>
                                <button className="btn btn-secondary dropdown-toggle text-dark" style={{backgroundColor:'#ffffff'}} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {this.props.drop}
                                </button>
                                <div className="dropdown-menu" style={{backgroundColor:'#131212',border:'#131212'}} aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item  text-white"  onClick={this.props.handleSelectProps}>All</a>
                                    <a className="dropdown-item  text-white " onClick={this.props.handleSelectProps}>Titles</a>
                                    <a className="dropdown-item text-white" onClick={this.props.handleSelectProps}>TV Episodes</a>
                                    <a className="dropdown-item  text-white"  onClick={this.props.handleSelectProps}>Series</a>
                                </div>
                                </div>
                            </div>
                            <div className='col-px-0'>
                            <input 
                                type="text" placeholder="Search for Movie,TV Series......"
                                 className="form-control" aria-label="Text input with dropdown button" 
                                 style={{width: "820px"}}
                                 onKeyPress = {this.props.handleInputProps}
                                 />
                            </div>
                            <div className='col-px-0'>
                                
                                <button className="btn btn text-white" style={{backgroundColor:'#131212'}}><b>IMDBPr0</b></button>
                            </div>
                            <div className='col-px-0'>

                            <button className="btn btn text-white" style={{backgroundColor:'#131212'}}><b>WatchList</b></button>
                            </div>
                            <div className='col-px-0'>
                            <button type="button" className="btn btn text-white" style={{backgroundColor:'#131212'}}><b>Sign In</b></button>
                            </div>
                        </div>
                    </nav>
                </div>
            </>                
         );
    }
}
 
export default NavBar;