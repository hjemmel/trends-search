import {LOAD_TRENDS, LOAD_TRENDS_ERROR, LOAD_TRENDS_SUCCESS} from './constants';

export function loadTrends () {
  return {
    type: LOAD_TRENDS
  };
}

export function trendsLoaded (trends) {
  return {
    type: LOAD_TRENDS_SUCCESS,
    trends
  };
}

export function trendsLoadingError (error) {
  return {
    type: LOAD_TRENDS_ERROR,
    error
  };
}
