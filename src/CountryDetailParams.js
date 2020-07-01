import React from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { getCountries } from './selectors';
import { connect } from 'react-redux';

import CountryDetail from './CountryDetail';

/**
 * Extracts url params and renders CountryDetail with corresponding country
 */

function CountryDetailParams({ countries }) {
  const { code } = useParams();

  return countries[code] ?
    <CountryDetail countries={countries} country={countries[code]} /> :
    <Redirect to="/" />;
}

const mapStateToProps = (state) => ({ countries: getCountries(state) });

export default connect(mapStateToProps)(CountryDetailParams);