import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

/**
 * Main app for REST Countries. Fetches all country data from API on mount.
 */

function App() {

  const [countries, setCountries] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    // load country data from api
  }, []);

  // if no dataLoaded, show loading spinner

  return (
    <div className="App">
      Hello, world.
    </div>
  );
}

export default App;
