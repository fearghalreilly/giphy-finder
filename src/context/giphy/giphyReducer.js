import {
GET_TRENDING_GIFS,
  SET_LOADING,
  SEARCH_GIFS,
  CLEAR_GIFS,
  RETREIVE_MODAL,
  ADD_FAV,
  DELETE_FAV,
  CLEAR_MODAL
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
    case CLEAR_GIFS:
        return {
          ...state,
          gifs: [],
          loading: false
        };
      case SET_LOADING:
        return {
          ...state,
          loading: true
        };

      case RETREIVE_MODAL:
        return {
          ...state,
          modalContent: action.payload,
          loading: false

        }
        case CLEAR_MODAL:
          return {
            ...state,
            modalContent: null,
            loading: false
  
          }
      case ADD_FAV:
        return {
            ...state,
            favourites: [...state.favourites, action.payload],
            loading: false
          
          }
        case DELETE_FAV:
            return{
                ...state,
                favourites: state.favourites.filter(favourite => favourite.id !== action.payload)
            };
      default:
        return state;
    }
  };

