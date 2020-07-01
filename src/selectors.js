import { createSelector } from 'reselect'

export const getCountries = (state) => state.countries;
export const getRegion = (state) => state.region;
export const getSearch = (state) => state.search;
export const getLoading = (state) => state.loading;


/** Returns an array of country codes based on region or search filters */
export const getCountriesByFilter = createSelector(
  [ getCountries, getRegion, getSearch ],
  (countries, region, search) => {
    let countryList = Object.keys(countries);

    if (region) countryList = countryList.filter(c => countries[c].region === region);
    if (search) countryList = countryList.filter(c => countries[c].name.toLowerCase().includes(search.toLowerCase()));

    return countryList;
  }
);
