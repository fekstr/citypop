import React, { Component } from 'react';
import { getCities } from '../services/cityService';
import queryString from 'query-string';
import _ from 'lodash';

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
      <div>
        <h1>Search results</h1>
        {!_.isEmpty(this.state.result) &&
          this.state.result.map(city => (
            <React.Fragment>
              <h1>{city.name}</h1>
              <h2>{city.country}</h2>
              <h2>{city.province}</h2>
              <h3>{city.population}</h3>
            </React.Fragment>
          ))}
      </div>
    );
  }
}

export default SearchContainer;
