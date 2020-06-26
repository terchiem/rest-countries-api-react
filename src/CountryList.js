import React, { useState } from 'react';
import './CountryList.css';

import CountryCard from './CountryCard';

const REGIONS = new Set(['Africa', 'Americas', 'Asia', 'Europe', 'Oceania', 'Polar']);

/**
 * Presentational component that displays a list of CountryCards
 * populated by the countries prop.
 */

function CountryList({ countries }) {

  const [searchTerm, setSearchTerm] = useState("");
  const [filterRegion, setFilterRegion] = useState(null);




  /** Creates a CountryCard for each country */
  function renderCountries() {
    let countryList = Object.keys(countries);

    // filter by region if selected
    if (filterRegion) {
      countryList = countryList.filter(c => countries[c].region === filterRegion);
    }

    // filter if search term is present
    if (searchTerm) {
      countryList = countryList.filter(c => countries[c].name.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    // fill list with dummies until rows full
    const dummies = countryList.length % 4;
    for (let i = 1; i <= dummies; i++) {
      countryList.push(`D-${i}`);
    }

    return countryList.map(code => <CountryCard key={code} country={countries[code]} />)
  }

  /** Update state of search input on change */
  function handleChange(evt) {
    setSearchTerm(evt.target.value);
  }

  /** Update filter region on selection */
  function handleSelect(evt) {
    const region = REGIONS.has(evt.target.value) ? evt.target.value : null;
    setFilterRegion(region);
  }

  return (
    <div className="CountryList">

      <div className="CountryList-filter">
        <input
          type="text"
          name="search"
          ariaLabel="Search"
          value={searchTerm}
          placeholder="Search for a country..."
          onChange={handleChange}
        />
        <select
          name="region"
          id="region"
          value={filterRegion}
          onChange={handleSelect}
        >
          {["Filter by Region", ...REGIONS].map(r => <option key={r}>{r}</option>)}
        </select>
      </div>

      <div className="CountryList-container">
        {renderCountries()}
      </div>

    </div>
  )
}


export default CountryList;