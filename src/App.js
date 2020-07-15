import React, { useEffect, useState } from 'react';
import { fetchCountries } from './actions';
import { getLoading } from './selectors';
import { connect } from 'react-redux';
import { useLocalStorage } from './utils';

import Header from './Header';
import Routes from './Routes';
import LoadingSpinner from './LoadingSpinner';
import THEME from './themes';
import './App.css';


/**
 * Main app for REST Countries. Fetches all country data from API on mount.
 */

function App({ loading, dispatchFetchCountries }) {

  const [theme, setTheme] = useLocalStorage('countries-theme', 'light');

  // fetch all countries from API and format for state
  useEffect(() => {
    dispatchFetchCountries();
  }, [dispatchFetchCountries]);

  // handle theme switching
  useEffect(() => {
    const currentTheme = THEME[theme];

    Object.keys(currentTheme).forEach(k => {
      const key = `--${k}`;
      const value = currentTheme[k];
      document.body.style.setProperty(key, value);
    });
  }, [theme]);

  return (
    <div className="App">
      <Header theme={theme} setTheme={setTheme} />

      <div className="App-container">
        {loading ?
          <LoadingSpinner /> :
          <Routes />
        }
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({ loading: getLoading(state) });

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchFetchCountries: () => { dispatch(fetchCountries()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
