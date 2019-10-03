import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import SearchBox from '../common/searchBox';
import './citySearch.css';

const CitySearch = props => {
  const { searchQuery, handleSearch, submitSearch } = props;

  return (
    <Row className='h-100'>
      <Col className='text-center'>
        <h1>CityPop</h1>
        <h3>Search by city</h3>
        <SearchBox value={searchQuery} onChange={handleSearch} />
        <Button onClick={submitSearch}>Search</Button>
      </Col>
    </Row>
  );
};

export default CitySearch;
