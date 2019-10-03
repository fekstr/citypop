import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.css';
import Home from './components/home/home';
import CityContainer from './containers/cityContainer';
import SearchContainer from './containers/searchContainer';

function App() {
  return (
    <Container className='h-100'>
      <Switch>
        {/* <Route path='/city/:id' component={CityData} /> */}
        <Route path='/search' component={SearchContainer} />
        <Route path='/city' component={CityContainer} />
        {/* <Route path='/country/:id' component={CountryData} />
        <Route path='/country' component={CountrySearch} />
        <Route path='/not-found' component={NotFound} /> */}
        <Route path='/' component={Home} />
      </Switch>
    </Container>
  );
}

export default App;
