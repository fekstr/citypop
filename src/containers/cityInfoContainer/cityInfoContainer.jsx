import React, { Component } from 'react';
import { getCityById } from '../../services/cityService';
import { ClipLoader } from 'react-spinners';
import { Row, Col, Card } from 'react-bootstrap';
import _ from 'lodash';

class CityInfoContainer extends Component {
  state = {
    city: {},
  };

  async componentDidMount() {
    const city = await getCityById(this.props.match.params.id);
    this.setState({ city });
  }

  render() {
    const { city } = this.state;

    return (
      <Row className='justify-content-center'>
        <Col xs='12' lg='8' className='text-center'>
          {!_.isEmpty(city) ? (
            <React.Fragment>
              <h2>{city.name}</h2>
              <h3>
                {city.province}, {city.country}
              </h3>
              <br />
              <Card className='bg-light'>
                <Card.Body>
                  <Card.Title>Population</Card.Title>
                  <h3>{this.addNumberSpacing(city.population)}</h3>
                </Card.Body>
              </Card>
            </React.Fragment>
          ) : (
            <div className='spinner'>
              <ClipLoader sizeUnit={'px'} size={100} color={'#123abc'} loading={_.isEmpty(this.state.result)} />
            </div>
          )}
        </Col>
      </Row>
    );
  }
  addNumberSpacing(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }
}

export default CityInfoContainer;
