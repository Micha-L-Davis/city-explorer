import React from "react";
import { Form, Button, Image, ListGroup, Modal, Row, Col } from "react-bootstrap";
import axios from "axios";
import Error from "./Error"

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchRequest: '',
      searchResults: [],
      errorMessage: '',
      showModal: false
    }
  }

  handleCloseModal = () => this.setState({ showModal: false })

  handleSearchRequest = (event) => {
    this.setState({searchRequest: event.target.value})
  }

  handleFetchCityData = async (event) => {
    event.preventDefault();
    try{
      let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.searchRequest}&format=json`
      let cityData = await axios.get(url);
      let mapURL = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${cityData.data[0].lat},${cityData.data[0].lon}&zoom=13`

      this.setState({
        searchResults: [
          <ListGroup.Item><Image 
            roundedCircle={true} 
            src={mapURL} 
            alt={`A map of ${cityData.data[0].display_name}`} 
            width={400}
            height={400}
          /></ListGroup.Item>,
          <ListGroup.Item>{`City: ${cityData.data[0].display_name}`}</ListGroup.Item>,
          <ListGroup.Item>{`Latitude: ${cityData.data[0].lat}`}</ListGroup.Item>,
          <ListGroup.Item>{`Longitude: ${cityData.data[0].lon}`}</ListGroup.Item>
        ]
      })
    }
    catch (error){
      console.log(error.response.data);
      this.setState({
        errorMessage: `${error.response.status}: ${error.response.data.error}`,
        showModal: true
      })
    }
  }

  render() {
    return (
      <main>
        <Form onSubmit={this.handleFetchCityData}>
          <Form.Group as={Row}>
            <Form.Label>Where will you explore?</Form.Label>
            <Col sm={9}>
              <Form.Control onChange={this.handleSearchRequest} type="text" name="search" id="input-search" placeholder="Enter a city name..." />
            </Col>
            <Col>
              <Button variant="info" type="submit" >Explore!</Button>
            </Col>
          </Form.Group>
          
        </Form>
        <ListGroup>
          {this.state.searchResults}
        </ListGroup>
        <Modal show={this.state.showModal} onHide={this.handleCloseModal}>
          <Error errorMessage={this.state.errorMessage}/>
        </Modal>
      </main>
    );
  }
}

export default Main;
