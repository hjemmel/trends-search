import {LOAD_TRENDS, LOAD_TRENDS_ERROR, LOAD_TRENDS_SUCCESS} from './constants';
import data from './data';

const initialState = {
  loading: false,
  error: false,
  trends: []
};

const trendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TRENDS:
      return {
        ...state,
        loading: false,
        trends: data
      };
    case LOAD_TRENDS_SUCCESS:
      return {
        ...state,
        loading: false,
        trends: data
      };
    case LOAD_TRENDS_ERROR:
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
};

export default trendsReducer;
