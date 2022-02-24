import React from "react";
import { ListGroup, Modal } from "react-bootstrap";
import axios from "axios";
import SearchForm from "./SearchForm";
import Location from "./Location";
import Weather from "./Weather";
import Movies from "./Movies";
import Error from "./Error";


class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchTerm: '',
      searchResults: [],
      errorMessage: '',
      showModal: false,
      wxData: false,
      movieData: false
    }
  }

  handleCloseModal = () => this.setState({ showModal: false });

  handleSearchRequest = (event) => {
    this.setState({searchTerm: event.target.value})
  };

  handleFetchCityData = async (event) => {
    event.preventDefault();
    try{
      let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.searchTerm}&format=json`
      let cityData = await axios.get(url);
      
      let mapURL = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${cityData.data[0].lat},${cityData.data[0].lon}&zoom=13`
      
      let wxURL = `${process.env.REACT_APP_SERVER}/weather?lat=${cityData.data[0].lat}&lon=${cityData.data[0].lon}`
      let wxData = await axios.get(wxURL);

      let moviesURL = `${process.env.REACT_APP_SERVER}/movies?location=${this.state.searchTerm}`
      let movieData = await axios.get(moviesURL);

      this.setState({
        searchResults: <Location cityData={cityData} mapURL={mapURL} />,
        wxData: wxData, 
        movieData: movieData
      })
    }
    catch (error){
      this.setState({
        errorMessage: `${error.response.status}: ${error.response.data.error ? error.response.data.error : 'Something went wrong'}`,
        showModal: true
      })
    }
  };

  render() {
    return (
      <main>
        <SearchForm handleFetchCityData={this.handleFetchCityData} handleSearchRequest={this.handleSearchRequest}/>

        <ListGroup>
          {this.state.searchResults}
          {
            this.state.wxData &&
              <Weather wxData={this.state.wxData} />
          }
          {
            this.state.movieData &&
              <Movies movieData={this.state.movieData.data.movies} city={this.state.searchTerm} />
          }
        </ListGroup>
        <Modal show={this.state.showModal} onHide={this.handleCloseModal}>
          <Error errorMessage={this.state.errorMessage}/>
        </Modal>
      </main>
    );
  }
}

export default Main;
