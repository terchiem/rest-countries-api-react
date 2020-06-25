import React from 'react';
import { Link } from 'react-router-dom';
import { addCommas } from './utils';

/**
 * Presentational component to display a country's details
 */

function CountryDetail({ countries, country }) {
  const {
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
    flag
  } = country;

  const currencyNames = currencies.map(c => c.name).join(', ');

  const borderCountries = borders.map(b => (
    <li key={b} className="CountryDetail-border">{countries[b].name}</li>
  ));

  return (
    <div className="CountryDetail">
      <Link className="CountryDetail-back" to="/">← Back</Link>

      <img src={flag} alt={name} />


      <div className="CountryDetail-container">
        <h2>{name}</h2>
        <div className="CountryDetail-info">
          <ul>
            <li><span>Native Name</span>: {nativeName}</li>
            <li><span>Population</span>: {addCommas(population)}</li>
            <li><span>Region</span>: {region}</li>
            <li><span>Sub Region</span>: {subregion}</li>
            <li><span>Capital</span>: {capital}</li>
          </ul>
          <ul>
            <li><span>Top Level Domain</span>: {topLevelDomain}</li>
            <li><span>Currencies</span>: {currencyNames}</li>
            <li><span>Languages</span>: {languages.join(', ')}</li>
          </ul>
        </div>
        <div className="CountryDetail-borders">
          Border Countries:
          <ul>
            {borderCountries}
          </ul>
        </div>
      </div>

    </div>
  );
}

export default CountryDetail;