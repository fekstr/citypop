import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import SearchBox from '../common/searchBox';
import './search.css';

const Search = props => {
  const { searchQuery, handleSearch, submitSearch, label, placeholder } = props;

  return (
    <Row className='h-100'>
      <Col className='text-center'>
        <h1>CityPop</h1>
        <h3>{label}</h3>
        <SearchBox value={searchQuery} onChange={handleSearch} placeholder={placeholder} />
        <Button onClick={submitSearch}>Search</Button>
      </Col>
    </Row>
  );
};

export default Search;
