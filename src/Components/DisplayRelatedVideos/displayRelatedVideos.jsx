import React from 'react';
import { Card, Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const DisplayRelatedVideos = (props) => {
  // PUT FILTERED VIDEOS LOGIC ON WATCHVIDEO COMPONENT AND PASS TO DISPLAYRELATED VIDEOS COMPONENT
  let filteredVideos = props.relatedVideos.filter(video => {
    if (video.snippet !== undefined){
      return video
    }
  }
    ) 
  return ( 
    <Container fluid>
      <Row>
        {filteredVideos.map((video) => {
          return (
            <Card className="box" style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={video.snippet.thumbnails.medium.url}
              />
              <Card.Body>
                <Card.Title>{video.snippet.title}</Card.Title>
                <Link to={`/watchVideo/${video.id}`}>
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