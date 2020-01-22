import React, { Component } from 'react';
class Single extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const single = this.props.movie.Value
        console.log(this.props.movie)
        console.log("single")
        console.log(single)
        return ( 
            <div>
                {single}
                {this.props.movie.Value}
                {this.props.movie.Source}
            </div>
         );
    }
}
 
export default Single;