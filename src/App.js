import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.css';
import Home from './components/home/home';
import CitySearch from './components/citySearch/citySearch';

function App() {
  return (
    <Container className='h-100'>
      <Switch>
        {/* <Route path='/city/:id' component={CityData} /> */}
        <Route path='/city' component={CitySearch} />
        {/* <Route path='/country/:id' component={CountryData} />
        <Route path='/country' component={CountrySearch} />
        <Route path='/not-found' component={NotFound} /> */}
        <Route path='/' component={Home} />
      </Switch>
    </Container>
  );
}

export default App;
