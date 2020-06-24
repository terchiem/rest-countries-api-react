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
  const BASE_URL = "https://restcountries.eu/rest/v2/all";

  const [countries, setCountries] = useState({});
  const [dataLoaded, setDataLoaded] = useState(false);


  useEffect(() => {
    async function getCountries() {
      try {
        const result = await axios.get(BASE_URL);
        const countriesObj = {};

        for (let c of result.data) {
          countriesObj[c.alpha3Code] = {
            name: c.name,
            code: c.alpha3Code,
            nativeName: c.nativeName,
            population: c.population,
            region: c.region,
            subregion: c.subregion,
            capital: c.capital,
            topLevelDomain: c.topLevelDomain,
            currencies: c.currencies,
            languages: c.languages.map(l => l.name),
            borders: c.borders,
            flag: c.flag
          }
        }

        setCountries(countriesObj);
        setDataLoaded(true);
      } catch (err) {
        console.error("Something happened!!", err)
      }
    }

    getCountries();
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
