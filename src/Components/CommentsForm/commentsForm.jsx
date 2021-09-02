import React, { Component } from "react";
import axios from "axios";
import "./commentsForm.css";
import DisplayComments from "../DisplayComments/displayComments";
import { Container, Row, Col } from "react-bootstrap";

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
  componentDidUpdate(prevProps) {
    console.log("we made it");
    if (
      prevProps.currentVideo.id.videoId !== this.props.currentVideo.id.videoId
    ) {
      this.getComments();
    }
  }

  getComments = async () => {
    const videoId = this.props.determineId();
    let response = await axios.get(`http://127.0.0.1:8000/videos/${videoId}/`);
    this.setState(
      {
        comments: response.data,
        loading: false,
      },
      this.getReplies
    );
  };

  getReplies = async () => {
    let replyData = [];

    await Promise.all(
      this.state.comments.map((comment) =>
        axios
          .get(`http://127.0.0.1:8000/videos/reply/${comment.id}/`)
          .then((response) => {
            if (response.data.length !== 0) {
              replyData.push(response.data);
            }
          })
      )
    );
    //merges array into single array, so in displaycomments it will only have to map over one array for the data
    let mergedReplyData = [].concat.apply([], replyData);
    this.setState({
      replies: mergedReplyData,
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
  };

  postComment = async () => {
    const videoId = this.props.determineId();
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

  handleReply = (event, reply, comment) => {
    event.preventDefault();
    if (reply !== "") {
      this.postReply(reply, comment);
    }
  };

  postReply = async (newReply, currentComment) => {
    const commentId = currentComment.id;
    const videoId = this.props.determineId();
    let reply = newReply;
    const data = {
      video_id: videoId,
      comment: commentId,
      comment_text: reply,
    };
    await axios.post(
      `http://127.0.0.1:8000/videos/post_reply/${commentId}/`,
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
          <Container>
            <Row>
              <Col sm={10}>
                <form className="comment_form mt-2" onSubmit={this.handleSubmit}>
                  <input
                    placeholder="Write a comment..."
                    className="comment_input"
                    name="commentInput"
                    type="text"
                    onChange={this.handleChange}
                  ></input>
                  <button className="comment_button ms-2 mb-2" type="submit">
                    Add Comment
                  </button>
                </form>
              </Col>
              <Col sm={2}></Col>
            </Row>
          </Container>
            <DisplayComments
            comments={this.state.comments}
            likeComment={this.likeComment}
            dislikeComment={this.dislikeComment}
            replies={this.state.replies}
            incrementCounter={this.incrementCounter}
            handleReply={this.handleReply}
            getReplies={this.getReplies}
          />
        </div>
      );
    }
  }
}

export default CommentsForm;
