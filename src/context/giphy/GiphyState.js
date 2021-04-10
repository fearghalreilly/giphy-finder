import React, { useReducer } from 'react';
//Axios
import axios from 'axios';
//Context
import GiphyContext from './giphyContext';
//Reducer
import GiphyReducer from './giphyReducer';
import {
  
 
} from '../types';

const GiphyState = props => {
    const initialState = {
   
    };

const [state, dispatch] = useReducer(GiphyReducer, initialState);

return (
    <GiphyContext.Provider
      value={{
     
      }}
    >
      {props.children}
    </GiphyContext.Provider>
  );
};

export default GiphyState;