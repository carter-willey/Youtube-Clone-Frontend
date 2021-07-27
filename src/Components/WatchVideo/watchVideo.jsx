import React, { Component } from "react";
import { Container } from "react-bootstrap";
import VideoDescription from "../VideoDescription/videoDescription";
import DisplayRelatedVideos from "../DisplayRelatedVideos/displayRelatedVideos";
import ApiKey from "../../ApiKey/apiKey";
import axios from "axios";
import CommentsForm from "../CommentsForm/commentsForm";
class WatchVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      relatedVideos: [],
    };

  }

  determineUrl = () => {
    if (typeof(this.props.currentVideo.id) === 'string'){
       return (`https://www.youtube.com/embed/${this.props.currentVideo.id}?autoplay=0`)
    }
    if (typeof(this.props.currentVideo.id) === 'object'){
      return(`https://www.youtube.com/embed/${this.props.currentVideo.id.videoId}?autoplay=0`)
    }
  }

  determineId = () => {
    if (typeof(this.props.currentVideo.id) === 'string'){
      return (this.props.currentVideo.id)
   }
   if (typeof(this.props.currentVideo.id) === 'object'){
     return(this.props.currentVideo.id.videoId)
   }
  }

  

  componentDidMount() {
    console.log('here')
    this.getRelatedVideos();
  }

  getRelatedVideos = async () => {
    let id = this.determineId()
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${id}&type=video&maxResults=25&key=${ApiKey}`)
    console.log(response);
    this.setState({
      relatedVideos: response.data.items,
      loading: false,
    })
  }
  
  render() {
    let url = this.determineUrl()
    return (
      <div>
    <Container fluid>
      <iframe
        id="ytplayer"
        type="text/html"
        width="640"
        height="360"
        src={url}
        frameborder="0"
      ></iframe>
      <VideoDescription currentVideo={this.props.currentVideo} />
      </Container>
      <CommentsForm currentVideo={this.props.currentVideo}/>
      <DisplayRelatedVideos getVideo={this.props.getVideo} relatedVideos={this.state.relatedVideos}/>
      </div>
    );
  }
}

export default WatchVideo;