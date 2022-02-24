import React from 'react';
import { ListGroup, Image } from 'react-bootstrap';

class Location extends React.Component {
  render() {

    return (
      <>
        <ListGroup.Item key="map">
          <Image
            roundedCircle={true}
            src={this.props.mapURL}
            alt={`A map of ${this.props.cityData.data[0].display_name}`}
            width={400}
            height={400}
          />
        </ListGroup.Item>
        <ListGroup.Item key="city">
          <strong>{this.props.cityData.data[0].display_name}</strong>
        </ListGroup.Item>
        <ListGroup.Item key="lat-lon">
          {`${this.props.cityData.data[0].lat} ${this.props.cityData.data[0].lon}`}
        </ListGroup.Item>
      </>
    );
  }
}

export default Location;
