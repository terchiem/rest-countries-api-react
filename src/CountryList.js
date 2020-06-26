import React, { useState } from 'react';
import '@fortawesome/fontawesome-free';
import './CountryList.css';

import CountryCard from './CountryCard';

/**
 * Presentational component that displays a list of CountryCards
 * populated by the countries prop.
 */

function CountryList({ countries }) {

  const [searchTerm, setSearchTerm] = useState("");
  const [filterRegion, setFilterRegion] = useState(null);



  /** Creates a CountryCard for each country */
  function renderCountries() {
    const countryList = Object.keys(countries);

    // fill list with dummies until rows full
    const dummies = countryList.length % 4;
    for (let i = 1; i <= dummies; i++) {
      countryList.push(`D-${i}`);
    }

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