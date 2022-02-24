import React from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';

class SearchForm extends React.Component {
  handleFetchCityData = (event) => this.props.handleFetchCityData(event);
  handleSearchRequest = (event) => this.props.handleSearchRequest(event);

  render() {
    return (
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
    );
  }
}

export default SearchForm;
