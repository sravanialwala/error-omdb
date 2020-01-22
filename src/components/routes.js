import React, { Component } from 'react';
import axios from 'axios';
import {APIKey} from './main/APIKey'
import Single from './single';
import './routes.css'
import noimg from './noimg.png'
class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            SingleResult:{}
         }
    }
    componentDidMount()
    {
        const { imdbID } = this.props.match.params
        const Url = `http://www.omdbapi.com/?apikey=${APIKey}&i=${imdbID}`
        console.log(Url)
        axios.get(Url)
        .then(response=>{
            console.log(response)
            this.setState({
                SingleResult:response.data
            })
        })
        .catch(err =>console.log(err))
    }
    render() {
        console.log(typeof this.state.SingleResult.Actors)
        console.log(typeof this.state.SingleResult)
        console.log(typeof this.state.SingleResult.Ratings)
        // let linkvar = this.state.SingleResult.Actors
        // let kill = ''
        // kill = this.state.SingleResult.Response === 'True'?        
        //     linkvar.split(','):null
        // console.log("linkvar",linkvar)
        // let err = ''
        // err = this.state.SingleResult.Response === 'False'?<p>Movie name is not found ra jaffa</p>: null
        // console.log("err"+err)
        let content = ''
        content =
        
        this.state.SingleResult.Response === 'True'
            ?this.state.SingleResult.Ratings.map((s, index) => (
                <tr><td>{s.Source}</td><td>:<span className='px-3'>{s.Value}</span></td></tr>
            ))
            : null;
        console.log("in routes") 
        return ( 
            <div className='singleMovie text-white bg-dark'>
                <font><b style={{fontSize:'25px'}}>{this.state.SingleResult.Title}</b> <b>({this.state.SingleResult.Year})</b>-{this.state.SingleResult.Type}</font>
                <br/>
                <span className='px-3' style={{borderRight:'5px', borderColor:'red'}}>{this.state.SingleResult.Genre}</span>Released On:{this.state.SingleResult.Released}({this.state.SingleResult.Runtime})
                <br/>
                <span className='px-3'>Language(s):{this.state.SingleResult.Language}</span>
                <center className='text-white'>{this.state.SingleResult.Poster === 'N/A'?"null":<img src={this.state.SingleResult.Poster} alt={this.state.SingleResult.Title} width='350px' height='300px' style={{borderRadius:'1px'}}/>}
                <br/>
                <br/>
                {this.state.SingleResult.Plot}
               </center> 
               <hr style={{borderColor:'white'}}/>
               <table className='mx-0'>
                   <tbody>
                    <tr className='mx-5' style={{verticalAlign:'top'}}><td><b style={{fontSize:'20px'}}>Director </b></td><td> :<i style={{fontSize:'19px'}}><a href='#'>{this.state.SingleResult.Director}</a></i></td></tr>
                    <tr className='mx-5' style={{verticalAlign:'top'}}><td><b style={{fontSize:'20px'}}>Writer </b></td><td> :<i style={{fontSize:'19px'}}>{this.state.SingleResult.Writer && this.state.SingleResult.Writer.split(',').map(x =>(<span key={x}><a href='#'>{x}</a>,</span>))}</i></td></tr>
                    <tr className='mx-5' style={{verticalAlign:'top'}}><td><b style={{fontSize:'20px'}}>Stars </b></td><td> :<i style={{fontSize:'19px'}}>{this.state.SingleResult.Actors && this.state.SingleResult.Actors.split(',').map(x =>(<span key={x}><a href='#'>{x}</a>,</span>))}</i></td></tr>
                    <tr className='mx-5' style={{verticalAlign:'top'}}><td><b style={{fontSize:'20px'}}>Production </b></td><td> :<i style={{fontSize:'19px'}}><a href='#'>{this.state.SingleResult.Production}</a></i></td></tr>
                    </tbody>
               </table>
               <br/>
               <center><a href='#' data-toggle="modal" data-target="#exampleModalCenter">
                    Click here 
                    </a>
                    for Ratings and more info</center>
                    <br/>
                    <div className="modal fade " id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content bg-dark">
                        <div className="modal-header">
                            <h5 className="modal-title text-dark-grey" id="exampleModalLongTitle">More Info</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            </button>
                        </div>
                        <table className="modal-body">
                            <tbody>
                                <tr><td>imdbRating</td><td>:<span className='px-3'>{this.state.SingleResult.imdbRating}</span></td></tr>
                                <tr><td>imdbVotes</td><td>:<span className='px-3'>{this.state.SingleResult.imdbVotes}</span></td></tr>
                                <tr><td>Metascore</td><td>:<span className='px-3'>{this.state.SingleResult.Metascore}</span></td></tr>
                                <tr><td>imdbVotes</td><td>:<span className='px-3'>{this.state.SingleResult.imdbVotes}</span></td></tr>
                                {content}
                            </tbody>
                        </table>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                    </div>
            </div>
         );
    }
}
 
export default Routes;