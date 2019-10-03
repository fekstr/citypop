import React, { Component } from 'react';
import Search from '../../components/search/search';

class CitySearchContainer extends Component {
  state = {
    searchQuery: '',
    result: {},
  };

  handleSearch = query => {
    this.setState({ searchQuery: query });
  };

  submitSearch = async () => {
    this.props.history.push('/city/search?q=' + this.state.searchQuery);
    // const result = await getCity(this.state.searchQuery);
    // this.setState({ result });
  };

  render() {
    return (
      <Search
        searchQuery={this.state.searchQuery}
        handleSearch={this.handleSearch}
        submitSearch={this.submitSearch}
        label='Search by city'
        placeholder='Enter a city...'
      />
    );
  }
}

export default CitySearchContainer;
