import React from 'react';
import { Link } from 'react-router-dom';
import { addCommas } from './utils';
import './CountryCard.css';

/**
 * Displays brief details about a country
 */

function CountryCard({ country }) {
  if (!country) return <div className="CountryCard blank"></div>;

  const { name, code, population, region, capital, flag } = country;
  return (
    <Link className="CountryCard-link" to={`/country/${code}`}>
      <div className="CountryCard">
        <div>
          <img src={flag} alt={name} className="CountryCard-flag" />
        </div>
        <div className="CountryCard-detail">
          <h3>{name}</h3>
          <p>Population: {addCommas(population)}</p>
          <p>Region: {region || "—"}</p>
          <p>Capital: {capital || "—"}</p>
        </div>
      </div>
    </Link>
  )
}

export default CountryCard;