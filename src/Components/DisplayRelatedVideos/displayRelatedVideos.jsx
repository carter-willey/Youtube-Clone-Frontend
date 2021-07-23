import React from 'react';
import { Card, Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const DisplayRelatedVideos = (props) => {
  // if (props.relatedVideos[0]  === undefined) {
  //   props.history.push("/")
  // }
  return ( 
  
    <Container fluid>
      <Row>
        {props.relatedVideos.map((video) => {
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
}
 
export default DisplayRelatedVideos;