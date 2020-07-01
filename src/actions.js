import { FETCH_COUNTRIES, FETCH_COUNTRIES_SUCCESS, FETCH_COUNTRIES_FAIL, CHANGE_SEARCH, CHANGE_REGION } from "./actionTypes";

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

export function changeSearch(search) {
  return {
    type: CHANGE_SEARCH,
    search
  };
}

export function changeRegion(region) {
  return {
    type: CHANGE_REGION,
    region
  };
}
