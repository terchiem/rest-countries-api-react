import React from 'react';
import { useParams, Redirect } from 'react-router-dom';
import CountryDetail from './CountryDetail';

/**
 * Extracts url params and renders CountryDetail with corresponding country
 */

function CountryDetailParams({ countries }) {
  const { code } = useParams();

  return countries[code] ?
    <CountryDetail country={countries[code]} /> :
    <Redirect to="/" />;
}

export default CountryDetailParams;