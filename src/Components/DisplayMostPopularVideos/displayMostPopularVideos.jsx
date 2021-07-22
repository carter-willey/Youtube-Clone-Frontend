import React from 'react';
import {Link} from 'react-router-dom'

const DisplayMostPopularVideos = (props) => {
  return ( 
    <div className="container">
      <div className="row">
        {props.mostPopularVideos.map((video) => {
          return(
            
              <Link to="/watchVideo/">
                <div className="col col-md-3"> <img src={video.snippet.thumbnails.medium.url} onClick={() => props.getVideo(video)}/></div>
              </Link>
          )
        })}
      </div>
    </div>
   );
}
 
export default DisplayMostPopularVideos;