import React, { Component } from 'react';
import { BrowserRouter,  Redirect, Route,Switch,Link} from 'react-router-dom'
import Main from './main/main';
import Routes from './routes';
class Route1 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <BrowserRouter>
                        <Switch>
                        <Route exact path="/" render={()=> ( <Redirect to="/landing" /> )}/>
                        {/* <Route path = "/login" component = {Login}/> */}
                        <Route path = "/landing" component = {Main}/>
                        <Route path = '/movies/:imdbID' component = {Routes}/>
                        {/* <Route path = '*' component = {()=> "404 Not Found"}/> */}
                        <Route
                        render={
                                props =>
                                    <div>
                                        <center>
                                    <h3>404! Page Not Found.</h3>
                                    <Link to={'/'}>Go to Landing page.</Link>
                                    </center>
                                    </div>
                                }
                        />
                        </Switch>
                        </BrowserRouter>
            </div>
         );
    }
}
 
export default Route1;