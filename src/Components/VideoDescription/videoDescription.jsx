import React from "react";
import "./videoDescription.css";
import ShowMoreText from "react-show-more-text";

const VideoDescription = (props) => {
  return (
    <div>
      <h1 className="position-relative">{props.currentVideo.snippet.title}</h1>
      <ShowMoreText className="video_description" lines={3} more="Show more" less="show less" expanded={false} >
        {props.currentVideo.snippet.description}
      </ShowMoreText>
    </div>
  );
};

export default VideoDescription;
