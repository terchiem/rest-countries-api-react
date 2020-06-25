import React, { useState } from 'react';
import './CountryList.css';

import CountryCard from './CountryCard';

/**
 * Presentational component that displays a list of CountryCards
 * populated by the countries prop.
 */

function CountryList({ countries }) {

  const [searchTerm, setSearchTerm] = useState("");
  const [filterRegion, setFilterRegion] = useState(null);

  const countryList = Object.keys(countries);


  /** Creates a CountryCard for each country */
  function renderCountries() {
    return countryList.map(code => <CountryCard key={code} country={countries[code]} />)
  }

  return (
    <div className="CountryList">

      <div className="CountryList-filter">
        <input type="text" />
        <select name="region" id="region">
          <option value="hello">Hello</option>
        </select>
      </div>

      <div className="CountryList-container">
        {renderCountries()}
      </div>

    </div>
  )
}


export default CountryList;