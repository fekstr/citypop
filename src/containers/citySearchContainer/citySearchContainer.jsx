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
  };

  handleKeyPress = key => {
    if (key === 'Enter') this.submitSearch();
  };

  render() {
    return (
      <Search
        searchQuery={this.state.searchQuery}
        handleSearch={this.handleSearch}
        handleKeyPress={this.handleKeyPress}
        submitSearch={this.submitSearch}
        label='Search by city'
        placeholder='Enter a city...'
      />
    );
  }
}

export default CitySearchContainer;
