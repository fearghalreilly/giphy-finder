import React, { useContext, useState } from 'react'

//Context
import GiphyContext from '../context/giphy/giphyContext';

//Spinner
import Spinner from './Spinner';

//Styles
import styled from 'styled-components'

//Animations
import { motion , AnimatePresence} from "framer-motion";
import {
  fade,
} from "../animation";

const Gifs = () => {
    const giphyContext = useContext(GiphyContext);

    const {loading, gifs, getModalContent } = giphyContext;


    
    if (loading) {
        return <Spinner />;
      } else {

 return (
 <>  
 <AnimatePresence exitBeforeEnter>
<GifContainer variants={fade}
   initial='hidden'
   animate='show'
   exit='hidden'>
  <GifContent >
    {gifs.map(gif => {
      return (
  <SearchedGif onClick={() => getModalContent(gif)}>
   <img src={gif.images.fixed_width.url}></img>
  </SearchedGif>
  )
  })}
  </GifContent>
</GifContainer>
</AnimatePresence>
</>

 )
}
}


export default Gifs;
const GifContainer = styled(motion.div)`
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

const GifContent = styled.div`
columns: 5;
 column-gap: 10px;
 background: black;
 cursor: pointer;

 h2 {
   color: white;
 }
 @media screen and (max-width: 1024px) {
    columns: 4;
  }
 
  @media screen and (max-width: 960px) {
    columns: 3;
  }

  @media screen and (max-width: 765px) {
    columns: 2;
  }

  `
  const SearchedGif = styled.div`
   border-radius: 10px;
  margin-top: 10px;

 img {
  border-radius: 10px;
 }

`
