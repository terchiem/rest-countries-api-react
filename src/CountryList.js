import React from 'react';
import PropTypes from 'prop-types';
import { changeSearch, changeRegion } from './actions';
import { getSearch, getRegion, getCountries, getCountriesByFilter } from './selectors';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import './CountryList.css';

import CountryCard from './CountryCard';

const REGIONS = new Set(['Africa', 'Americas', 'Asia', 'Europe', 'Oceania', 'Polar']);

/**
 * Presentational component that displays a list of CountryCards
 * populated by the countries prop.
 */

function CountryList({ countries, search, filterRegion, onSearchChange, onRegionChange, countriesFiltered }) {

  /** Creates a CountryCard for each country */
  function renderCountries() {
    let countryList = [...countriesFiltered];
    const dummies = countryList.length % 4;
    for (let i = 1; i <= dummies; i++) {
      countryList.push(`D-${i}`);
    }

    return countryList.map(code => <CountryCard key={code} country={countries[code]} />)
  }


  return (
    <div className="CountryList">

      <div className="CountryList-filter">
        <div className="CountryList-search">
          <i className="fa fa-search" aria-hidden="true"></i>
          <input
            type="text"
            name="search"
            aria-label="Search"
            value={search}
            placeholder="Search for a country..."
            onChange={onSearchChange}
          />
        </div>
        <div className="CountryList-select">
          <select
            name="region"
            id="region"
            value={filterRegion}
            onChange={onRegionChange}
          >
            <option value="">Filter by Region</option>
            {[...REGIONS].map(r => <option key={r}>{r}</option>)}
          </select>
          <i className="fa fa-chevron-down" aria-hidden="true"></i>
        </div>
      </div>

      <div className="CountryList-container">
        {renderCountries()}
      </div>

    </div>
  )
}

CountryList.propTypes = {
  search: PropTypes.string,
  filterRegion: PropTypes.string,
  countries: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  countriesFiltered: PropTypes.array,
  onSearchChange: PropTypes.func,
  onRegionChange: PropTypes.func
}

const mapStateToProps = createStructuredSelector({
  search: getSearch,
  filterRegion: getRegion,
  countries: getCountries,
  countriesFiltered: getCountriesByFilter
});

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (e) => {
      dispatch(changeSearch(e.target.value))
    },
    onRegionChange: (e) => {
      dispatch(changeRegion(e.target.value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryList);