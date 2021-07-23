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
      currentVideo: [],
      loading: true,
      relatedVideos: [],
    };

  }

  componentDidMount() {
    this.getRelatedVideos();
  }

  getRelatedVideos = async () => {
    console.log("response");
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${this.props.currentVideo.id}&type=video&key=${ApiKey}`)
    console.log(response);
    this.setState({
      relatedVideos: response.data.items,
      currentVideo: this.props.currentVideo,
      loading: false,
    })
}
  
 

  render() {
    if (this.state.loading) return null;
    else {
    return (
    <Container fluid>
      <iframe
        id="ytplayer"
        type="text/html"
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${this.state.currentVideo.id}?autoplay=0&origin=http://example.com`}
        frameborder="0"
      ></iframe>
      <VideoDescription currentVideo={this.state.currentVideo} />
      <DisplayRelatedVideos getVideo={this.props.getVideo} relatedVideos={this.state.relatedVideos}/>
      </Container>
    );
    }
  }
}

export default WatchVideo;
