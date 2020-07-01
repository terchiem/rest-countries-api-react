import produce from 'immer';
import { FETCH_COUNTRIES, FETCH_COUNTRIES_SUCCESS, FETCH_COUNTRIES_FAIL, CHANGE_SEARCH, CHANGE_REGION } from "./actionTypes";

export const INITIAL_STATE = {
  loading: false,
  error: false,
  countries: false,
  search: '',
  region: ''
};

function rootReducer(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case FETCH_COUNTRIES:
        draft.loading = true;
        draft.error = false;
        draft.countries = false;
        break;


      case FETCH_COUNTRIES_SUCCESS:
        draft.loading = false;
        draft.countries = action.countries;
        break;


      case FETCH_COUNTRIES_FAIL:
        draft.loading = false;
        draft.error = action.error;
        break;

      case CHANGE_SEARCH:
        draft.search = action.search;
        break;

      case CHANGE_REGION:
        draft.region = action.region;
        break;

      default:
        return draft;
    }
  });
}


export default rootReducer;