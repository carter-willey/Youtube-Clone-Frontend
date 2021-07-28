import React from "react";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import './displayComments.css'

const DisplayComments = (props) => {
  return props.comments.map((comment) => {
    let value;
    if (props.replies.length !== 0){
    value = props.replies[0].map((reply) => {
      if(reply.comment_id === comment.id){
          return reply = 
        <div>
          <h5 className="commentHeader">Anonymous</h5>
          <p className="commentBody">{reply.comment_text}</p>
          <div className="p-2 comment d-flex">
          <i onClick={() => props.likeComment(comment)}>
            <ThumbUpIcon></ThumbUpIcon>
          </i>
          <p className="commentOption" >likes: {reply.likes}</p>
          <i  onClick={() => props.dislikeComment(comment)}>
            <ThumbDownIcon></ThumbDownIcon>
          </i>
          <p className="commentOption">Dislikes: {reply.dislikes}</p>
          </div>
          <button>Reply</button>
        </div>
      }
    });
    }
      return (
        <div>
          <h5 className="commentHeader">Anonymous</h5>
          <p className="commentBody">{comment.comment_text}</p>
          <div className="p-2 comment d-flex">
          <i  onClick={() => props.likeComment(comment)}>
            <ThumbUpIcon></ThumbUpIcon>
          </i>
          <p className="commentOption">likes: {comment.likes}</p>
          <i  onClick={() => props.dislikeComment(comment)}>
            <ThumbDownIcon></ThumbDownIcon>
          </i>
          <p className="commentOption">Dislikes: {comment.dislikes}</p>
          </div>
          <button>Reply</button>
          {value}
        </div>
      );
    
  });
};

export default DisplayComments;
