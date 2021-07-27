import React from "react";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";

const DisplayComments = (props) => {
  return props.comments.data.map((comment) => {
    let getReplies = props.getReplies(comment.id);
    // let filteredReplies = replies.filter(reply => reply === [])
    // console.log(filteredReplies)
    return (
      <div>
        <h5>Anonymous</h5>
        <p>{comment.comment_text}</p>
        {getReplies.data?.comment_id === comment.id && <h5>Anonymous</h5> && (
          <p>{getReplies.data.comment_text}</p>
        )}
        <i onClick={() => props.likeComment(comment)}>
          <ThumbUpIcon></ThumbUpIcon>
        </i>
        <p>likes: {comment.likes}</p>
        <i onClick={() => props.dislikeComment(comment)}>
          <ThumbDownIcon></ThumbDownIcon>
        </i>
        <p>Dislikes: {comment.dislikes}</p>
        <button>Reply</button>
      </div>
    );
  });
};

export default DisplayComments;
