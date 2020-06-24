import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

import Header from './Header';
import Routes from './Routes';
import LoadingSpinner from './LoadingSpinner';

/**
 * Main app for REST Countries. Fetches all country data from API on mount.
 */

function App() {

  const [countries, setCountries] = useState({});
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    // load country data from api
  }, []);


  return (
    <div className="App">
      <Header />

      {dataLoaded ?
        <Routes countries={countries} /> :
        <LoadingSpinner />
      }
    </div>
  );
}

export default App;
