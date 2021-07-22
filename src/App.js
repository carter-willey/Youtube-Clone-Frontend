import React, { Component } from 'react';
import NavBar from './Components/NavBar/navBar';
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  componentDidMount(){
   this.getPopularVideos() 
  }

  getPopularVideos = async () => {
    let response = await axios.get("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=US&key=AIzaSyCyZ0D0SYyRBDBvrkaYNVEJJSpCOIz_MVM")
    console.log(response);
  }

  render() { 
    return ( 
      <div>
      <NavBar />
      <div className="container">
        <div className="row">
          
        </div>
      </div>
    </div>
     );
  }
}
 
export default App;
