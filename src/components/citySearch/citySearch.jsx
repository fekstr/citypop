import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import SearchBox from '../common/searchBox';
import { getCity } from '../../services/cityService';
import './citySearch.css';

class CitySearch extends Component {
  state = {
    searchQuery: '',
    result: {},
  };

  handleSearch = query => {
    console.log('trigger');
    this.setState({ searchQuery: query });
  };

  submitSearch = async () => {
    // TODO: move to container
    const result = await getCity(this.state.searchQuery);
    this.setState({ result });
  };

  render() {
    return (
      <Row className='h-100'>
        <Col className='text-center'>
          <h1>CityPop</h1>
          <h3>Search by city</h3>
          <SearchBox value={this.state.searchQuery} onChange={this.handleSearch} />
          <Button onClick={this.submitSearch}>Search</Button>
        </Col>
      </Row>
    );
  }
}

export default CitySearch;
