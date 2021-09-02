import React from "react";
import "./videoDescription.css";
import ShowMoreText from "react-show-more-text";

const VideoDescription = (props) => {
  return (
    <div className="text-center">
      <div className="videoTitle">{props.currentVideo.snippet.title}</div>
      <ShowMoreText
        className="video_description"
        lines={3}
        more="Show more"
        less="show less"
        expanded={false}
      >
        {props.currentVideo.snippet.description}
      </ShowMoreText>
    </div>
  );
};

export default VideoDescription;
