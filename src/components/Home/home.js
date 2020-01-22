import React, { Component } from 'react';
import poster from './images/army.png';
import './home.css'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='Main' style={{backgroundImage: `url(${poster})`,backgroundRepeat: 'no-repeat'}}>
                    <div className='Output-Left text-white'>
                        if else condition for home page or result
                    </div>
                    <div className="output-right text-white justify-content-center px-3 py-3">
                        <div class="container px-3 py-5" style={{backgroundColor: '#00b3b3',height:'250px'}}>
                            <center>
                                <h3><font color='#000000'>The Essential tool for industry professionals</font></h3>
                                <h1><font color='#000000'><b>IMDbPro</b></font></h1>
                                <button className='btn btn-warning' ><h5>Start your 30-day free Trail</h5></button>
                            </center>
                        </div> 
                    </div>
                </div>
         );
    }
}
 
export default Home;