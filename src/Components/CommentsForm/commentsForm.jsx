import React, { Component } from 'react';
import axios from 'axios'
import DisplayComments from '../DisplayComments/displayComments';

class CommentsForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            comments: []
         }
    }

    componentDidMount(){
        this.getComments()
    }
    

    getComments = async () => {
        let response = await axios.get(`http://127.0.0.1:8000/videos/${this.props.currentVideo.id}/`)
        this.setState ({
            comments: response,
        })
        console.log(this.state.comments)
        

        

    }
    render() { 
        return (  
            <DisplayComments />
        );
    }
}
 
export default CommentsForm