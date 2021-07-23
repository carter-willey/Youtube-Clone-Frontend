import React from "react";
import { Link } from "react-router-dom";
import { Card, Button, Container, Row } from "react-bootstrap";

const DisplayMostPopularVideos = (props) => {
  return (
    <Container fluid>
      <Row>
        {props.mostPopularVideos.map((video) => {
          return (
            <Card className="box" style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={video.snippet.thumbnails.medium.url}
              />
              <Card.Body>
                <Card.Title>{video.snippet.title}</Card.Title>
                <Link to="/watchVideo/">
                  <Button variant="primary" onClick={() => {
                    props.getVideo(video)
                  }}>Watch Video</Button>
                </Link>
              </Card.Body>
            </Card>
          );
        })}
      </Row>
    </Container>
  );
};

export default DisplayMostPopularVideos;
