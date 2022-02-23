import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

class Weather extends React.Component {
  render() {
    return (
      <>
        <ListGroup.Item>3-Day Forecast</ListGroup.Item>
        <ListGroup.Item>{this.props.wxData.data[0].date}: {this.props.wxData.data[0].description}</ListGroup.Item>
        <ListGroup.Item>{this.props.wxData.data[1].date}: {this.props.wxData.data[1].description}</ListGroup.Item>
        <ListGroup.Item>{this.props.wxData.data[2].date}: {this.props.wxData.data[2].description}</ListGroup.Item>
      </>
    );
  }
}

export default Weather;