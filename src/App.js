import React, { Component } from 'react';
import NavBar from './Components/NavBar/navBar';
import axios from 'axios'
import DisplayMostPopularVideos from './Components/DisplayMostPopularVideos/displayMostPopularVideos';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import WatchVideo from './Components/WatchVideo/watchVideo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      mostPopularVideos: [],
      currentVideo: []
     }
  }

  componentDidMount(){
   this.getPopularVideos() 
   
  }

  getPopularVideos = async () => {
    let response = await axios.get("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=US&key=AIzaSyCyZ0D0SYyRBDBvrkaYNVEJJSpCOIz_MVM")
    console.log(response);
    this.setState({
      mostPopularVideos: response.data.items
    })
    console.log(this.state.mostPopularVideos);
  }

  getVideo = (video) => {
    this.setState({
      currentVideo: video
    })
  }

  render() { 
    return ( 
      <Router>
      <NavBar />
      <div className="container">
        <div className="row">
          <Switch>
          <Route path="/" exact><DisplayMostPopularVideos mostPopularVideos={this.state.mostPopularVideos} getVideo={this.getVideo} /> </Route>
          <Route path="/watchVideo" exact render={(props) => (<WatchVideo {...props}  currentVideo={this.state.currentVideo}/>)} />
          </Switch>
        </div>
      </div>
      </Router>
     );
  }
}
 
export default App;
