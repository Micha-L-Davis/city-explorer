import React from 'react';
import ListGroup from "react-bootstrap/ListGroup";

class WeatherDay extends React.Component {
  render() {
    return (
      <ListGroup.Item>
        {this.props.data.date}: {this.props.data.description}
      </ListGroup.Item>
    )
  }
}

export default WeatherDay;
