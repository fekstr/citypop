import React, { Component } from 'react';
import { getCities } from '../../services/cityService';
import { Row, Col } from 'react-bootstrap';
import List from '../../components/common/List/list';
import queryString from 'query-string';
import _ from 'lodash';
import './searchContainer.css';

class SearchContainer extends Component {
  state = {
    result: {},
  };

  async componentDidMount() {
    const query = queryString.parse(this.props.location.search);
    const result = await getCities(query.q);
    this.setState({ result });
  }

  render() {
    return (
      <div className='searchContainer'>
        <Row className='justify-content-center'>
          <Col xs='12' className='text-center'>
            <div className='header'>
              <h1>Search results</h1>
            </div>
            {!_.isEmpty(this.state.result) && this.renderList()}
          </Col>
        </Row>
      </div>
    );
  }

  renderList() {
    const items = this.state.result.map(city => {
      return { id: city.id, head: city.name, sub1: city.province, sub2: city.country };
    });

    console.log(items);

    return <List items={items} />;
  }
}

export default SearchContainer;
