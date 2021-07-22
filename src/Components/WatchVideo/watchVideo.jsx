import React, { Component } from 'react';
import axios from 'axios';

class WatchVideo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentVideo: []
          }
    }

    componentDidMount(){
        this.setState({
            currentVideo: this.props.currentVideo
        })
    }
    render() { 
        console.log(this.state.currentVideo);
        return ( 
            <h1>New page</h1>
         );
    }
}
 
export default WatchVideo;