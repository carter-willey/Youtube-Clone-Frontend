import React, { Component } from "react";
import axios from "axios";
import DisplayComments from "../DisplayComments/displayComments";

class CommentsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      loading: true,
      commentInput: "",
    };
  }

  componentDidMount() {
    this.getComments();
  }

  getComments = async () => {
    console.log("hello world");
    let response;
    if (typeof(this.props.currentVideo.id) === "string") {
      response = await axios.get(
        `http://127.0.0.1:8000/videos/${this.props.currentVideo.id}/`
      );
    }
    if (typeof(this.props.currentVideo.id) === "object") {
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
  render() {
    console.log(this.props.currentVideo);
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
          <DisplayComments comments={this.state.comments} />
        </div>
      );
    }
  }
}

export default CommentsForm;
