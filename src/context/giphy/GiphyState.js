import React, { useReducer, useEffect } from 'react';
//Axios
import axios from 'axios';
//Context
import GiphyContext from './giphyContext';
//Reducer
import GiphyReducer from './giphyReducer';
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

const GiphyState = props => {
    const initialState = {
        trendingGifs: [],
        trendingGif: {},
        gifs: [],
        gif: {},
        loading: false,
        modalContent: null,
        favourites:[]
    
    };

const [state, dispatch] = useReducer(GiphyReducer, initialState);

//Search Gifs
const searchGifs = async text => {
  setLoading();

  const res = await axios.get(
    `https://api.giphy.com/v1/gifs/search?api_key=f9lj5mOeZNV6F2WX7nw90WWWZ5L3WPNS&q=${text}&limit=25&offset=0&rating=g&lang=en`
  );

  dispatch({
    type: SEARCH_GIFS,
    payload: res.data.data
  });
};

 // Get Trending Gif
 const getTrendingGifs = async () => {
    setLoading();

    const res = await axios.get('https://api.giphy.com/v1/gifs/trending', {params: {api_key: 'f9lj5mOeZNV6F2WX7nw90WWWZ5L3WPNS'
}
})
       
    dispatch({
      type: GET_TRENDING_GIFS,
      payload: res.data.data
    });
  };


useEffect(() => {
    getTrendingGifs();
}, [])
 

//Add Favourites
const addFavourites = content => dispatch({type: ADD_FAV, payload: content })

//Delete Favourites
  const deleteFav= id => {
    dispatch({ type: DELETE_FAV, payload: id });
};


//Retreive Modal Content
const getModalContent = content => dispatch({ type: RETREIVE_MODAL, payload: content });

//Clear Modal
const clearModalContent = () => dispatch({ type: CLEAR_MODAL });



// Clear Users
const clearGifs = () => dispatch({ type: CLEAR_GIFS });


// Set Loading
const setLoading = () => dispatch({ type: SET_LOADING });

return (
    <GiphyContext.Provider
      value={{
        trendingGifs: state.trendingGifs,  
        trendingGif: state.trendingGif,
        gifs: state.gifs,
        gif: state.gif,
        loading: state.loading,
        modalContent: state.modalContent,
        favourites: state.favourites,
        searchGifs,
        getTrendingGifs,
        setLoading,
        clearGifs,
        getModalContent,
        addFavourites,
        deleteFav,
        clearModalContent,
     
      }}
    >
      {props.children}
    </GiphyContext.Provider>
  );
};

export default GiphyState;