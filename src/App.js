import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ApiKey from "./ApiKey/apiKey";
import NavBar from "./Components/NavBar/navBar";
import DisplayMostPopularVideos from "./Components/DisplayMostPopularVideos/displayMostPopularVideos";
import WatchVideo from "./Components/WatchVideo/watchVideo";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mostPopularVideos: [],
      currentVideo: [],
    };
    console.log(this.props)
  }

  componentDidMount() {
    this.getPopularVideos();
  }

  getPopularVideos = async () => {
    let response = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=US&key=${ApiKey}`
    );
    this.setState({
      mostPopularVideos: response.data.items,
    });
  };

  getVideo = (video) => {
    console.log(video)
    this.setState({
      currentVideo: video,
    });
  };

  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route path={`/watchVideo/${this.state.currentVideo.id}`}>
            <WatchVideo currentVideo={this.state.currentVideo} getVideo={this.getVideo} />
          </Route>
          <Route path="/" exact>
            <DisplayMostPopularVideos
              mostPopularVideos={this.state.mostPopularVideos}
              getVideo={this.getVideo}
            />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;