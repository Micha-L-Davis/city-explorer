import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

class Movies extends React.Component {

  getListItemArray = () => {
    let result = [];
    this.props.movieData.forEach((movie, index) => {
      result.push(
        <ListGroup.Item key={`${movie.title}-${index}`}>
          {movie.title}
        </ListGroup.Item>
      );
    });
    return result;
  };

  render() {
    return (
      <>
        <ListGroup.Item key="movie-section"><strong>Top 20 Movies about {this.props.city}</strong></ListGroup.Item>
        {this.getListItemArray()}
      </>
    );
  }
}

export default Movies;