import React from "react";
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ThumbDownIcon from '@material-ui/icons/ThumbDown'


// getReplies = async (comment) => {
//   let response = await axios.get(`http://127.0.0.1:8000/videos/reply/${comment.id}/`)
//   console.log(response)
  
// }
const DisplayComments = (props) => {
  return props.comments.data.map((comment) => {
    return (
      <div>
          <h5>Anonymous</h5>
        <p>{comment.comment_text}</p>
        <i onClick={() => props.likeComment(comment)}><ThumbUpIcon ></ThumbUpIcon></i>
        <p>likes {comment.likes}</p>
        <i onClick={() => props.dislikeComment(comment)}><ThumbDownIcon></ThumbDownIcon></i>
        <p>Dislikes {comment.dislikes}</p>
        <button>Reply</button>
      </div>
    );
  });
};

export default DisplayComments;
