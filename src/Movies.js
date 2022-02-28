import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Movie from "./Movie"

class Movies extends React.Component {

  getListItemArray = () => {
    let result = [];
    try{
      this.props.movieData.forEach((movie, index) => {
        result.push(
          <Movie movie={movie} key={`${movie.title}-${index}`}/>
        );
      });
    }
    catch (error) {
      console.log('Movie data = ' + this.props.movieData + ' Error: ' + error.message);
    }
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
