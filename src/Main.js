import React from "react";
import { Form, Button } from "react-bootstrap";
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

    this.setState({
      searchResults: [
        <li>{`City: ${cityData.data[0].display_name}`}</li>,
        <li>{`Latitude: ${cityData.data[0].lat}`}</li>,
        <li>{`Longitude: ${cityData.data[0].lon}`}</li>
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
          <Button type="submit" variant="info">Explore!</Button>
        </Form>
        <ul>
          {this.state.searchResults}
        </ul>
      </main>
    );
  }
}

export default Main;
