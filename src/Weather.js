import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

class Weather extends React.Component {
  getListItemArray = () => {
    let result = [];
    this.props.wxData.data.forEach((data) => {
      result.push(
        <ListGroup.Item key={data.date}>
          {data.date}: {data.description}
        </ListGroup.Item>
      );
    });
    return result;
  }

  render() {
    return (
      <>
        <ListGroup.Item key="weather-section">
          <strong>3-Day Forecast</strong>
        </ListGroup.Item>
        {this.getListItemArray()}
      </>
    );
  }
}

export default Weather;