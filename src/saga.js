import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_COUNTRIES } from './actionTypes';
import { fetchCountriesSuccess, fetchCountriesFail } from './actions';
import { formatCountries } from './utils';

/** Saga to fetch countries from API and dispatch to store */
function *fetchCountries() {
  const BASE_URL = "https://restcountries.eu/rest/v2/all";

  try {
    const response = yield call([axios, axios.get], BASE_URL);
    const formattedCountries = formatCountries(response.data);
    yield put(fetchCountriesSuccess(formattedCountries));
  }
  catch (err) {
    yield put (fetchCountriesFail(err))
  }
}

export default function *fetchCountriesSaga() {
  yield takeLatest(FETCH_COUNTRIES, fetchCountries);
}