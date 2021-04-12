import React, { useContext } from 'react'

//Context
import GiphyContext from '../context/giphy/giphyContext';

//Import FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faTimes,
 
  } from "@fortawesome/free-solid-svg-icons"


//Styles
import styled from 'styled-components'

const Modal = () => {
    const giphyContext = useContext(GiphyContext);

    const { modalContent, favourites, addFavourites, deleteFav, clearModalContent } = giphyContext;

    //Add Gif to Favourites
    const handleGifFav= gif => {

        if ( favourites.includes(gif)) 
        {
         return false;
        } else {
          addFavourites(gif)
        }
      } 

   
      

    return (
        <>
            {modalContent && (
   <ModalShadow>         
  <Detail>
  
  <GifSection>
      <div>
  <FontAwesomeIcon icon={faTimes} color="white" size="2x"  onClick={() => clearModalContent()} />
  </div>
    <img src={modalContent.images.fixed_height.url}></img>
    </GifSection>
    <Details>
    <Info>
        <p>Name: <span>{modalContent.title}</span></p>
    </Info>
    <ButtonSection>
    {!favourites.includes(modalContent) ?  (<FontAwesomeIcon icon={faStar} color="white" size="2x"  onClick={() => handleGifFav(modalContent)} />) : ( <FontAwesomeIcon icon={faStar} color="#884AF4" size="2x" onClick={() => deleteFav(modalContent.id)}/>)}
    </ButtonSection>
    </Details>
    </Detail>
    </ModalShadow>    
 
  )}

        </>
    )
}

export default Modal;

const ModalShadow = styled.div`
  width: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`
const Detail = styled.div`

  border-radius:10px;
  background: black;
  position: absolute;
  color: black;
  z-index: 12;
  margin: auto;
  width:100%;
  max-width: 750px;
  
  
   
`;
const Details = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
border-color: #884AF4;
padding: 0px 20px 20px 20px;


`;

const GifSection = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
padding: 20px 20px 20px 20px;

div {
    cursor: pointer;
}

img {
    padding-top: 20px;
}


     
`;

const ButtonSection = styled.div`
    cursor: pointer;

  
`;

const Info = styled.div`




p {
    color: #884AF4;
    font-weight: bold;

    @media screen and (max-width: 960px) {

font-size: 20px;

    
}

span {
    
    color: white;
    font-weight: normal;

    @media screen and (max-width: 960px) {

font-size: 20px;
}



  
`;

