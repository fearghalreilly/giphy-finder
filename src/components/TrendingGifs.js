import React, { useContext, useEffect } from 'react'
import GiphyContext from '../context/giphy/giphyContext';
import Spinner from './Spinner';

//Styles
import styled from 'styled-components'

const Gifs = () => {
    const giphyContext = useContext(GiphyContext);

    const { trendingGifs, loading } = giphyContext;
    
    
    if (loading) {
        return <Spinner />;
      } else {

 return (
        <TrendingContainer>
         

            {trendingGifs.map(el => {
    return (
      <div>
        <img src={el.images.fixed_height.url}></img>
      </div>
    )
  })}
       
        </TrendingContainer>

    );

            }
};



export default Gifs;

const TrendingContainer = styled.div`
  background: black;
  padding: 45px 100px 45px 100px;
  width: 100%;
 columns: 4;
 column-gap: 15px;

 img {
   padding-top: 15px;
 }


  @media screen and (max-width: 1080px) {
  padding: 45px 55px 45px 55px;
  }

  @media screen and (max-width: 765px) {

    padding: 45px 35px 45px 35px;
  }
`

