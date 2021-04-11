import {
GET_TRENDING_GIFS,
  SET_LOADING
  } from '../types';
  
  export default (state, action) => {
    switch (action.type) {
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

