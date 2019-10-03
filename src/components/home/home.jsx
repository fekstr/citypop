import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './home.css';

class Home extends Component {
  render() {
    return (
      <div className='home'>
        <Row className='h-100'>
          <Col className='text-center'>
            <div className='buttons'>
              <Link to='/city'>
                <Button size='lg'>Search by city</Button>
              </Link>
              <Link to='/country'>
                <Button size='lg'>Search by country</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
