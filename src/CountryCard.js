import React from 'react';
import './CountryCard.css';

/**
 * Displays brief details about a country
 */

function CountryCard({ country }) {
  const { name, population, region, capital, flag } = country;
  return (
    <div className="CountryCard">
      <div>
        <img src={flag} alt={name} className="CountryCard-flag" />
      </div>
      <div className="CountryCard-detail">
        <h3>{name}</h3>
        <p>Population: {population}</p>
        <p>Region: {region}</p>
        <p>Capital: {capital}</p>
      </div>
    </div>
  )
}

export default CountryCard;