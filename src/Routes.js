import React from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import CountryList from './CountryList';
import CountryDetailParams from './CountryDetailParams';

/**
 * Main routes for the app
 */

function Routes({ countries }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'><CountryList countries={countries} /></Route>
        <Route exact path='/country/:code'><CountryDetailParams countries={countries} /></Route>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;