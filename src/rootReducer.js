import produce from 'immer';
import { FETCH_COUNTRIES, FETCH_COUNTRIES_SUCCESS, FETCH_COUNTRIES_FAIL, FILTER_REGION, FILTER_SEARCH } from "./actionTypes";

export const INITIAL_STATE = {
  loading: false,
  error: false,
  countries: false
};

const rootReducer = (state = INITIAL_STATE, action) =>
  produce(state, draft => {
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


      case FILTER_REGION:
        break;

      case FILTER_SEARCH:
        break;

      default:
        return draft;
    }
  });




export default rootReducer;