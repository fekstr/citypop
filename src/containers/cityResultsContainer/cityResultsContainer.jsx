import React, { Component } from 'react';
import { getCities } from '../../services/cityService';
import { Row, Col, Button } from 'react-bootstrap';
import { ClipLoader } from 'react-spinners';
import { Link } from 'react-router-dom';
import List from '../../components/common/List/list';
import queryString from 'query-string';
import _ from 'lodash';
import './cityResultsContainer.css';

class CityResultsContainer extends Component {
  state = {
    result: {},
    query: '',
  };

  async componentDidMount() {
    const query = queryString.parse(this.props.location.search);
    this.setState({ query: query.q });
    const result = await getCities(query.q);
    this.setState({ result });
  }

  render() {
    return (
      <div className='cityResultsContainer'>
        <Row className='justify-content-center'>
          <Col xs='12' lg='10' className='text-center'>
            {!_.isEmpty(this.state.result) ? (
              this.renderList()
            ) : (
              <div className='spinner'>
                <ClipLoader sizeUnit={'px'} size={100} color={'#123abc'} loading={_.isEmpty(this.state.result)} />
              </div>
            )}
          </Col>
        </Row>
      </div>
    );
  }

  renderList() {
    if (this.state.result === 'Not found') {
      return (
        <React.Fragment>
          <h3 className='mb-4'>No cities found for '{this.state.query}'</h3>
          <Link to='/city'>
            <Button size='lg'>Back to search</Button>
          </Link>
        </React.Fragment>
      );
    }

    const items = this.state.result.map(city => {
      return {
        key: city.geonameId,
        link: `/city/${city.geonameId}`,
        head: city.name,
        sub1: city.province,
        sub2: city.country,
      };
    });

    return (
      <React.Fragment>
        <div className='search-header'>
          <h2>Results for '{this.state.result[0].name}'</h2>
        </div>
        <List items={items} />
      </React.Fragment>
    );
  }
}

export default CityResultsContainer;
