import React, { useReducer } from 'react';
//Context
import AlertContext from './alertContext';
//Reducer
import AlertReducer from './alertReducer';
import { 
  SET_ALERT,
   REMOVE_ALERT }
  from '../types';



const AlertState = props => {
  const initialState = false;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // Set Alert
  const setAlert = () => {
    dispatch({
      type: SET_ALERT
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;