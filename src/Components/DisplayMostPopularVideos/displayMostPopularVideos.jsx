import React from 'react';

const DisplayMostPopularVideos = (props) => {
  return ( 
    <div className="container">
      <div className="row">
        {props.mostPopularVideos.map((video) => {
          return(
            <div className="col col-md-3"> <img src={video.snippet.thumbnails.medium.url} /></div>
          )
        })}
      </div>
    </div>
   );
}
 
export default DisplayMostPopularVideos;