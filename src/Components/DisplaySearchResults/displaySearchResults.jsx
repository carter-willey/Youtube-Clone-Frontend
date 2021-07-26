import React from 'react';
import { Link } from "react-router-dom";
import { Card, Button, Container, Row } from "react-bootstrap";

const DisplaySearchResults = (props) => {
  console.log(props.searchResults);
  return ( 
    <Container fluid >
      <Row className="justify-content-center">
        {props.searchResults.map((video) => {
          console.log('hellos');
          return (
            <Card className="box" style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={video.snippet.thumbnails.medium.url}
              />
              <Card.Body>
                <Card.Title>{video.snippet.title}</Card.Title>
                <Link to={`/search/${video.id.videoId}`}>
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
 
export default DisplaySearchResults;