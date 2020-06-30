import { FETCH_COUNTRIES, FETCH_COUNTRIES_SUCCESS, FETCH_COUNTRIES_FAIL, FILTER_REGION, FILTER_SEARCH } from "./actionTypes";

export function fetchCountries() {
  return {
    type: FETCH_COUNTRIES
  };
}

export function fetchCountriesSuccess(countries) {
  return {
    type: FETCH_COUNTRIES_SUCCESS,
    countries
  };
}

export function fetchCountriesFail(error) {
  return {
    type: FETCH_COUNTRIES_FAIL,
    error
  };
}

export function filterRegion(region) {
  return {
    type: FILTER_REGION,
    region
  };
}

export function filterSearch(search) {
  return {
    type: FILTER_SEARCH,
    search
  };
}
