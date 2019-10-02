import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import SearchBox from '../common/searchBox';
import './citySearch.css';

class CitySearch extends Component {
  state = {
    searchQuery: '',
  };

  handleSearch = query => {
    console.log('trigger');
    this.setState({ searchQuery: query });
  };

  render() {
    return (
      <Row className='h-100'>
        <Col className='text-center'>
          <h1>CityPop</h1>
          <h3>Search by city</h3>
          <SearchBox value={this.state.searchQuery} onChange={this.handleSearch} />
          <Button>Search</Button>
        </Col>
      </Row>
    );
  }
}

export default CitySearch;
