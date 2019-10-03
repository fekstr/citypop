import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.css';
import Home from './components/Home/home';
import CitySearchContainer from './containers/citySearchContainer/citySearchContainer';
import CityInfoContainer from './containers/cityInfoContainer/cityInfoContainer';
import CityResultsContainer from './containers/cityResultsContainer/cityResultsContainer';
import CountrySearchContainer from './containers/countrySearchContainer/countrySearchContainer';
import CountryResultsContainer from './containers/countryResultsContainer/countryResultsContainer';

function App() {
  return (
    <Container className='h-100'>
      <Switch>
        <Route path='/city/search' component={CityResultsContainer} />
        <Route path='/city/:id' component={CityInfoContainer} />
        <Route path='/city' component={CitySearchContainer} />
        {/* <Route path='/country/:id' component={CountryData} /> */}
        <Route path='/country/search' component={CountryResultsContainer} />
        <Route path='/country' component={CountrySearchContainer} />
        {/* <Route path='/not-found' component={NotFound} /> */}
        <Route path='/' component={Home} />
      </Switch>
    </Container>
  );
}

export default App;
