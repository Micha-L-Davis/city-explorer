import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import WeatherDay from "./WeatherDay"

class Weather extends React.Component {
  getListItemArray = () => {
    let result = [];
    this.props.wxData.data.forEach((data) => {
      result.push(
        <WeatherDay data={data} key={data.date}/>
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