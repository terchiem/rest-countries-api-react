import React from 'react';

/**
 * Presentational component that displays a list of CountryCards
 * populated by the countries prop.
 */

function CountryList({ countries }) {

  const countryCards = [];

  return (
    <div className="CountryList">

      <div className="CountryFilter">
        <input type="text" />
        <select name="region" id="region">
          <option value="hello">Hello</option>
        </select>
      </div>


      {countryCards}
    </div>
  )
}


export default CountryList;