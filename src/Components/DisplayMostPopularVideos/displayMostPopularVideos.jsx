import React from "react";
import { Link } from "react-router-dom";
import { Card, Button, Container, Row } from "react-bootstrap";
import "./displayMostPopularVideos.css";

const DisplayMostPopularVideos = (props) => {
  return (
      <Container fluid className='video-container'>
<Row className="justify-content-center">
  {props.mostPopularVideos.map((video) => {
    return (
      <React.Fragment key={video.id}>
        <Card className="card-container" style={{ width: "18rem" }}>
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

// PREVIOUS CARD  MAY REUSE LATER
// 
// <div className="card-list">
// {props.mostPopularVideos.map((video) => {
//   return (
//     <div className="card-container">
//       <img alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
//       <h1>{video.snippet.title}</h1>
//       <Link to={`/watchVideo/${video.id}/`}>
//         <button
//           className="card-button"
//           onClick={() => {
//             props.getVideo(video);
//           }}
//         >
//           Watch Video
//         </button>
//       </Link>
//     </div>
//   );
// })}
// </div>
// );
// };

