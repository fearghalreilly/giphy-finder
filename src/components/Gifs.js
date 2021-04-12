import React, { useContext, useState } from 'react'

//Context
import GiphyContext from '../context/giphy/giphyContext';

//Spinner
import Spinner from './Spinner';

//Styles
import styled from 'styled-components'

const Gifs = () => {
    const giphyContext = useContext(GiphyContext);

    const {loading, gifs, getModalContent } = giphyContext;


    
    if (loading) {
        return <Spinner />;
      } else {

 return (
 <>  
<GifContainer>
  <GifContent >
    {gifs.map(gif => {
      return (
  <div onClick={() => getModalContent(gif)}>
   <img src={gif.images.fixed_height.url}></img>
  </div>
  )
  })}
  </GifContent>
</GifContainer>
</>

 )
}
}


export default Gifs;
const GifContainer = styled.div`
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
columns: 4;
 column-gap: 15px;
 background: black;
 cursor: pointer;

 h2 {
   color: white;
 }
 
  @media screen and (max-width: 960px) {
    columns: 3;
  }

  @media screen and (max-width: 765px) {
    columns: 2;
  }

 img {
   padding-top: 15px;
 }

`
