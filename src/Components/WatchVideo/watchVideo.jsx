import React, { Component } from "react";

class WatchVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: [],
    };
  }

  componentDidMount() {
    this.setState({
      currentVideo: this.props.currentVideo,
    });
  }
  render() {
    console.log(this.state.currentVideo);
    return (
      <iframe
        
        id="ytplayer"
        type="text/html"
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${this.state.currentVideo.id}?autoplay=0&origin=http://example.com`}
        frameborder="0"
      ></iframe>
    );
  }
}

export default WatchVideo;
