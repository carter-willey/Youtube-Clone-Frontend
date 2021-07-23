import React, { Component } from "react";
import { Container } from "react-bootstrap";
import VideoDescription from "../VideoDescription/videoDescription";
import DisplayRelatedVideos from "../DisplayRelatedVideos/displayRelatedVideos";
import ApiKey from "../../ApiKey/apiKey";
import axios from "axios";
class WatchVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      relatedVideos: [],
    };
    console.log(props)

  }

  componentDidMount() {
    this.getRelatedVideos();
    console.log(this.props.currentVideo)
  }

  getRelatedVideos = async () => {
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${this.props.currentVideo.id}&type=video&key=${ApiKey}`)
    console.log(response);
    this.setState({
      relatedVideos: response.data.items,
      loading: false,
    })
}
  
  render() {
    let url;
    if (typeof(this.props.currentVideo.id) === 'string'){
      url = `https://www.youtube.com/embed/${this.props.currentVideo.id}?autoplay=0`
    }
    if (typeof(this.props.currentVideo.id) === 'object'){
      url = `https://www.youtube.com/embed/${this.props.currentVideo.id.videoId}?autoplay=0`
    }

    if (this.state.loading) return null;
    else {
    return (
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
      <DisplayRelatedVideos getVideo={this.props.getVideo} relatedVideos={this.state.relatedVideos}/>
      </Container>
    );
    }
  }
}

export default WatchVideo;