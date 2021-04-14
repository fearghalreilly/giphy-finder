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

//Animations
import { motion } from "framer-motion";
import {
  hover,
} from "../animation";




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
        <TrendingGif  onClick={() => getModalContent(gif)}>
          <motion.img variants={hover}  whileHover='hover' src={gif.images.fixed_height.url}></motion.img>
        </TrendingGif>
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

const TrendingContent = styled(motion.div)`
  columns: 4;
 column-gap: 10px;
 cursor: pointer;


 
  @media screen and (max-width: 960px) {
    columns: 3;
  }

  @media screen and (max-width: 765px) {
    columns: 2;
  }

  `
  const TrendingGif = styled(motion.div)`
  
  overflow: hidden;
  border-radius: 10px;
  margin-top: 10px;
  

 img {
  
   border-radius: 10px;
   overflow: hidden;
 }

`

