import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

class Movie extends React.Component {
  render() {
    return (
      <ListGroup.Item>
        {this.props.movie.title}
      </ListGroup.Item>
    );
  }
}

export default Movie;
