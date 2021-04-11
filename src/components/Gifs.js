import React, { useContext } from 'react'
import GiphyContext from '../context/giphy/giphyContext';
import Spinner from './Spinner';

//Import FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faBars,
  } from "@fortawesome/free-solid-svg-icons";

//Styles
import styled from 'styled-components'

const Gifs = () => {
    const giphyContext = useContext(GiphyContext);

    const { loading, gifs } = giphyContext;
    
    
    if (loading) {
        return <Spinner />;
      } else {

 return (

    <div style={userStyle}>
        {gifs.map(gif => (
          <div> 
              <img src={gif.images.fixed_height.url}></img>
          </div>
        ))}
      </div>
 )
}
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
  };


export default Gifs;


