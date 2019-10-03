import React, { Component } from 'react';
import CitySearch from '../components/citySearch/citySearch';

class CityContainer extends Component {
  state = {
    searchQuery: '',
    result: {},
  };

  handleSearch = query => {
    this.setState({ searchQuery: query });
  };

  submitSearch = async () => {
    this.props.history.push('/search?q=' + this.state.searchQuery);
    // const result = await getCity(this.state.searchQuery);
    // this.setState({ result });
  };

  render() {
    return (
      <CitySearch
        searchQuery={this.state.searchQuery}
        handleSearch={this.handleSearch}
        submitSearch={this.submitSearch}
      />
    );
  }
}

export default CityContainer;
