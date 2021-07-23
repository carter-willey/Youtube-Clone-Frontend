import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ApiKey from "./ApiKey/apiKey";
import NavBar from "./Components/NavBar/navBar";
import DisplayMostPopularVideos from "./Components/DisplayMostPopularVideos/displayMostPopularVideos";
import WatchVideo from "./Components/WatchVideo/watchVideo";
import ListCards from "./Components/listCards/ListCards";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mostPopularVideos: [],
      currentVideo: [],
    };
  }

  componentDidMount() {
    this.getPopularVideos();
  }

  getPopularVideos = async () => {
<<<<<<< HEAD
    let response = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=US&key=${ApiKey}`
    );
=======
    let response = await axios.get("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=US&key=")
>>>>>>> e18c02207860b20b15858494da427d8a44d76c92
    console.log(response);
    this.setState({
      mostPopularVideos: response.data.items,
    });
    console.log(this.state.mostPopularVideos);
  };

  getVideo = (video) => {
    this.setState({
      currentVideo: video,
    });
  };

  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route path="/watchVideo/">
            <WatchVideo currentVideo={this.state.currentVideo} />{" "}
          </Route>
          <Route path="/" exact>
            <DisplayMostPopularVideos
              mostPopularVideos={this.state.mostPopularVideos}
              getVideo={this.getVideo}
            />{" "}
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
