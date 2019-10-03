import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import SearchBox from '../common/searchBox';
import './search.css';

const Search = props => {
  const { searchQuery, handleSearch, handleKeyPress, submitSearch, label, placeholder } = props;

  return (
    <Row className='h-100 d-flex justify-content-center'>
      <Col xs='12' lg='6' className='text-center'>
        <div className='search'>
          <h3>{label}</h3>
          <SearchBox
            value={searchQuery}
            onChange={handleSearch}
            onKeyPress={handleKeyPress}
            placeholder={placeholder}
          />
          <Button onClick={submitSearch}>Search</Button>
        </div>
      </Col>
    </Row>
  );
};

export default Search;
