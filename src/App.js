import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import Home from './components/home/home';
import CitySearchContainer from './containers/citySearchContainer/citySearchContainer';
import CityInfoContainer from './containers/cityInfoContainer/cityInfoContainer';
import CityResultsContainer from './containers/cityResultsContainer/cityResultsContainer';
import CountrySearchContainer from './containers/countrySearchContainer/countrySearchContainer';
import CountryResultsContainer from './containers/countryResultsContainer/countryResultsContainer';
import './App.css';

function App() {
  return (
    <Container className='h-100'>
      <Row className='justify-content-center'>
        <h1 className='header'>CityPop</h1>
      </Row>
      <Switch>
        <Route path='/city/search' component={CityResultsContainer} />
        <Route path='/city/:id' component={CityInfoContainer} />
        <Route path='/city' component={CitySearchContainer} />
        <Route path='/country/search' component={CountryResultsContainer} />
        <Route path='/country' component={CountrySearchContainer} />
        {/* <Route path='/not-found' component={NotFound} /> */}
        <Route exact path='/' component={Home} />
      </Switch>
    </Container>
  );
}

export default App;
