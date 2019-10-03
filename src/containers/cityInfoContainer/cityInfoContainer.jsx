import React, { Component } from 'react';
import { getCityById } from '../../services/cityService';
import { Row, Col, Card } from 'react-bootstrap';
import _ from 'lodash';

class CityInfoContainer extends Component {
  state = {
    city: {},
  };

  async componentDidMount() {
    console.log(this.props.match.params.id);
    const city = await getCityById(this.props.match.params.id);
    console.log(city);
    this.setState({ city });
  }

  render() {
    const { city } = this.state;

    return (
      <Row className='h-100'>
        <Col className='text-center'>
          <h1>CityPop</h1>
          {!_.isEmpty(city) && (
            <React.Fragment>
              <h2>{city.name}</h2>
              <h3>
                {city.province}, {city.country}
              </h3>
              <Card>
                <Card.Body>
                  <Card.Title>Population</Card.Title>
                  <h3>{city.population}</h3>
                </Card.Body>
              </Card>
            </React.Fragment>
          )}
        </Col>
      </Row>
    );
  }
}

export default CityInfoContainer;
