import React from "react";
import { useState } from "react";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import './displayComments.css'
import { Container, Row } from "react-bootstrap";
const DisplayComments = (props) => { 
  const [reply, setReply] = useState("")
  return props.comments.map((comment) => {
    let value;
    let inputBox;
    inputBox = 
    <div>
      <form onSubmit={(event) => props.handleReply(event, reply, comment)}>
      <input
      type='text'
      name='commentInput'
      className='reply_input'
      placeholder='Write a reply...'
      onChange={(event) => setReply(event.target.value)}
      ></input>
      <button className='replyButton ms-2 mb-2'>Reply</button>
      </form>
    </div>
    if (props.replies.length !== 0){
    value = props.replies.map((reply) => {
      if(reply.comment === comment.id){
          return reply = 
        <div>
          <h5 className="replyHeader mt-2">Reply from Anonymous:</h5>
          <p className="replyBody">{reply.comment_text}</p>
        </div>
      }
    });
    }
      return (
        <Container>
          <Row>
          <h5 className="commentHeader mt-2">Anonymous:</h5>
          <p className="commentBody">{comment.comment_text}</p>
          <div className="p-2 comment d-flex">
          <i  onClick={() => props.likeComment(comment)}>
            <ThumbUpIcon style={{color: 'blue', cursor: "pointer"}}></ThumbUpIcon>
          </i>
          <p className="commentOption">likes: {comment.likes}</p>
          <i  onClick={() => props.dislikeComment(comment)}>
            <ThumbDownIcon style={{color: 'blue', cursor: "pointer"}}></ThumbDownIcon>
          </i>
          <p className="commentOption">Dislikes: {comment.dislikes}</p>
          </div>
          {inputBox}
          {value}
          </Row>
        </Container>
      );
    
  });
};

export default DisplayComments;
