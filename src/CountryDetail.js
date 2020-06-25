import React from 'react';
import { Link } from 'react-router-dom';
import { addCommas } from './utils';
import './CountryDetail.css';

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
    <Link key={b} to={`/country/${b}`} className="CountryDetail-border">{countries[b].name}</Link>
  ));

  return (
    <div className="CountryDetail">
      <Link to="/"><div className="CountryDetail-back">← Back</div></Link>

      <div className="CountryDetail-container">
        <img className="CountryDetail-flag" src={flag} alt={name} />
        <div className="CountryDetail-details">
          <h1>{name}</h1>
          <div className="CountryDetail-lists">
            <ul>
              <li><span>Native Name:</span> {nativeName}</li>
              <li><span>Population:</span> {addCommas(population)}</li>
              <li><span>Region:</span> {region}</li>
              <li><span>Sub Region:</span> {subregion}</li>
              <li><span>Capital:</span> {capital}</li>
            </ul>
            <ul>
              <li><span>Top Level Domain:</span> {topLevelDomain}</li>
              <li><span>Currencies:</span> {currencyNames}</li>
              <li><span>Languages:</span> {languages.join(', ')}</li>
            </ul>
          </div>
          <div className="CountryDetail-borders">
            <span>Border Countries:</span>
            <div>{borderCountries}</div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default CountryDetail;