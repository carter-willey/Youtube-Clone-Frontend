import React, { Component } from "react";
import axios from "axios";
import DisplayComments from "../DisplayComments/displayComments";
import ReplyComments from "../ReplyComments/replyComments";

class CommentsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      replies: [],
      loading: true,
      commentInput: "",
    };
  }

  componentDidMount() {
    this.getComments();
  }

  getComments = async () => {
    let response;

    if (typeof this.props.currentVideo.id === "string") {
      response = await axios.get(
        `http://127.0.0.1:8000/videos/${this.props.currentVideo.id}/`
      );
    }
    if (typeof this.props.currentVideo.id === "object") {
      response = await axios.get(
        `http://127.0.0.1:8000/videos/${this.props.currentVideo.id.videoId}/`
      );
    }
    this.setState({
      comments: response,
      loading: false,
    });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.commentInput !== "") {
      this.postComment();
    }
    this.setState({
      commentInput: "",
    });
  };

  postComment = async () => {
    const videoId = this.props.currentVideo.id;
    console.log(this.state.commentInput);
    const data = {
      video_id: videoId,
      comment_text: this.state.commentInput,
    };
    await axios.post(
      `http://127.0.0.1:8000/videos/post_comment/${videoId}/`,
      data
    );
    this.getComments();
  };

  likeComment = async (comment) => {
    await axios.patch(
      `http://127.0.0.1:8000/videos/comments/like/${comment.id}/`
    );
    this.getComments();
  };

  dislikeComment = async (comment) => {
    await axios.patch(
      `http://127.0.0.1:8000/videos/comments/dislike/${comment.id}/`
    );
    this.getComments();
  };

  render() {
    if (this.state.loading) return null;
    else {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              {" "}
              Add Comment
              <input
                name="commentInput"
                type="text"
                onChange={this.handleChange}
              ></input>
              <button type="submit">Submit</button>
            </label>
          </form>
          <DisplayComments
            comments={this.state.comments}
            getReplies={this.getReplies}
            likeComment={this.likeComment}
            dislikeComment={this.dislikeComment}
          />
          <ReplyComments
            comments={this.state.comments}
            video={this.props.currentVideo}
            getReplies={this.state.replies}
          />
        </div>
      );
    }
  }
}

export default CommentsForm;
