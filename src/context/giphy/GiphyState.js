import React, { useReducer, useEffect } from 'react';
//Axios
import axios from 'axios';
//Context
import GiphyContext from './giphyContext';
//Reducer
import GiphyReducer from './giphyReducer';
import {
    GET_TRENDING_GIFS,
    SET_LOADING
 
} from '../types';

const GiphyState = props => {
    const initialState = {
        trendingGifs: [

           

        ],
        trendingGif: {},
        gifs: [],
        gif: {},
        loading: false
    };

const [state, dispatch] = useReducer(GiphyReducer, initialState);

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
        getTrendingGifs,
        setLoading
     
      }}
    >
      {props.children}
    </GiphyContext.Provider>
  );
};

export default GiphyState;