import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import './home.css';

class Home extends Component {
  render() {
    return (
      <div className='home'>
        <Row className='h-100'>
          <Col className='text-center'>
            <h1>CityPop</h1>
            <div className='buttons'>
              <Button href='/city' size='lg'>
                Search by city
              </Button>
              <Button size='lg'>Search by country</Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
