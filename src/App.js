import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ApiKey from "./ApiKey/apiKey";
import NavBar from "./Components/NavBar/navBar";
import DisplayMostPopularVideos from "./Components/DisplayMostPopularVideos/displayMostPopularVideos";
import WatchVideo from "./Components/WatchVideo/watchVideo";
import DisplaySearchResults from "./Components/DisplaySearchResults/displaySearchResults";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mostPopularVideos: [],
      currentVideo: [],
      searchResults: [],
      update: false
    };
  }

  componentDidMount() {
    this.getPopularVideos();
  }

  getSearchResults = async (search) => {
    let response = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=32&q=${search}&key=${ApiKey}`
    );
    this.setState({
      searchResults: response.data.items,
    });
  };

  getPopularVideos = async () => {
    let response = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=32&regionCode=US&key=${ApiKey}`
    );
    this.setState({
      mostPopularVideos: response.data.items,
    });
  };

  getVideo = (video) => {
    this.setState({
      ...this.state,
      currentVideo: video,
    });
  };

  render() {
    return (
      <Router>
        <NavBar getSearchResults={this.getSearchResults} />
        <Switch>
          <Route path="/" exact>
            <DisplayMostPopularVideos
              mostPopularVideos={this.state.mostPopularVideos}
              getVideo={this.getVideo}
            />
          </Route>
          <Route path={`/watchVideo/:id`}>
            <WatchVideo
            
              currentVideo={this.state.currentVideo}
              getVideo={this.getVideo}
            />
          </Route>
          <Route path="/search">
            <DisplaySearchResults
              searchResults={this.state.searchResults}
              getVideo={this.getVideo}
              
            />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
