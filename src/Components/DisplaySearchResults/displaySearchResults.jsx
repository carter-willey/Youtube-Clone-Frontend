import React from "react";
import { Link } from "react-router-dom";
import { Card, Button, Container, Row } from "react-bootstrap";
import './displaySearchResults.css'

const DisplaySearchResults = (props) => {
  return (
    <Container fluid className="video-container">
      <Row className="justify-content-center">
        {props.searchResults.map((video) => {
          return (
            <Card className="card-container m-2" style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={video.snippet.thumbnails.medium.url}
              />
              <Card.Body className="text-center">
                <Card.Title style={{color: "white"}}>{video.snippet.title}</Card.Title>
                <Link to={`/watchVideo/${video.id.videoId}`}>
                  <Button
                  className="mt-3"
                    onClick={() => {
                      props.getVideo(video);
                    }}
                  >
                    Watch Video
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          );
        })}
      </Row>
    </Container>
  );
};

export default DisplaySearchResults;
