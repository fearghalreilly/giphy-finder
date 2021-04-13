import React, { useContext, useEffect } from 'react'
import GiphyContext from '../context/giphy/giphyContext';
import Spinner from './Spinner';

//Import FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  } from "@fortawesome/free-solid-svg-icons";

//Styles
import styled from 'styled-components'

const TrendingGifs = () => {
    const giphyContext = useContext(GiphyContext);

    const { trendingGifs, getModalContent, gifs } = giphyContext;
    
    
  
 return (
   <>

{!gifs.length  > 0 && (
 
  <TrendingContainer>
  <TrendingHeader>
  <FontAwesomeIcon icon={faChartLine} color="#00E6CC" size="3x" />
  <h2>Trending</h2>
  </TrendingHeader>
  
           
  <TrendingContent>
              {trendingGifs.map(gif => {
      return (
        <div onClick={() => getModalContent(gif)}>
          <img src={gif.images.fixed_height.url}></img>
        </div>
      )
    })}
    </TrendingContent>
    </TrendingContainer>
  
      )}
  
  </>

 )
  }
       
export default TrendingGifs;

const TrendingContainer = styled.div`
  background: black;
  padding: 0px 100px 0px 100px;
  width: 100%;
  @media screen and (max-width: 1080px) {
  padding: 0px 55px 0px 55px;
  }

  @media screen and (max-width: 765px) {

    padding: 0px 35px 0px 35px;
  }
`
const TrendingHeader = styled.div`
display: flex;
justify-content: start;
align-items: flex-end;

h2 {
  color: white;
  font-size: 34px;
  padding-left: 10px;
 
}

`

const TrendingContent = styled.div`
  columns: 4;
 column-gap: 10px;
 cursor: pointer;

 
  @media screen and (max-width: 960px) {
    columns: 3;
  }

  @media screen and (max-width: 765px) {
    columns: 2;
  }

 img {
   margin-top: 10px;
   border-radius: 10px;
 }

`

