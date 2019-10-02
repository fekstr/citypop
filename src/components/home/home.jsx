import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import './home.css';

class Home extends Component {
  render() {
    return (
      <Row className='h-100'>
        <Col className='text-center'>
          <h1>CityPop</h1>
          <div class='buttons'>
            <Button size='lg'>Search by city</Button>
            <Button size='lg'>Search by country</Button>
          </div>
        </Col>
      </Row>
    );
  }
}

export default Home;
