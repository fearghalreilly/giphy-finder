import {
GET_TRENDING_GIFS,
  SET_LOADING,
  SEARCH_GIFS
  } from '../types';
  
  export default (state, action) => {
    switch (action.type) {
    case SEARCH_GIFS:
      return {
        ...state,
        gifs: action.payload,
        loading: false
    };
    case GET_TRENDING_GIFS:
      return {
        ...state,
        trendingGifs: action.payload,
        loading: false
      };
      case SET_LOADING:
        return {
          ...state,
          loading: true
        };
      default:
        return state;
    }
  };

