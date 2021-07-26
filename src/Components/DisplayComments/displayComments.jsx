import React from "react";
import {useState} from 'react'

const DisplayComments = (props) => {
  let inputBox;
  const [count, setCount]  = useState(1)
  if (count % 2 === 0){
     inputBox = <input></input>
  }
  return props.comments.data.map((comment) => {
    return (
      <div>
          <h5>Anonymous</h5>
        <p>{comment.comment_text}</p>
        <button onClick={() => setCount(count + 1)}>Reply</button>
        {inputBox}
      </div>
    );
  });
};

export default DisplayComments;
