import React from "react";
import { Card, Button, Container, Row } from "react-bootstrap";
import './displayRelatedVideos.css'
import { Link } from "react-router-dom";
const DisplayRelatedVideos = (props) => {
  let getRelatedVideos = props.getRelatedVideos
  let filteredVideos = props.relatedVideos.filter((video) => {
    if (video.snippet !== undefined) {
      return video;
    }
  });
  return (
    <Container fluid className="video-container">
      <Row className="justify-content-center">
        {filteredVideos.map((video) => {
          return (
            <React.Fragment key={video.id.videoId}>
              <Card className="card-container m-2" style={{ width: "18rem", backgroundColor: '#16181b', borderColor: "#16181b" }}>
                <Card.Img
                  variant="top"
                  src={video.snippet.thumbnails.medium.url}
                />
                <Card.Body className="text-center">
                  <Card.Title style={{color: "white"}}>{video.snippet.title}</Card.Title>
                  <Link to={`/watchVideo/${video.id.videoId}`}>
                    <Button
                    className="mt-3"
                      variant="primary"
                      onClick={() => {
                        props.getVideo(video);
                        getRelatedVideos()
                      }}
                    >
                      Watch Video
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </React.Fragment>
          );
        })}
      </Row>
    </Container>
  );
};

export default DisplayRelatedVideos;
