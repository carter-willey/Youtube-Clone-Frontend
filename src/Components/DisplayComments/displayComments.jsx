import React from "react";

const DisplayComments = (props) => {
  console.log(props.comments.data[0].comment_text);
  return props.comments.data.map((comment) => {
    return (
      <div>
          <h1>Anonymous</h1>
        <p>{comment.comment_text}</p>
      </div>
    );
  });
};

export default DisplayComments;
