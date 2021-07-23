import React from 'react';

const VideoDescription = (props) => {
  return ( 
    <div>
    <h1>{props.currentVideo.snippet.title}</h1>
    <p>{props.currentVideo.snippet.description}</p>
    </div>
   );
}
 
export default VideoDescription;