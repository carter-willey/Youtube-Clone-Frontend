import React from "react";
import { Link } from "react-router-dom";
import { Card, Button, Container, Row } from "react-bootstrap";

const DisplayMostPopularVideos = (props) => {
  return (
    <Container fluid>
      <Row className="justify-content-center">
        {props.mostPopularVideos.map((video) => {
          return (
            <React.Fragment key={video.id}>
              <Card className="box" style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={video.snippet.thumbnails.medium.url}
                />
                <Card.Body>
                  <Card.Title>{video.snippet.title}</Card.Title>
                  <Link to={`/watchVideo/${video.id}/`}>
                    <Button
                      onClick={() => {
                        props.getVideo(video);
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

export default DisplayMostPopularVideos;
