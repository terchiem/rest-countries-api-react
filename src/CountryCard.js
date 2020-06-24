import React from 'react';

/**
 * Displays brief details about a country
 */

function CountryCard({ country }) {
  const { name, population, region, capital, flag } = country;
  return (
    <div className="CountryCard">
      <img src={flag} alt={name} className="CountryCard-flag" />
      <h3>{name}</h3>
      <p>Population: {population}</p>
      <p>Region: {region}</p>
      <p>Capital: {capital}</p>
    </div>
  )
}

export default CountryCard;