import React from "react";
import { Form, Button, Image, ListGroup } from "react-bootstrap";
import axios from "axios";

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchRequest: '',
      searchResults: []
    }
  }


  handleSearchRequest = (event) => {
    this.setState({searchRequest: event.target.value})
  }

  handleFetchCityData = async (event) => {
    event.preventDefault();

    let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.searchRequest}&format=json`
    let cityData = await axios.get(url);
    let mapURL = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${cityData.data[0].lat},${cityData.data[0].lon}&zoom=13`

    this.setState({
      searchResults: [
        <Image 
          roundedCircle={true} 
          src={mapURL} 
          alt={`A map of ${cityData.data[0].display_name}`} 
          width={400}
          height={400}
        />,
        <ListGroup.Item>{`City: ${cityData.data[0].display_name}`}</ListGroup.Item>,
        <ListGroup.Item>{`Latitude: ${cityData.data[0].lat}`}</ListGroup.Item>,
        <ListGroup.Item>{`Longitude: ${cityData.data[0].lon}`}</ListGroup.Item>
      ]
    })
  }

  render() {
    return (
      <main>
        <Form onSubmit={this.handleFetchCityData}>
          <Form.Group>
            <Form.Label>Where will you explore?</Form.Label>
            <Form.Control onChange={this.handleSearchRequest} type="text" name="search" id="input-search" placeholder="Enter a city name..." />
          </Form.Group>
          <Button variant="info" type="submit" >Explore!</Button>
        </Form>
        <ListGroup>
          {this.state.searchResults}
        </ListGroup>
      </main>
    );
  }
}

export default Main;
